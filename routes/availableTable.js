import  express  from "express";
import { availabletable } from "../controller/availableTable.js";
const availableRouter = express.Router();

availableRouter.post("/", availabletable);

export default availableRouter;