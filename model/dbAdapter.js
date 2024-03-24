import normalizeUser from "../normalize/user.normalize.js";
import normalizeVinyl from "../normalize/vinyl.normalize.js";
import connectToMongo from "./mongodb/dbConnect.js";
import {
  createUserMongo,
  deleteUserMongo,
  getAllUsersMongo,
  getUserByEmailMongo,
  getUserByIdMongo,
  updateUserMongo,
} from "./mongodb/users/userService.js";
import {
  createVinylMongo,
  deleteVinylMongo,
  getAllMyVinylsdMongo,
  getAllVinylsMongo,
  getVinylByIdMongo,
  updateVinylMongo,
} from "./mongodb/vinyls/vinylService.js";

const DB = "mongo";

const connectToDb = () => {
  if (DB === "mongo") return connectToMongo();
};

const createUser = (user) => {
  user = normalizeUser(user);
  if (DB === "mongo") return createUserMongo(user);
};

const getUserById = (id) => {
  if (DB === "mongo") return getUserByIdMongo(id);
};

const getUserByEmail = (email) => {
  if (DB === "mongo") return getUserByEmailMongo(email);
};

const getAllUsers = () => {
  if (DB === "mongo") return getAllUsersMongo();
};

const updateUser = (id, user) => {
  user = normalizeUser(user);
  if (DB === "mongo") return updateUserMongo(id, user);
};

const deleteUser = (id) => {
  if (DB === "mongo") return deleteUserMongo(id);
};

const createVinyl = async (vinyl) => {
  vinyl = await normalizeVinyl(vinyl);
  if (DB === "mongo") return createVinylMongo(vinyl);
};

const getAllVinyls = () => {
  if (DB === "mongo") return getAllVinylsMongo();
};

const getVinylById = (id) => {
  if (DB === "mongo") return getVinylByIdMongo(id);
};

const getAllMyVinyls = (user_id) => {
  if (DB === "mongo") return getAllMyVinylsdMongo(user_id);
};

const updateVinyl = (id, vinylData) => {
  if (DB === "mongo") return updateVinylMongo(id, vinylData);
};

const deleteVinyl = (id) => {
  if (DB === "mongo") return deleteVinylMongo(id);
};

export default connectToDb;
export {
  createUser,
  getUserById,
  getUserByEmail,
  getAllUsers,
  updateUser,
  deleteUser,
  createVinyl,
  getAllMyVinyls,
  getVinylById,
  getAllVinyls,
  updateVinyl,
  deleteVinyl,
};
