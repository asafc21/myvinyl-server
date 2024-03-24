import { verifyToken } from "../token/jwt.js";
import handleError from "../utils/handleError.js";

const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.token) throw new Error("you must be logged in");
    const payload = await verifyToken(req.headers.token);
    req.userData = payload;
    next();
  } catch (error) {
    handleError(res, 401, error.message);
  }
};

export default authMiddleware;
