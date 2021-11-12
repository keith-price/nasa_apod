import { Router } from "./deps.ts";
import * as image from "./models/dailyImage.ts";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = `Testing from api.ts`;
});

router.get("/daily-image", (ctx) => {
  ctx.response.body = image.getApod();
});

export default router;
