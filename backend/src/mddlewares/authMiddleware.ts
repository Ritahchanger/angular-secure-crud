import { NextFunction, Request, Response } from "express";

import dotenv from "dotenv";

dotenv.config();

import jwt from "jsonwebtoken";

const authenticateKey = (req: any, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization || req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res
      .status(401)
      .json({ message: "Not authorized, invalid token key" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token is required" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    req.user = decoded;

    next()

  } catch (error: any) {
    console.log(error.message);
  }
};

export default authenticateKey;
