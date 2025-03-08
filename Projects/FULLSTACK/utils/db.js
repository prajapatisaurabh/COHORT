import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const db = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Suceessfully Connected to mongo db");
    })
    .catch((err) => console.log("Fail to connect:" + err));
};

export default db;
