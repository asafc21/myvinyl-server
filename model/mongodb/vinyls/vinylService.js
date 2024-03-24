import Vinyl from "./Vinyl.js";

const createVinylMongo = (vinylData) => {
  let vinyl = new Vinyl(vinylData);
  return vinyl.save();
};

const getAllVinylsMongo = () => {
  return Vinyl.find();
};

const getVinylByIdMongo = (id) => {
  return Vinyl.findById(id);
};

const getAllMyVinylsdMongo = (user_id) => {
  return Vinyl.find({ user_id });
};

const updateVinylMongo = (id, vinylData) => {
  return Vinyl.findByIdAndUpdate(id, vinylData, { new: true });
};

const deleteVinylMongo = (id) => {
  return Vinyl.findByIdAndDelete(id);
};

export {
  createVinylMongo,
  getAllVinylsMongo,
  getVinylByIdMongo,
  getAllMyVinylsdMongo,
  updateVinylMongo,
  deleteVinylMongo,
};
