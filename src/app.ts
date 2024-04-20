import express from "express";
import dotenv from "dotenv";
import Game from "./models/Game";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

const game = new Game();
game.startNewGame();

app.get("/", (_req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
