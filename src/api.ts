import { Router } from "./deps.ts";
import * as image from "./models/dailyImage.ts";

const router = new Router();

router.get("/daily-image", (ctx) => {
  ctx.response.body = image.getApod();
});
router.get("/", (ctx) => {
  ctx.response.body = `Testing from api.ts`;
});

export default router;
