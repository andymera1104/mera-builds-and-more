# Mera Constructions LLC — Guia para subir y publicar por Git

## 1. Subir el proyecto a GitHub

Opcion A (recomendada, automatica):
En el editor de Lovable abre el menu **+** (abajo a la izquierda) → **GitHub** → **Connect project**.
Autoriza la app y crea el repositorio. A partir de ahi cada cambio se sincroniza en los dos sentidos.

Opcion B (manual, desde tu computadora):

```sh
git init
git add .
git commit -m "Mera Constructions LLC"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/mera-constructions.git
git push -u origin main
```

## 2. Variables de entorno

Copia `.env.example` a `.env` y completa los valores. En el hosting hay que
cargar las mismas variables en su panel de "Environment Variables":

| Variable | Uso |
| --- | --- |
| `VITE_SUPABASE_URL` | conexion publica a la base de datos |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | clave publica del navegador |
| `VITE_SUPABASE_PROJECT_ID` | id del proyecto |
| `SUPABASE_URL` / `SUPABASE_PUBLISHABLE_KEY` / `SUPABASE_PROJECT_ID` | lo mismo, del lado servidor |
| `SUPABASE_SERVICE_ROLE_KEY` | guardar cotizaciones, reservas y prospectos |
| `LOVABLE_API_KEY` | respuestas del chat con IA y envio de correos |
| `GOOGLE_MAIL_API_KEY` | envio de avisos a tu Gmail |

Nunca subas el archivo `.env` con claves privadas al repositorio.

## 3. Comandos de build

```sh
npm install      # o bun install
npm run build    # genera dist/client (archivos publicos) y dist/server (servidor)
npm run preview  # prueba local del build
```

- Comando de build: `npm run build`
- Carpeta de publicacion: `dist/client`
- Carpeta del servidor: `dist/server`
- Node: 20 o superior

Si el deploy falla con **"Deploy directory 'dist/client' does not exist"**, es porque
el hosting no ejecuto el build o fallo antes de terminar. Revisa que:

1. El comando de build sea `npm run build` (no `npm run dev` ni vacio).
2. La version de Node sea 20 o superior.
3. Las variables de entorno esten cargadas antes del build.
4. La carpeta base del proyecto sea la raiz del repositorio.

En Netlify ya queda todo configurado con el archivo `netlify.toml` incluido.

Este sitio no es HTML estatico: usa servidor (formularios, chat, correos), asi que
necesita un hosting que ejecute Node o Cloudflare Workers (Cloudflare Pages/Workers,
Netlify, Vercel, Railway). Un hosting compartido tipo cPanel solo con archivos no sirve.


## 4. Publicar

- **Con Lovable:** boton **Publish** arriba a la derecha. Queda en
  `https://mera-builds-and-more.lovable.app` y puedes conectar tu dominio en
  Project Settings → Domains.
- **Con tu proveedor por Git:** conecta el repositorio, usa el comando y carpeta
  de arriba, carga las variables de entorno y despliega desde la rama `main`.

## 5. Base de datos

Las tablas estan en `drizzle/migrations/`. Si usas un proyecto de base de datos
nuevo, ejecuta esos archivos SQL en orden antes del primer despliegue.
