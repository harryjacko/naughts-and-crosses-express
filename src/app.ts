import express, { Request, Response } from "express";
import dotenv from "dotenv";
import Game from "./models/Game";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

const game = new Game();

app.get("/", (_req, res) => {
  res.send("Naughts and Crossess");
});

app.post("/start", (_req, res: Response<Game>) => {
  game.startNewGame();
  res.json(game);
});

app.post(
  "/move",
  (req: Request<any, any, { position: number }>, res: Response<Game>) => {
    console.log(req.body);

    game.makeMove(req.body.position);
    res.json(game);
  }
);

app.get("/status", (_req, res) => {
  res.json(game);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
