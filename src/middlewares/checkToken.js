import { verifyToken } from "../config/authentication.js";

export default function checkToken(req, res, next) {
  const { token } = req.body;

  try {
    verifyToken(token);
    next();
  } catch (error) {
    res.status(400).json({ message: "Token invalid" });
  }
}
