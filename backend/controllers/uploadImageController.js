const ethers = require("ethers");
const UserModel = require("../models/User");
const pinataSDK = require("@pinata/sdk");
const { PINATA_APIKEY, PINATA_SECRETKEY } = require("../config/serverConfig");
const { generateEncryptionKey } = require("../utils/generateKey");

async function uploadImageController(req, res, next) {
  try {
    const userAddress = "0x06598Cc0eD82B13726FC4d9e323C4EC9bd57E8c2";
    const user = await UserModel.findOne({ userAddress: userAddress });
    if (!user) {
      throw new Error("user doesn't exists");
    }
    const pinata = new pinataSDK("yourPinataApiKey", "yourPinataSecretApiKey");
    const res = await pinata.testAuthentication();
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}

module.exports = { uploadImageController };
