const express = require("express");
const app = express();
const cors = require("cors");
const { MONGODB_URL, PORT } = require("./config/serverConfig");
const authentication = require("./routes/authentication");
const authentication = require("./routes/authentication");
const { connectDB } = require("./db/connectTODb");

app.use(cors());
app.use(express.json());
app.use("/api", authentication);
app.use("/api", uploadImageRoute);

async function serverStart() {
  try {
    await connectDB(MONGODB_URL);
    console.log("database connected");
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
      console.log("server is running on port http://localhost:3000");
    });
  } catch (e) {
    console.log(e);
  }
}

serverStart();
