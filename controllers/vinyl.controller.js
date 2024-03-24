import {
  createVinyl,
  deleteVinyl,
  getAllMyVinyls,
  getAllVinyls,
  getVinylById,
  updateVinyl,
} from "../model/dbAdapter.js";
import handleError from "../utils/handleError.js";

const getAllVinylsController = async (req, res) => {
  try {
    let vinyls = await getAllVinyls();
    res.json(vinyls);
  } catch (error) {
    handleError(res, 400, error.message);
  }
};

const getVinylByIdController = async (req, res) => {
  try {
    let vinyl = await getVinylById(req.params.id);
    if (!vinyl) throw new Error("no vinly was found");
    res.json(vinyl);
  } catch (error) {
    handleError(res, 400, error.message);
  }
};

const getAllMyVinylsController = async (req, res) => {
  try {
    let userId = req.userData._id;
    let vinyls = await getAllMyVinyls(userId);
    res.json(vinyls);
  } catch (error) {
    handleError(res, 400, error.message);
  }
};

const createNewVinylController = async (req, res) => {
  try {
    let userId = req.userData._id;
    req.body.user_id = userId;
    let newVinyl = await createVinyl(req.body);
    res.json(newVinyl);
  } catch (error) {
    handleError(res, 400, error.message);
  }
};

const updateVinylController = async (req, res) => {
  try {
    let vinylFromDB = await getVinylById(req.params.id);
    let { user_id } = vinylFromDB;
    user_id = user_id + "";
    if (!req.userData.isAdmin && user_id != req.userData._id)
      throw new Error("you are not allowed to do this");
    if (!vinylFromDB) throw new Error("vinyl not found");
    let updatedVinyl = await updateVinyl(req.params.id, req.body);
    res.json(updatedVinyl);
  } catch (error) {
    handleError(res, 400, error.message);
  }
};

const likeVinylController = async (req, res) => {
  try {
    let userId = req.userData._id;
    let vinylFromDB = await getVinylById(req.params.id);
    if (!vinylFromDB) throw new Error("vinyl wasn't found");
    if (vinylFromDB.likes.includes(userId))
      vinylFromDB.likes = vinylFromDB.likes.filter((item) => item !== userId);
    else vinylFromDB.likes.push(userId);
    let likedVinyl = await updateVinyl(req.params.id, {
      likes: vinylFromDB.likes,
    });
    res.json(likedVinyl);
  } catch (error) {
    handleError(res, 400, error.message);
  }
};

const deleteVinylController = async (req, res) => {
  try {
    let vinylFromDB = await getVinylById(req.params.id);
    let { user_id } = vinylFromDB;
    user_id = user_id + "";
    if (!req.userData.isAdmin && user_id != req.userData._id)
      throw new Error("you are not allowed to do this");
    if (!vinylFromDB) throw new Error("vinyl not found");
    let deletedVinyl = await deleteVinyl(req.params.id);
    res.json(deletedVinyl);
  } catch (error) {
    handleError(res, 400, error.message);
  }
};

export {
  getAllVinylsController,
  getVinylByIdController,
  getAllMyVinylsController,
  createNewVinylController,
  updateVinylController,
  likeVinylController,
  deleteVinylController,
};
