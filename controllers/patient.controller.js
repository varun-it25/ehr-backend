import { readAll, readOne } from "../utils/readRow.js";
import { addOne } from "../utils/insertRow.js";
import { updateOne } from "../utils/updateRow.js";

export async function getAllPatients(req, res){
    try {
        const response = await readAll("patient");
        res.status(200).json(response);
    }
    
    catch(err){
        res.status(500).json({ error: "Failed to fetch patients" });
    }
}

export async function getPatientById(req, res){
    const id = parseInt(req.params.id, 10);
    
    try {
        const response = await readOne("patient", id);
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch patient" });
    }
}

export async function addPatient(req, res){        
    const data = req.body;
    
    try {
        const response = await addOne("patient", data);
        res.status(201).json(response);
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Failed to add patient" });
    }
}

export async function updatePatient(req, res){
    const { id } = req.params;
    const { first_name } = req.body;
    
    try {
        const response = await updateOne('patient', id, { first_name });
        if (!response) {
            return res.status(404).json({ message: "Patient not found" });
        }
        res.status(200).json({ message: "Patient updated successfully", data: response });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
}