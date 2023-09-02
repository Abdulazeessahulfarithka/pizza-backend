import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongodb is connected ${conn.connection.host}`.bgYellow.white);
  } catch (error) {
    console.log(`mongodb is error ${error}`);
  }
};
export default connectDB;
