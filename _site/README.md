# GVCW_ArteXDiversion
Gestor de galería estática (Jekyll) para ArteXDiversion

## Instalación y ejecución local

Requisitos:
- Ruby (2.7+), Bundler
- Jekyll

Pasos rápidos:

```bash
gem install bundler jekyll
bundle install
jekyll serve --livereload
```

El sitio quedará disponible en `http://127.0.0.1:4000`.

## Estructura de archivos

- `_config.yml` — configuración de Jekyll y colección `images`.
- `_layouts/` — plantillas: `default.html`, `image.html`.
- `_images/` — colección de entradas en Markdown para cada imagen.
- `assets/` — CSS y JS (estilos y carousel).
- `index.html` — página principal (lista secciones con carruseles).
- `sections.html`, `tags.html` — vistas para navegar por secciones y etiquetas.

### Formato de contenido (Markdown)

Cada archivo en `_images/` debe contener front-matter YAML con estos campos:

```
---
title: "Image Title"
description: "Description..."
date: "YYYY-MM-DD"
visible_from: "YYYY-MM-DD"
visible_until: "YYYY-MM-DD"   # opcionaL
is_hidden: false               # oculta inmediatamente si true
section: "Section Name"
image_url: "/path/to/image.jpg"
tags: ["Tag1","Tag2"]
origin_url: "https://origen.example.com"
---
```

La plantilla del sitio filtra automáticamente por `is_hidden`, `visible_from` y `visible_until` comparando con la hora del servidor (`site.time`).

## Visibilidad y programación

- `is_hidden: true` siempre oculta la entrada.
- Si `visible_from` es posterior a la fecha actual, la entrada no se mostrará hasta esa fecha.
- Si `visible_until` está presente y es anterior a la fecha actual, la entrada dejará de mostrarse.

Usa estas propiedades para programar publicaciones de imágenes o para ocultarlas temporalmente.

## Compartir en redes sociales

Las páginas individuales de imagen incluyen enlaces para compartir en Facebook y Twitter. Instagram no soporta compartir directo vía web; se recomienda enlazar la `origin_url` o proveer instrucciones de descarga.

## GitHub Pages

1. Crea un repositorio público en GitHub con este contenido.
2. En `Settings > Pages`, selecciona la rama `main` y la carpeta `/ (root)` o la rama `gh-pages` si usas esa opción.
3. Si tu `url` en `_config.yml` contiene `https://your-username.github.io/your-repo`, cámbialo antes de publicar.

Nota: GitHub Pages soporta Jekyll sin plugins adicionales; la configuración de colecciones y layouts aquí utiliza funcionalidades compatibles.

## Licencia y créditos

Este proyecto usa tecnologías libres (Jekyll, HTML, CSS, JS). Incluye una paleta de colores solicitada y un diseño minimalista.

Si necesitas permisos, contacto o créditos específicos, edita el archivo `README.md` y añade la información de contacto.

