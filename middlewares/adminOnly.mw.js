import handleError from "../utils/handleError.js";

const adminOnlyMiddleware = (req, res, next) => {
  if (!req.userData) throw new Error("you must be logged in");
  if (req.userData.isAdmin) next();
  else handleError(res, 401, "you are not allowed to do this action");
};

export default adminOnlyMiddleware;
