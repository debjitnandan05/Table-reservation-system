import mongoose from "mongoose";

export const reservationSchema = new mongoose.Schema({
  name:{
    type : String,
    require : true
  } ,
  phone: {
    type : Number,
    require : true
  } ,
  email: String
});
export const Reservation = mongoose.model("Reservation", reservationSchema);


