import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
dotenv.config();
import cors from 'cors';
import cookieParser from 'cookie-parser';
import availableRouter from './routes/availableTable.js';
import reserveRouter from './routes/reserveTable.js';


// Database connection
mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
var db = mongoose.connection;

// Express server 
var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use("/api/availability", availableRouter);
app.use("/api/reserve", reserveRouter);

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", _ => {
  console.log("Connected to DB");
});

app.listen(process.env.PORT,()=>{
    console.log(`Your server is running at ${process.env.PORT}`)
})

