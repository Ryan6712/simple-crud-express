import express from "express";
import {
    getAllAbsens,
    getUserAbsen,
    getDetailAbsens,
    createAbsen,
    updateAbsen,
    deleteAbsen
} from "../controllers/absenController.js"

const router = express.Router();

router.get("/", getAllAbsens);
router.get("/:mahasiswaId", getUserAbsen);
router.get("/:date/:kelasId", getDetailAbsens);
router.post("/", createAbsen);
router.patch("/:date/:kelasId", updateAbsen);
router.delete("/:id", deleteAbsen);

export default router