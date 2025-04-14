import express from "express";

const router = express.Router();

router.post("/create", (req, res) => {
    res.send("Patient created.")
})

router.get("/all", (req, res) => {
    res.send("All patients list.")
})

router.get("/:id", (req, res) => {
    res.send("Patient details.")
})

router.put("/:id", (req, res) => {
    res.send("Patient updated.")
})

router.delete("/:id", (req, res) => {
    res.send("Patient deleted.")
})

export default router;