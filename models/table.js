import mongoose from "mongoose";

import { reservationSchema } from "./reservation.js";

export const tableSchema = new mongoose.Schema({
  name: String,
  capacity: Number,
  isAvailable: Boolean,
  location: String,
  reservation: {
    required: false,
    type: reservationSchema
  }
});
export const Table = mongoose.model("Table", tableSchema);


