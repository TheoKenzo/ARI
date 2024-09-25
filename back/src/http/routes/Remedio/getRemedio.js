const express = require('express');
const prisma = require("../../../../prisma/prismaClient");

const router = express.Router();
router.use(express.json());

router.get("/", async (req, res) => {
    try {
        const remedios = await prisma.remedio.findMany();
        res.status(200).json(remedios);
    } catch (error) {
        res.status(400).json({ error: "Erro ao buscar os remedios." });
    }
})

module.exports = router;