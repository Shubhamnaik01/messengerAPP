import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI); // This will return an response from mongoose for DB connection
    console.log("DB connected successfully", connection.connection.host); // connection is property in response object which holds the active connection state
    // .host is a property which tells the URL or IP address of the server we just connected
  } catch (error) {
    console.log("Error while connecting to DB :", error.message);
    process.exit(1); // If the DB connection is not successfull there is no point in running the code further so the current node process is stopped.
  }
};

export default connectDB;
