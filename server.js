import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
// import { dbConnection } from "./config/db-config.js";
import { router } from "./routes/index.js";

// Config to access environment variables in the system
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware and configurations
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.options("*", cors());
app.use(express.json());

// Organize Static assets
app.use(express.static("assets"));

// Setting up Routes Middleware
app.use("/api", router);

// Serve the React app's index.html for the root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// This will start the server and listen to the port defined in ENV.
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

// Connect to Database
// dbConnection;
