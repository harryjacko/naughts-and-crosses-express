import express, { Request, Response } from "express";
import Game from "../models/Game";
import GameController from "../controllers";

const router = express.Router();

router.post("/start", (req, res: Response<Game>) => {
  GameController.startNewGame(req, res);
});

router.post(
  "/move",
  (req: Request<any, any, { position: number }>, res: Response<Game>) => {
    GameController.makeMove(req, res);
  }
);

router.get("/status", (req, res) => {
  GameController.getGameStatus(req, res);
});

export default router;
