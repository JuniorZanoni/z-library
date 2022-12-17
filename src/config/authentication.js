import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

const secret = process.env.JWT_SECRET

const jwtConfig = {
  expiresIn: "7d",
  algorithm: "HS256",
};

export function generateToken(user) {
    return jwt.sign({ data: { user: user } }, secret, jwtConfig);
}

export function verifyToken(token) {
  return jwt.verify(token, secret);
}