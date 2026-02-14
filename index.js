import express from "express";
import cors from "cors";
import "dotenv/config";
import mahasiswaRoute from "./routes/mahasiswaRoute.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/mahasiswa", mahasiswaRoute);

app.listen(process.env.APP_PORT, () => {
    console.log("server up and running...");  
})