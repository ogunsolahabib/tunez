import axios from "axios";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const api = axios.create({
  baseURL: "https://itunes.apple.com/search",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

app.get("/", (req, res, next) => {
  const params = req.query;
  return api
    .get("/", { params })
    .then((response) => {
      res.json({ data: response.data });
    })
    .catch(next);
});

app.listen(8000);
