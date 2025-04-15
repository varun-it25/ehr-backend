import cors from "cors";
import { parse } from "url";
import express from "express";
import billingRoutes from "../routes/billing.route.js"
import patientRoutes from "../routes/patient.route.js"
import medicineRoutes from "../routes/medicine.route.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/patient", patientRoutes);
app.use("/medicine", medicineRoutes);
app.use("/billing", billingRoutes);

app.get('/',(req, res) => {
    res.status(200).send('Welcome to EHR Backend')
})

export default function handler(req, res) {
    const parsedUrl = parse(req.url, true);
    app(req, res);
}