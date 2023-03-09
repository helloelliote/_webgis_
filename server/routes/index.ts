import { NextFunction, Request, Response, Router } from "express";
import user from "./user";

const router: Router = Router();

router.get("/", /*user.isAuthenticated,*/ user.home);

router.get(/geoserver/, (req: Request, res: Response, next: NextFunction) => {
  res.redirect(302, `http://${req.hostname}:8080${req.originalUrl}`);
});

export default router;
