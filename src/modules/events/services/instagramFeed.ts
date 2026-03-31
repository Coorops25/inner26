import type { InstagramEventPost, StudioEvent } from '../types';

const feedCache = new Map<string, InstagramEventPost[]>();

interface InstagramFeedResponse {
  posts?: Array<Partial<InstagramEventPost>>;
}

const normalizePost = (
  rawPost: Partial<InstagramEventPost>,
  fallbackPost: InstagramEventPost,
  eventSlug: string,
): InstagramEventPost => {
  const normalizedId = rawPost.id ?? `${eventSlug}-${fallbackPost.id}`;
  const ctaLabel = rawPost.ctaLabel ?? fallbackPost.ctaLabel;
  if (!ctaLabel) {
    throw new Error('ctaLabel is required');
  }
  return {
    id: normalizedId,
    eventSlug,
    imageUrl: rawPost.imageUrl ?? fallbackPost.imageUrl,
    caption: rawPost.caption ?? fallbackPost.caption,
    publishDate: rawPost.publishDate ?? fallbackPost.publishDate,
    permalink: rawPost.permalink ?? fallbackPost.permalink,
    ctaLabel,
  };
};

export const getInstagramPostsForEvent = async (
  event: StudioEvent,
): Promise<InstagramEventPost[]> => {
  const cached = feedCache.get(event.slug);
  if (cached) {
    return cached;
  }

  const endpoint = import.meta.env.VITE_IG_FEED_ENDPOINT as string | undefined;
  if (!endpoint) {
    feedCache.set(event.slug, event.instagramPosts);
    return event.instagramPosts;
  }

  try {
    const response = await fetch(`${endpoint}?eventSlug=${event.slug}`);
    if (!response.ok) {
      throw new Error(`Feed request failed with status ${response.status}`);
    }

    const payload = (await response.json()) as InstagramFeedResponse;
    const posts = payload.posts ?? [];
    if (posts.length === 0) {
      feedCache.set(event.slug, event.instagramPosts);
      return event.instagramPosts;
    }

    if (event.instagramPosts.length === 0) {
      throw new Error(`Event ${event.slug} has no fallback Instagram posts`);
    }

    const normalized = posts.map((post, index) => {
      const fallbackPost = event.instagramPosts[index % event.instagramPosts.length];
      if (!fallbackPost) {
        throw new Error(`Failed to get fallback post for index ${index}`);
      }
      return normalizePost(post, fallbackPost, event.slug);
    });

    feedCache.set(event.slug, normalized);
    return normalized;
  } catch (error) {
    console.warn('Using local Instagram fallback feed for event', event.slug, error);
    feedCache.set(event.slug, event.instagramPosts);
    return event.instagramPosts;
  }
};
