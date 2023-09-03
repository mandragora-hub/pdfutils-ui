

import { Request, Response, NextFunction } from "express";
import HttpException from "./httpException";

function middleware(err: any, _req: Request, res: Response, _next: NextFunction) {

  try {
    if (err.name == "HttpException") handleHttpException(res, err);
  } catch {
    return res.status(500).send("INTERNAL_SERVER_ERROR");
  }
}

function handleHttpException(res: Response, err: HttpException) {
  return res
    .status(err.statusCode)
    .send({ code: err.statusCode, status: "FAILED", message: err.message });
}

export default middleware
