import type { StudioEvent } from '../types';

export const studioEvents: StudioEvent[] = [
  {
    slug: 'inner-dance-luna-nueva',
    tag: 'Evento Insignia',
    title: 'INNER DANCE',
    subtitle: 'Ritual de Luna Nueva',
    description:
      'No es una fiesta. Es un ritual contemporaneo para soltar tension, mover el cuerpo con libertad y abrir espacio a la claridad.',
    dateLabel: 'Sabados · 6:00 PM a 10:00 PM',
    price: 55000,
    priceLabel: '$55.000 COP puerta · $44.000 anticipado',
    illustrationName: 'dance',
    coverImageUrl: '/images/events/inner-dance.jpg',
    bookingSlots: [
      'Sabado 6:00 PM · Cupo general',
      'Sabado 7:00 PM · Ingreso tardio',
      'Lista de espera · Confirmacion por WhatsApp',
    ],
    type: 'event',
    instagramPosts: [
      {
        id: 'ig-inner-dance-01',
        eventSlug: 'inner-dance-luna-nueva',
        imageUrl: '/images/instagram/inner-dance-post-1.jpg',
        caption:
          'Esta semana activamos pista ritual. Llega con ropa comoda y tu intencion.',
        publishDate: '2026-03-22',
        permalink: 'https://instagram.com/innerspirit_studio',
        ctaLabel: 'Reservar cupo de Inner Dance',
      },
      {
        id: 'ig-inner-dance-02',
        eventSlug: 'inner-dance-luna-nueva',
        imageUrl: '/images/instagram/inner-dance-post-2.jpg',
        caption:
          'Set sonoro para expansion y cierre en silencio. Ultimos cupos anticipados.',
        publishDate: '2026-03-24',
        permalink: 'https://instagram.com/innerspirit_studio',
        ctaLabel: 'Quiero este evento',
      },
    ],
  },
  {
    slug: 'rocket-yoga-training',
    tag: 'Formacion · Abril 2026',
    title: 'ROCKET YOGA',
    subtitle: 'Teacher Training Nivel 1 · 50 horas',
    description:
      'Entrenamiento intensivo para practicantes y profesores que buscan metodologia clara, practica asistida y certificado internacional.',
    dateLabel: '17 al 21 de abril 2026 · 9:00 AM a 7:00 PM',
    price: 95000,
    priceLabel: '$950 USD · Early Bird $850 hasta 15 marzo',
    illustrationName: 'yoga',
    coverImageUrl: '/images/events/rocket-yoga.jpg',
    bookingSlots: [
      '17 abril · Dia 1 presencial',
      'Pack completo 17-21 abril',
      'Lista de espera · siguiente cohorte',
    ],
    type: 'event',
    instagramPosts: [
      {
        id: 'ig-rocket-01',
        eventSlug: 'rocket-yoga-training',
        imageUrl: '/images/instagram/rocket-yoga-post-1.jpg',
        caption:
          'Abrimos cohorte para Rocket Yoga TT. Incluye manual, mentoring y certificado.',
        publishDate: '2026-03-19',
        permalink: 'https://instagram.com/innerspirit_studio',
        ctaLabel: 'Separar cupo en Rocket TT',
      },
      {
        id: 'ig-rocket-02',
        eventSlug: 'rocket-yoga-training',
        imageUrl: '/images/instagram/rocket-yoga-post-2.jpg',
        caption:
          'Sesion Q&A para resolver dudas de formacion. Early bird activo esta semana.',
        publishDate: '2026-03-23',
        permalink: 'https://instagram.com/innerspirit_studio',
        ctaLabel: 'Reservar y aplicar',
      },
    ],
  },
  {
    slug: 'circulo-luna-llena',
    tag: 'Ritual Mensual',
    title: 'CIRCULO LUNA LLENA',
    subtitle: 'Meditacion, journaling y sonido',
    description:
      'Encuentro mensual para cerrar ciclos con respiracion, escritura guiada y ceremonia sonora en comunidad.',
    dateLabel: 'Viernes de luna llena · 7:00 PM',
    price: 44000,
    priceLabel: '$44.000 COP anticipado',
    illustrationName: 'ritual',
    coverImageUrl: '/images/events/circulo-luna.jpg',
    bookingSlots: [
      'Viernes 7:00 PM · Candelaria',
      'Viernes 7:00 PM · Streaming privado',
      'Pack mensual · 3 encuentros',
    ],
    type: 'event',
    instagramPosts: [
      {
        id: 'ig-luna-01',
        eventSlug: 'circulo-luna-llena',
        imageUrl: '/images/instagram/luna-post-1.jpg',
        caption:
          'Ritual de luna llena con meditacion guiada y cierre energetico en circulo.',
        publishDate: '2026-03-20',
        permalink: 'https://instagram.com/innerspirit_studio',
        ctaLabel: 'Reservar circulo de luna',
      },
      {
        id: 'ig-luna-02',
        eventSlug: 'circulo-luna-llena',
        imageUrl: '/images/instagram/luna-post-2.jpg',
        caption:
          'Trae tu journal y una intencion clara. Cupos limitados para presencial.',
        publishDate: '2026-03-25',
        permalink: 'https://instagram.com/innerspirit_studio',
        ctaLabel: 'Apartar cupo ahora',
      },
    ],
  },
];

export const getEventBySlug = (slug: string): StudioEvent | undefined =>
  studioEvents.find((event) => event.slug === slug);
