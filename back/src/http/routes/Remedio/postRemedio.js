const express = require('express');
const prisma = require("../../../../prisma/prismaClient");

const router = express.Router();
router.use(express.json());

router.post("/", async (req, res) => {
    const { nome, funcao, dosagem } = req.body;

    try {
        const novoRemedio = await prisma.remedio.create({
            data: {
                nome,
                funcao: Number(funcao),
                dosagem: Number(dosagem),
            },
        });

        res.status(201).json(novoRemedio);
    } catch (error) {
        res.status(400).json({ error: "Erro ao criar o remedio." });
    }
});

module.exports = router;