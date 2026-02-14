import express from "express";
import { 
    getAllMahasiswa,
    getMahasiswaById,
    createMahasiswa,
    updateMahasiswa,
    deleteMahasiswa
} from "../controllers/mahasiswaController.js"

const router = express.Router();

router.get("/", getAllMahasiswa);
router.get("/:id", getMahasiswaById);
router.post("/", createMahasiswa);
router.patch("/:id", updateMahasiswa);
router.delete("/:id", deleteMahasiswa);

export default router