import express from "express";
import dotenv from "dotenv";
import path from "path";

const app = express();
dotenv.config();

const { PORT } = process.env;

app.use(express.static(path.join(path.resolve(), "/build")));
app.get("/", (req, res) => {
  res.sendFile("/index.html");
});

app.listen(PORT, () => console.log(`SERVER LISTENING ON PORT ${PORT}`));
