import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import "dotenv/config";
import routes from "./src/routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1", routes);

const port = process.env.PORT || 8081; // Change port number to 8081

const server = http.createServer(app);

mongoose.connect('mongodb+srv://client:client@cluster1.xqtwhlf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB connected");
  server.listen(port, () => {
    console.log(`Server is listening on port ${8081}`);
  });
}).catch((err) => {
  console.error("MongoDB connection error:", err);
  process.exit(1);
});

