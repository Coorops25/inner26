import { useEffect, useState } from 'react';
import { getInstagramPostsForEvent } from '../services/instagramFeed';
import type { InstagramEventPost, StudioEvent } from '../types';

interface UseEventInstagramFeedResult {
  posts: InstagramEventPost[];
  isLoading: boolean;
}

export const useEventInstagramFeed = (
  event: StudioEvent,
): UseEventInstagramFeedResult => {
  const [posts, setPosts] = useState<InstagramEventPost[]>(event.instagramPosts);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let active = true;
    setIsLoading(true);

    getInstagramPostsForEvent(event)
      .then((resolvedPosts) => {
        if (active) {
          setPosts(resolvedPosts);
        }
      })
      .finally(() => {
        if (active) {
          setIsLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, [event]);

  return { posts, isLoading };
};
