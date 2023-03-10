import { NextFunction, Request, Response } from "express";

export default function geoserver(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.redirect(302, `http://${req.hostname}:8080${req.originalUrl}`);
}
