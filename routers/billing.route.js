import express from "express";

const router = express.Router();

router.post("/create", (req, res) => {
    res.send("Bill created.")
})

router.get("/all", (req, res) => {
    res.send("All billings list.")
})

router.get("/:id", (req, res) => {
    res.send("Bill details.")
})

router.put("/:id", (req, res) => {
    res.send("Bill updated.")
})

router.delete("/:id", (req, res) => {
    res.send("Bill deleted.")
})

export default router;