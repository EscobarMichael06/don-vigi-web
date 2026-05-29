# Flujo de Desarrollo y Despliegue (Development Workflow)

**Nota para Agentes de IA:** Siempre que se te pida realizar cambios en este proyecto o publicarlos, debes seguir estrictamente este flujo de trabajo.

## 1. Desarrollo y Pruebas Locales
Todos los cambios al código (ej. modificaciones en `index.html`, CSS, o JS) deben probarse primero de forma local antes de publicarse.
- **Visualización local:** El usuario puede abrir el archivo `index.html` directamente en su navegador usando la ruta local (`file:///...`).
- **Consideraciones de red:** Debido a las restricciones de seguridad (CORS) de los navegadores al abrir archivos locales, las peticiones a servicios externos (como la base de datos de Google Sheets) deben utilizar **JSONP** (inyección de `<script>`) en lugar de `fetch()`. Esto asegura que el código funcione perfectamente tanto en el entorno local del usuario como en producción.

## 2. Despliegue a Producción (Vercel vía GitHub)
Este proyecto está vinculado automáticamente a Vercel a través del repositorio de GitHub (`EscobarMichael06/don-vigi-web`). 

**Regla de oro:** **NO** utilices el agente visual (navegador), ni Vercel CLI, ni intentes hacer despliegues manuales. El despliegue es completamente automático mediante Git.

Para desplegar cualquier cambio a internet, simplemente ejecuta los comandos estándar de Git desde la terminal:

```bash
git add .
git commit -m "feat: describe los cambios aquí"
git push origin main
```

Una vez que se hace el `git push`, los servidores de Vercel detectarán la actualización en la rama `main` de GitHub y la publicarán en internet de forma automática en aproximadamente 15-30 segundos.
