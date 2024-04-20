import { Request, Response } from "express";
import Game from "../models/Game";

const game = new Game();

const GameController = {
  startNewGame(_req: Request, res: Response) {
    game.startNewGame();
    res.json(game);
  },

  makeMove(req: Request<any, any, { position: number }>, res: Response) {
    game.makeMove(req.body.position);
    res.json(game);
  },

  getGameStatus(req: Request, res: Response) {
    res.json(game);
  },
};

export default GameController;
