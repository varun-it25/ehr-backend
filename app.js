import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(`mongodb://localhost:27017/bahir-store`)
  .then(() => console.log(`MongoDB connected successfully.`))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

const patientSchema = mongoose.Schema({
    temperature: Number,
    first_name: String,
    last_name: String,
    condition: String,
    mobile_no: Number,
    gender: String,
    plan: String,
    age: Number,
    rx: String,
    bp: Number,
});

const patientModel = mongoose.model('patients', patientSchema);

app.get('/', (req, res) => {
    res.send('Server Runs Well.');
});

app.post('/add-patient', async (req, res) => {
    const { temperature, first_name, last_name, condition, mobile_no, gender, plan, age, rx, bp } = req.body;

    const patientDetails = new patientModel({ temperature, first_name, last_name, condition, mobile_no, gender, plan, age, rx, bp });
        
    try {
        await patientDetails.save();
        res.status(201).send('Patient added successfully.');
    } catch (error) {
        res.status(500).send('Error saving patient details.');
    }
});

app.listen(3000, () => {
    console.log('Server runs on PORT 3000.');
});