import * as dotenv from "dotenv";
dotenv.config();
import { generateToken } from "../config/authentication.js";

class UserController {
  static login = (req, res) => {
    const { user, password } = req.body;

    if (user == process.env.LOGIN && password == process.env.PASSWORD) {
      const token = generateToken(user)

      res.status(200).json({ token });
    }
  };
}

export default UserController;
