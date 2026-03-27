# Ecosistema Solido - Estado del Proyecto

## Estructura creada

Se agrego una capa de dominio para eventos en `src/modules/events/` con:

- `types.ts`: contratos de eventos y publicaciones de Instagram.
- `data/events.ts`: fuente unica de eventos, slots de reserva e imagenes.
- `services/instagramFeed.ts`: servicio con fallback local y soporte API externa.
- `hooks/useEventInstagramFeed.ts`: carga reactiva de publicaciones por evento.
- `utils/toBookingDetails.ts`: adaptador del dominio a `BookingModal`.
- `components/EventInstagramFeed.tsx`: feed visual con CTA directo a reserva.

Tambien se crearon carpetas de assets:

- `public/images/events/`
- `public/images/instagram/`

## Flujo implementado

1. Seleccion del evento.
2. Actualizacion del feed IG segun el evento activo.
3. CTA por publicacion que abre `BookingModal`.
4. `BookingModal` usa slots dinamicos del evento.
5. Reserva llega al carrito con metadata de origen (`Web`, `IG CTA`, `WhatsApp CTA`).

## Lo que falta para produccion

1. Backend real de publicaciones IG:
- Crear endpoint en backend (`VITE_IG_FEED_ENDPOINT`) con token de Meta API.
- Resolver renovacion de token de larga duracion.

2. Automatizacion por evento:
- Webhook o job programado para asociar nuevos posts IG al evento correcto.
- Reglas de matching (`eventSlug`, hashtags, fechas de campaña).

3. Reserva real:
- Persistir reservas en base de datos.
- Integrar pagos (Wompi/Stripe/Mercado Pago) y confirmacion transaccional.
- Control de cupos por slot para evitar sobreventa.

4. Operacion y calidad:
- Logging y alertas de fallos en feed IG y reservas.
- Tests de smoke para eventos/CTA/modal.
- Validacion de links IG y imagenes rotas en CI.

5. Marketing y medicion:
- Eventos de analytics (view_event, click_cta_ig, start_booking, complete_booking).
- UTM por CTA para atribucion de conversion por publicacion.

## Variables de entorno sugeridas

- `VITE_IG_FEED_ENDPOINT` URL del endpoint que devuelve publicaciones por evento.
- `VITE_IG_PROFILE_URL` URL del perfil principal de Instagram.
- `VITE_BOOKING_API_URL` API para crear reservas.

## Definicion minima del endpoint IG

```json
{
  "posts": [
    {
      "id": "ig-inner-dance-01",
      "imageUrl": "https://...",
      "caption": "Texto del post",
      "publishDate": "2026-03-22",
      "permalink": "https://instagram.com/p/...",
      "ctaLabel": "Reservar cupo"
    }
  ]
}
```
