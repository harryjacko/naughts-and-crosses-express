import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`[server]: Server is listening on port: ${port}`);
});

app.use("/game", router);

app.use((_req, res) => {
  const error = Error("Not found");
  res.statusCode = 404;
  res.send({ error: error.message });
});
