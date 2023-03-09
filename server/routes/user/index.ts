import { NextFunction, Request, Response } from "express";

export default {
  home(req: Request, res: Response, next: NextFunction) {
    res.render("index", {
      title: "",
      KAKAO_API_KEY: process.env.KAKAO_API_KEY,
    });
  },
};
