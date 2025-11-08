# 🛒 Tema Mercado Libre para Shopify

Tema personalizado inspirado en Mercado Libre con color naranja principal, diseñado para tiendas con múltiples categorías y productos.

## 🎨 Características Principales

### Color Principal
- **Naranja (#FF6600)** como color dominante
- Paleta complementaria con gris suave y blanco
- Sistema de colores consistente en todo el tema

### Experiencia de Usuario
- ✅ Interfaz clara y ordenada
- ✅ Navegación eficiente entre categorías
- ✅ Diseño totalmente responsivo
- ✅ Hover effects y microinteracciones
- ✅ Quick add al carrito
- ✅ Breadcrumbs automáticos

## 📁 Archivos Creados

### CSS
- `assets/theme-ml-custom.css` - Sistema de diseño completo con variables CSS y componentes reutilizables

### Secciones Nuevas

1. **promo-bar-ml.liquid**
   - Barra promocional superior editable
   - Color de fondo y texto personalizables
   - Botón de cierre con localStorage
   - Ícono opcional

2. **hero-slider-ml.liquid**
   - Slider/carrusel hero principal
   - Autoplay configurable
   - Controles de navegación (flechas y dots)
   - Overlay oscuro ajustable
   - Botón CTA por slide

3. **categories-ml.liquid**
   - Categorías destacadas con iconos
   - 9 tipos de iconos predefinidos
   - Opción de usar imágenes personalizadas
   - Grid responsivo

4. **price-range-products-ml.liquid**
   - Sección "Menos de $XX.XXX"
   - Filtro dinámico por precio
   - Quick add integrado
   - Etiqueta de envío gratis opcional

5. **benefits-ml.liquid**
   - Beneficios con iconografía
   - 8 iconos predefinidos (envíos, pagos, seguridad, etc.)
   - Grid responsivo
   - Totalmente editable

### Snippets

- **breadcrumbs-ml.liquid**
  - Breadcrumbs automáticos
  - Compatible con productos, colecciones, blog y páginas
  - Estilo Mercado Libre

### Templates

- **index-ml.json**
  - Homepage personalizado con todas las secciones ML
  - Pre-configurado y listo para usar

## 🚀 Instalación

### Paso 1: Cargar Archivos CSS
El archivo `theme-ml-custom.css` se carga automáticamente en cada sección, pero también puedes agregarlo al `theme.liquid`:

```liquid
{{ 'theme-ml-custom.css' | asset_url | stylesheet_tag }}
```

### Paso 2: Agregar Secciones al Homepage

Opción A: **Usar el Template Pre-configurado**
1. En el admin de Shopify, ve a **Online Store > Themes**
2. Haz clic en **Customize**
3. En la parte superior izquierda, haz clic en el nombre de la página (Home page)
4. Selecciona **Change** → **index-ml**
5. ¡Listo! El homepage ahora usa el diseño ML

Opción B: **Agregar Secciones Manualmente**
1. Ve a **Online Store > Themes > Customize**
2. Haz clic en **Add section**
3. Busca y agrega las secciones ML en este orden:
   - Barra Promocional ML
   - Hero Slider ML
   - Categorías ML
   - Featured collection (nativa de Shopify)
   - Productos por Precio ML
   - Beneficios ML
   - Newsletter (nativa de Shopify)

### Paso 3: Configurar Colecciones

Para que funcionen las secciones de productos:

1. **Productos por Precio ML**:
   - Selecciona una colección en la configuración
   - Ajusta el precio máximo deseado
   - Los productos se filtrarán automáticamente

2. **Categorías ML**:
   - Edita cada bloque de categoría
   - Asigna el enlace a la colección correspondiente
   - Selecciona el ícono o sube una imagen

## 🎯 Configuración Recomendada

### Colores del Tema
Para cambiar los colores globales del tema, edita el archivo `theme-ml-custom.css`:

```css
:root {
  --color-ml-orange: #FF6600;
  --color-ml-orange-hover: #E85D00;
  /* ... más variables */
}
```

### Menú de Categorías
1. Ve a **Navigation** en el admin de Shopify
2. Crea o edita el menú principal
3. Agrega categorías como items del menú
4. El header mostrará automáticamente las categorías

## 🎨 Componentes CSS Reutilizables

### Botones

```liquid
<!-- Botón primario naranja -->
<button class="btn-ml-primary">Comprar ahora</button>

<!-- Botón secundario con borde -->
<button class="btn-ml-secondary">Ver más</button>

<!-- Botón link -->
<a href="#" class="btn-ml-link">Ver todos →</a>
```

### Tarjetas de Producto

Las tarjetas de producto utilizan la clase `.product-card-ml` que incluye:
- Hover effect con elevación
- Quick add button que aparece en hover
- Badges de descuento
- Etiqueta de envío gratis
- Transiciones suaves

### Utilidades

```liquid
<!-- Contenedor con max-width -->
<div class="container-ml">
  <!-- Contenido -->
</div>

<!-- Espaciado de sección -->
<div class="section-spacing-ml">
  <!-- Contenido con padding top/bottom responsivo -->
</div>

<!-- Colores -->
<p class="text-ml-orange">Texto naranja</p>
<div class="bg-ml-orange">Fondo naranja</div>
```

## 📱 Responsividad

Todos los componentes son completamente responsivos:

- **Mobile**: < 768px
- **Tablet**: 768px - 990px
- **Desktop**: > 990px

Los breakpoints están definidos en las variables CSS.

## 🔧 Personalización Avanzada

### Agregar Breadcrumbs a Páginas

En cualquier template (product.liquid, collection.liquid, etc.):

```liquid
{% render 'breadcrumbs-ml' %}
```

### Modificar Sombras

```css
:root {
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 1px 6px 0 rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 6px 16px 0 rgba(0, 0, 0, 0.12);
}
```

### Cambiar Bordes Redondeados

```css
:root {
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-full: 9999px;
}
```

## 🎓 Mejores Prácticas

1. **Imágenes**:
   - Usa imágenes de al menos 1200px de ancho
   - Formatos recomendados: JPG para fotos, PNG para logos
   - Comprime las imágenes antes de subirlas

2. **Categorías**:
   - Limita a 6-8 categorías destacadas en la homepage
   - Usa nombres cortos (máximo 2 palabras)

3. **Colecciones**:
   - Crea colecciones específicas para cada sección
   - Usa condiciones automáticas cuando sea posible

4. **Performance**:
   - Las imágenes usan lazy loading automáticamente
   - El CSS está optimizado y usa variables

## 🐛 Solución de Problemas

### Los estilos ML no se aplican
- Verifica que `theme-ml-custom.css` esté en la carpeta `assets/`
- Asegúrate de que el archivo se cargue con: `{{ 'theme-ml-custom.css' | asset_url | stylesheet_tag }}`

### Quick Add no funciona
- El botón quick add requiere JavaScript
- Verifica que `cart.js` esté cargado
- Revisa la consola del navegador para errores

### El slider no se mueve
- Verifica que tengas al menos 2 slides
- Revisa que el JavaScript esté habilitado
- Comprueba la consola para errores

## 📊 Estructura de Archivos

```
Mi Tema Wuondu/
├── assets/
│   └── theme-ml-custom.css
├── sections/
│   ├── promo-bar-ml.liquid
│   ├── hero-slider-ml.liquid
│   ├── categories-ml.liquid
│   ├── price-range-products-ml.liquid
│   └── benefits-ml.liquid
├── snippets/
│   └── breadcrumbs-ml.liquid
└── templates/
    └── index-ml.json
```

## 🎉 Siguientes Pasos

1. **Cargar productos**: Asegúrate de tener productos en tus colecciones
2. **Configurar menú**: Crea tu menú de navegación con categorías
3. **Personalizar colores**: Ajusta los colores según tu marca (opcional)
4. **Agregar imágenes**: Sube imágenes al hero slider
5. **Configurar secciones**: Personaliza textos y enlaces
6. **Probar en mobile**: Verifica que todo se vea bien en dispositivos móviles

## 💡 Tips Adicionales

- Usa la barra promocional para ofertas temporales
- Actualiza el slider hero regularmente con nuevas promociones
- Aprovecha la sección "Menos de $XX" para impulsar productos económicos
- Los breadcrumbs mejoran el SEO y la navegación

## 📞 Soporte

Si tienes dudas sobre la implementación:
1. Revisa la consola del navegador para errores
2. Verifica que todos los archivos estén en las carpetas correctas
3. Asegúrate de que las colecciones tengan productos

## ✨ Características Futuras Sugeridas

- [ ] Búsqueda modal mejorada con autocompletado
- [ ] Menú mega con categorías y subcategorías
- [ ] Sistema de comparación de productos
- [ ] Wishlist / Lista de deseos
- [ ] Filtros avanzados por precio y atributos
- [ ] Vista rápida de productos (quick view)

---

**Versión**: 1.0
**Compatible con**: Shopify Online Store 2.0
**Tema base**: Dawn
**Fecha**: Noviembre 2025
