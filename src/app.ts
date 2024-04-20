import express from "express";
import dotenv from "dotenv";
import router from "./routes";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

app.use("/game", router);

app.use((_req, res) => {
  const error = Error("Not found");
  res.statusCode = 404;
  res.send({ error: error.message });
});
