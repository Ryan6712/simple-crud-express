import express from "express";
import cors from "cors";
import "dotenv/config";
import mahasiswaRoute from "./routes/mahasiswaRoute.js";
import kelasRoute from "./routes/kelasRoute.js";
import absenRoute from "./routes/absenRoute.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/mahasiswa", mahasiswaRoute);
app.use("/kelas", kelasRoute);
app.use("/absen", absenRoute);

app.listen(process.env.APP_PORT, () => {
    console.log("server up and running...");  
})