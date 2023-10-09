import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from 'dotenv';
// import { initRoutes } from "./routes.js";
import {initRoutes} from './routes'; // Menggunakan file 'routes.js'






dotenv.config();
const MONGO_URI = process.env.MONGO_URI; 

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
  console.log('Koneksi ke MongoDB berhasil');
});

mongoose.connection.on('error', (err) => {
  console.error('Koneksi MongoDB gagal: ' + err);
});

const app = express();
const port = 3000 || process.env.port

app.use(bodyParser.json());

initRoutes(app);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})