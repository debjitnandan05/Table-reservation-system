import mongoose from "mongoose";
import {tableSchema} from "./table.js"

export const daySchema = new mongoose.Schema({
  date: Date,
  tables: [tableSchema]
});
export const Day = mongoose.model("Day", daySchema);