import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserByEmail,
  getUserById,
  updateUser,
} from "../model/dbAdapter.js";
import { generateHash, cmpHash } from "../utils/bcrypt.js";
import handleError from "../utils/handleError.js";
import { generateToken } from "../token/jwt.js";

let failedTries = {};

const getAllUsersController = async (req, res) => {
  try {
    let users = await getAllUsers();
    res.json(users);
  } catch (error) {
    handleError(res, 400, error.message);
  }
};

const registerController = async (req, res) => {
  try {
    let userFromDB = await getUserByEmail(req.body.email);
    if (userFromDB) throw new Error("user already exists");
    let passwordHash = await generateHash(req.body.password);
    req.body.password = passwordHash;
    let newUser = await createUser(req.body);
    newUser.password = undefined;
    delete newUser.password;
    res.json(newUser);
  } catch (error) {
    handleError(res, 400, error.message);
  }
};

const loginController = async (req, res) => {
  try {
    let userFromDB = await getUserByEmail(req.body.email);
    if (!userFromDB) throw new Error("invalid email or password");
    if (!failedTries[userFromDB.email]) {
      failedTries[userFromDB.email] = { tries: 0, time: 0 };
    }
    let passwordMatch = await cmpHash(req.body.password, userFromDB.password);
    if (!passwordMatch) {
      failedTries[userFromDB.email].tries++;
      if (failedTries[userFromDB.email].tries === 3)
        failedTries[userFromDB.email].time = Date.now();
      if (failedTries[userFromDB.email].tries >= 3) {
        const elapsedTime = Date.now() - failedTries[userFromDB.email].time;
        const remainingTime = Math.max(0, 24 * 60 * 60 * 1000 - elapsedTime);
        const remainingHours = remainingTime / (1000 * 60 * 60);
        if (remainingHours <= 0) {
          delete failedTries[userFromDB.email];
        } else {
          throw new Error(
            `Too many tries, try again in ${remainingHours.toFixed(2)} hours`
          );
        }
      }
      throw new Error("invalid email or password");
    }
    delete failedTries[userFromDB.email];

    let token = await generateToken({
      _id: userFromDB._id,
      isAdmin: userFromDB.isAdmin,
    });
    res.json(token);
  } catch (error) {
    handleError(res, 400, error.message);
  }
};

const getUserController = async (req, res) => {
  try {
    let userFromDB = await getUserById(req.params.id);
    if (!userFromDB) throw new Error("user not found");
    res.json(userFromDB);
  } catch (error) {
    handleError(res, 400, error.message);
  }
};

const updateUserController = async (req, res) => {
  try {
    let userFromDB = await updateUser(req.params.id, req.body);
    userFromDB.password = undefined;
    res.json(userFromDB);
  } catch (error) {
    handleError(res, 400, error.message);
  }
};

const deleteUserController = async (req, res) => {
  try {
    let deletedUser = await deleteUser(req.params.id);
    deletedUser.password = undefined;
    res.json(deletedUser);
  } catch (error) {
    handleError(res, 400, error.message);
  }
};

export {
  getAllUsersController,
  registerController,
  loginController,
  getUserController,
  updateUserController,
  deleteUserController,
};
