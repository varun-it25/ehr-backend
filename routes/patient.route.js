import express from "express";
import { addPatient, getAllPatients, getPatientById, updatePatient } from "../controllers/patient.controller.js";

const router = express.Router();

router.post("/add", addPatient);

router.get("/all", getAllPatients);
router.get("/:id", getPatientById);

router.put("/:id", updatePatient);

export default router;