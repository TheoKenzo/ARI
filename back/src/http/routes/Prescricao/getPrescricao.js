const express = require('express');
const prisma = require("../../../../prisma/prismaClient");

const router = express.Router();
router.use(express.json());

router.get("/", async (req, res) => {
    try {
        const prescricoes = await prisma.prescricao.findMany();
        res.status(200).json(prescricoes);
    } catch (error) {
        res.status(400).json({ error: "Erro ao buscar as prescricoes." });
    }
})

module.exports = router;