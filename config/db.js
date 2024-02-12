import mongoose from "mongoose";
import colors from "colors";
//import dotenv from "dotenv";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `connected to database ${conn.connection.host}`.bgMagenta.white
    );
  } catch (err) {
    console.log(`error in MongoDB ${err}`.bgRed.white);
  }
};
export default connectDB;
