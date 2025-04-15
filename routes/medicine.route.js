import express from "express";

const router = express.Router();

router.post("/add", (req, res) => {
    res.send("Medicine added.")
})

router.get("/all", (req, res) => {
    res.send("All medicines list.")
})

router.get("/:id", (req, res) => {
    res.send("Medicine details.")
})

router.put("/:id", (req, res) => {
    res.send("Medicine updated.")
})

router.delete("/:id", (req, res) => {
    res.send("Medicine deleted.")
})

export default router;