import express from "express";
import cors from "cors";
import morgan from "morgan";
import { BookRoute } from "./routes/book.route";
import { configDotenv } from "dotenv";
import { AppDataSource } from "./db";
import { AuthorRoute } from "./routes/author.route";
import { UserRoute } from "./routes/user.route";
import { UserService } from "./services/user.service";
import { BorrowRoute } from "./routes/borrow.route";
import https from "https";
import fs from "fs";

const app = express();
app.use(express.json()); //olny accept json
app.use(cors());
app.use(morgan("tiny"));

app.use("/api/user", UserRoute);
app.use(UserService.verifyToken);
app.use("/api/books", BookRoute);
app.use("/api/author", AuthorRoute);
app.use("/api/borrow", BorrowRoute);

// app.get('*', (req, res) => {
//     res.status(404).json({
//         message: 'NOT_FOUND',
//         timestamp: new Date()
//     })
// })

const sslOptions = {
  key: fs.readFileSync("./src/crypto/key.pem"),
  cert: fs.readFileSync("./src/crypto/cert.pem"),
};

configDotenv();
AppDataSource.initialize()
  .then(() => {
    console.log("Connected to database");
    const port = process.env.SERVER_PORT || 3000;

    https
      .createServer(sslOptions, app)
      .listen(port, () => console.log(`Application started on port ${port}`));
  })
  .catch((e) => {
    console.log("Database server connection failed");
    console.log(e);
  });

// configDotenv()
// AppDataSource.initialize()
//     .then(() => {
//         console.log('Connected to database')
//         const port = process.env.SERVER_PORT || 3000
//         app.listen(port, () => console.log(`Application started on port ${port}`))
//     })
//     .catch(e => {
//         console.log('Failed to connect to the database')
//         console.log(e)
//     })
