import express from "express";
import { reserveTable } from "../controller/reserveTable.js";
const reserveRouter = express.Router()

reserveRouter.post("/", reserveTable);

export default reserveRouter;