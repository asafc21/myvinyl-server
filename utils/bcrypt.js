import bycrypt from "bcryptjs";

const generateHash = (password) => bycrypt.hash(password, 10);

const cmpHash = (password, hash) => bycrypt.compare(password, hash);

export { generateHash, cmpHash };
