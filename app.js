import express from "express";
import cors from "cors";
import patientRoutes from "./routers/patient.routes.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/patient", patientRoutes);

app.listen(3000, () => {
    console.log('Server runs on PORT 3000.');
});