import dotenv from "dotenv";
import connectDB from "./db/db.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    console.log(`MongoDB connected successfully`);
  })
  .catch((err) => {
    console.log("MONGO db connection failed!!!");
  });

// Export the app as the handler for Vercel
export default app;

