# Inner Spirit Studio

<div align="center">
  <img width="1200" height="475" alt="Inner Spirit Studio Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

> Centro de yoga, meditación, danza y bienestar integral en La Candelaria, Bogotá, Colombia.

## Acerca del Proyecto

Inner Spirit Studio es un sitio web de una página única (SPA) desarrollado para un estudio de yoga y bienestar ubicado en el corazón histórico de Bogotá. El proyecto combina elementos 2D tradicionales con experiencias 3D inmersivas.

### Características Principales

- **Diseño SPA (Single Page Application)** - Navegación fluida sin recargas
- **Experiencias 3D** - Implementedas con React Three Fiber (Three.js)
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

## Estructura del Proyecto

```
inner/
├── components/          # Componentes React reutilizables
│   ├── Header.tsx       # Navegación principal
│   ├── Footer.tsx       # Pie de página
│   ├── HeroSection.tsx  # Sección hero con efectos 3D
│   ├── Galaxy.tsx       # Componente 3D de fondo
│   ├── ShopSection.tsx  # Catálogo de productos
│   └── ...              # Más componentes de secciones
├── pages/               # Páginas del sitio
│   ├── HomePage.tsx     # Página principal
│   ├── AboutPage.tsx    # Nosotros
│   ├── ClassesPage.tsx  # Clases de yoga
│   ├── EventsPage.tsx   # Eventos
│   ├── ShopPage.tsx     # Tienda
│   └── ...
├── context/             # Contextos de React
│   └── CartContext.tsx  # Estado global del carrito
├── constants.tsx        # Iconos y constantes globales
├── types.ts             # Definiciones de tipos TypeScript
├── App.tsx              # Componente raíz
├── index.html           # Entry point HTML
└── vite.config.ts       # Configuración de Vite
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

### Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
GEMINI_API_KEY=tu_api_key_aqui
```

*(Nota: La API de Gemini es opcional y solo es necesaria para ciertas funcionalidades de IA)*

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

## Secciones del Sitio

1. **Hero** - Presentación con efectos 3D inmersivos
2. **Studio** - Información sobre el espacio
3. **About** - Historia y filosofía
4. **Find Your Practice** - Diferentes tipos de práctica
5. **Events** - Eventos especiales y talleres
6. **Consultorio** - Servicios de consulta
7. **Testimonials** - Testimonios de clientes
8. **Shop** - Tienda de productos
9. **Blog** - Artículos sobre bienestar
10. **Newsletter** - Suscripción al boletín

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