export interface InstagramEventPost {
  id: string;
  eventSlug: string;
  imageUrl: string;
  caption: string;
  publishDate: string;
  permalink: string;
  ctaLabel?: string;
}

export interface StudioEvent {
  slug: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  dateLabel: string;
  price: number;
  priceLabel: string;
  illustrationName: string;
  coverImageUrl: string;
  bookingSlots: string[];
  type: 'event';
  instagramPosts: InstagramEventPost[];
}
