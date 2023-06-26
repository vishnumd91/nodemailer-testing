import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

export const dbConnection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: "demodb",
});

dbConnection.connect((error) => {
  if (error) {
    console.error("Failed to connect to MySQL:", error);
  } else {
    console.log("Connected to MySQL database");
  }
});
