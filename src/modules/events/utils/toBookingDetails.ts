import type { BookingDetails } from '@/types';
import type { StudioEvent } from '../types';

export const toEventBookingDetails = (
  event: StudioEvent,
  source: BookingDetails['source'] = 'site',
): BookingDetails => ({
  type: event.type,
  title: event.title,
  price: event.price,
  imageUrl: event.coverImageUrl,
  illustrationName: event.illustrationName,
  eventSlug: event.slug,
  availableSlots: event.bookingSlots,
  preselectedSlot: event.bookingSlots[0],
  source,
});
