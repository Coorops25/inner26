import type { BookingDetails } from '../../../types';
import type { StudioEvent } from '../types';

export const toEventBookingDetails = (
  event: StudioEvent,
  source: BookingDetails['source'] = 'site',
): BookingDetails => {
  if (event.status === 'waitlist') {
    throw new Error('This event is waitlist-only and cannot be checked out directly');
  }

  const preselectedSlot = event.bookingSlots[0];
  if (!preselectedSlot) {
    throw new Error('Event must have at least one booking slot');
  }
  return {
    type: event.type,
    title: event.title,
    price: event.price,
    imageUrl: event.coverImageUrl,
    illustrationName: event.illustrationName,
    eventSlug: event.slug,
    availableSlots: event.bookingSlots,
    preselectedSlot,
    source,
  };
};
