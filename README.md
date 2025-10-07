# HRG Soluciones S.A.S - Sitio Web Corporativo

> Sitio web oficial de HRG Soluciones S.A.S - Especialistas en servicios eléctricos, construcción civil y energías renovables.

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC.svg)](https://tailwindcss.com/)

##  Tecnologías Utilizadas

### Frontend
- **React 18.3.1** - Biblioteca de JavaScript para interfaces de usuario
- **TypeScript 5.5.3** - Superset tipado de JavaScript
- **Vite 5.4.2** - Build tool y dev server ultrarrápido
- **Tailwind CSS 3.4.1** - Framework de CSS utility-first

### Bibliotecas y Herramientas
- **React Leaflet 4.2.1** - Mapas interactivos
- **Lucide React 0.344.0** - Iconos SVG
- **ESLint 9.9.1** - Linter para código JavaScript/TypeScript
- **PostCSS 8.4.35** - Procesador de CSS
- **Autoprefixer 10.4.18** - Plugin para compatibilidad de navegadores

##  Instalación y Configuración

### Prerrequisitos
- **Node.js** (versión 18 o superior)
- **npm** o **yarn**

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Charlsz/hrg-soluciones-website.git
   cd hrg-soluciones-website
   ```

2. **Configurar PowerShell (Windows)**
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

3. **Instalar dependencias**
   ```bash
   npm install
   ```

4. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

5. **Abrir en navegador**
   ```
   http://localhost:5173
   ```

##  Scripts Disponibles

```bash
# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linter
npm run lint
```

## Estructura del Proyecto

```
hrg-soluciones-website/
├── public/                     # Archivos estáticos
│   ├── gallerywork/           # Galería de imágenes de proyectos
│   ├── hrglogo.png            # Logo principal
│   └── ...                    # Otras imágenes
├── src/
│   ├── components/            # Componentes React
│   │   ├── About.tsx         # Sección "Nosotros"
│   │   ├── Clients.tsx       # Sección de clientes
│   │   ├── Contact.tsx       # Formulario de contacto
│   │   ├── Footer.tsx        # Pie de página
│   │   ├── Header.tsx        # Encabezado y navegación
│   │   ├── Hero.tsx          # Sección principal
│   │   ├── OSMMap.tsx        # Mapa interactivo
│   │   ├── Services.tsx      # Servicios y galería
│   │   └── WhatsAppFloat.tsx # Botón flotante WhatsApp
│   ├── App.tsx               # Componente principal
│   ├── main.tsx              # Punto de entrada
│   └── index.css             # Estilos globales
├── index.html                # Template HTML
├── package.json              # Dependencias y scripts
├── tailwind.config.js        # Configuración Tailwind
├── tsconfig.json             # Configuración TypeScript
└── vite.config.ts            # Configuración Vite
```

##  Paleta de Colores

| Color | Código | Uso |
|-------|--------|-----|
| Amarillo Principal | `#FFD700` | Botones, acentos, scrollbar |
| Amarillo Hover | `#e6c200` | Estados hover |
| Gris Oscuro | `#1f2937` | Texto principal |
| Gris Claro | `#f9fafb` | Fondos |
| Blanco | `#ffffff` | Backgrounds, texto inverso |



<div align="center">

**Desarrollado para HRG Soluciones S.A.S**

[Sitio Web](https://hrgsoluciones.com) | [Contacto](mailto:administracion@hrgsoluciones.com)

</div>
