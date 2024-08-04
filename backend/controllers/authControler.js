const ethers = requre("ethers");
const User = require("../models/schema");

async function authController(req, res, next) {
  try {
    const { signature } = req.body;
    const { address } = req.query;

    if (!signature) {
      throw new Error("Signature is invalid");
    }
    const recoveredAddress = ethers.utils.verifyMessage(
      "Welcome to Crypto Vault Website",
      signature
    );
    if (address.toLowerCase() === recoveredAddress.toLowerCase()) {
      const address = recoveredAddress.toLowerCase();
      const user = await UserModel.findOne({ userAddress: address });

      if (!user) {
        const userData = await UserModel.create({ userAddress: address });
        console.log(userData);
      }
      res.status(200).json({ message: "authentication successfull" });
    } else {
      res.status(404).json({ message: "authentication failed" });
    }
  } catch (e) {
    res.status(500).json({ message: "internal server error" });
    console.log(e);
  }
}

module.exports = { authController };
