# Inner Spirit Studio

<div align="center">
  <img width="1200" height="475" alt="Inner Spirit Studio Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

> Centro de yoga, meditación, danza y bienestar integral en La Candelaria, Bogotá, Colombia.

## Acerca del Proyecto

Inner Spirit Studio es un sitio web de una página única (SPA) desarrollado para un estudio de yoga y bienestar ubicado en el corazón histórico de Bogotá. El proyecto combina elementos 2D tradicionales con experiencias 3D inmersivas.

### Características Principales

- **Diseño SPA (Single Page Application)** - Navegación fluida sin recargas
- **Experiencias 3D** - Implementadas con React Three Fiber (Three.js)
- **E-commerce** - Tienda online con carrito de compras y checkout
- **Reservas** - Sistema de reservas para clases y eventos
- **Diseño responsivo** - Optimizado para todos los dispositivos
- **Estética premium** - Paleta de colores earthy con tipografía elegante

### Tecnologías

| Categoría | Tecnología |
|-----------|------------|
| Frontend Framework | React 18 |
| Build Tool | Vite |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS + CSS Custom Properties |
| 3D Graphics | Three.js + React Three Fiber |
| 3D Utilities | @react-three/drei, three-stdlib |
| WebGL | OGL |
| Testing | Vitest |

## Estructura del Proyecto

```
inner/
├── src/
│   ├── assets/              # Ilustraciones SVG
│   ├── components/
│   │   ├── effects/         # Componentes 3D (Galaxy, Ribbons, SplashCursor)
│   │   ├── layout/          # Header, Footer
│   │   ├── modals/          # BookingModal, CheckoutModal
│   │   ├── sections/        # Secciones de página
│   │   └── ui/              # Componentes UI (Button, ErrorBoundary)
│   ├── constants/           # Iconos y constantes globales
│   ├── context/             # React Context (Cart, Toast, Navigation)
│   ├── features/            # Módulos por feature
│   │   └── events/          # Eventos + Instagram feed
│   ├── hooks/               # Custom hooks globales
│   ├── pages/               # Páginas del sitio
│   ├── types/               # Definiciones de TypeScript
│   └── utils/               # Utilidades globales
├── tests/                   # Tests
├── public/                  # Assets estáticos
├── App.tsx                  # Componente raíz
├── index.tsx                # Entry point
├── vite.config.ts           # Configuración de Vite
├── tsconfig.json            # Configuración de TypeScript
├── Makefile                 # Comandos unificados
└── .env.example             # Variables de entorno (plantilla)
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm o pnpm

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El servidor de desarrollo estará disponible en `http://localhost:3000`.

### Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Iniciar servidor de desarrollo |
| `npm run build` | Construir para producción |
| `npm run preview` | Vista previa de la build |
| `npm run lint` | Verificar tipos TypeScript |
| `npm test` | Ejecutar tests |
| `make help` | Ver todos los comandos |

### Makefile

También puedes usar Makefile para comandos unificados:

```bash
make install    # Instalar dependencias
make dev        # Levantar servidor
make build      # Build de producción
make lint        # Verificar tipos
make test       # Ejecutar tests
make clean      # Limpiar artefactos
```

## Diseño y Estilo

### Paleta de Colores

| Nombre | Hex | Uso |
|--------|-----|-----|
| Sand Dune | `#EAE0CC` | Fondo base |
| Almond Silk | `#C9ADA1` | Acento |
| Dry Sage | `#A0A083` | Secundario |
| Grey Olive | `#798478` | Estructura |
| Blue Slate | `#4D6A6D` | CTA / Destacados |
| Ink | `#252520` | Texto principal |

### Tipografía

- **Headings:** Cormorant Garamond (serif, elegante)
- **Body:** Inter (sans-serif, legible)

## Variables de Ambiente

Ver `.env.example` para las variables requeridas. Copia a `.env.local` y configura tus valores:

- `VITE_WHATSAPP_NUMBER` - Número de WhatsApp para reservas
- `VITE_STUDIO_NAME` - Nombre del estudio
- `VITE_STUDIO_EMAIL` - Email de contacto
- `VITE_BOOKING_URL` - URL de herramienta de reservas (opcional)

## Contribución

1. Fork el repositorio
2. Crear una rama feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Add nueva caracteristica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abrir un Pull Request

## Contacto

- **Ubicación:** Transversal 1 # 17-29, La Candelaria, Bogotá
- **WhatsApp:** +57 321 224 8261
- **Email:** hola@innerspirit.co
- **Instagram:** @innerspirit_studio

---

<p align="center">
  © 2024 Inner Spirit Studio. Todos los derechos reservados.
</p>
