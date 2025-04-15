import cors from "cors";
import express from "express";
import billingRoutes from "./routers/billing.route.js"
import patientRoutes from "./routers/patient.routes.js"
import medicineRoutes from "./routers/medicine.route.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/patient", patientRoutes);
app.use("/medicine", medicineRoutes);
app.use("/billing", billingRoutes);

app.listen(3000, () => {
    console.log('Server runs on PORT 3000.');
});

export default app;