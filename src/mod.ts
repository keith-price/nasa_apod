import { Application, log, send } from "./deps.ts";

import api from "./api.ts";

const app = new Application();
const PORT = 8000;

app.use(api.routes());

app.use(async (ctx) => {
  const filePath = ctx.request.url.pathname;
  const fileWhiteList = [
    "/index.html",
    "/javascripts/script.js",
    "/stylesheets/style.css",
    "/videos/video1-opt.mp4",
  ];

  if (fileWhiteList.includes(filePath)) {
    await send(ctx, filePath, {
      root: `${Deno.cwd()}/public`,
    });
  }
});

if (import.meta.main) {
  log.info(`Starting server on port ${PORT}....`);
  await app.listen({
    port: PORT,
  });
}
