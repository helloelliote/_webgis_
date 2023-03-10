import { NextFunction, Request, Response, Router } from "express";
import { resolve } from "path";
import geoserver from "../middlewares/geoserver";

const router: Router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.sendFile("index.html", { root: resolve(__dirname, "public") });
});

router.get(/geoserver/, geoserver);

export default router;
