import { NextFunction, Request, Response, Router } from "express";
import { readFileSync } from "fs";
import { resolve } from "path";
import geoserver from "../middlewares/geoserver";

const router: Router = Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const html = readFileSync(
      resolve(resolve(__dirname, "public"), "index.html"),
      "utf-8"
    );
    res.send(html);
  } catch (e) {
    return next(e);
  }
});

router.get(/geoserver/, geoserver);

export default router;
