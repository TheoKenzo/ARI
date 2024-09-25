const express = require('express');
const prisma = require("../../../../prisma/prismaClient");

const router = express.Router();
router.use(express.json());

router.post("/", async (req, res) => {
    const { id_usuario, observacao, id_remedio, frequencia, dt_inicio, dt_fim } = req.body;

    try {
        const novaPrescricao = await prisma.prescricao.create({
            data: {
                id_usuario: Number(id_usuario),
                observacao,
                id_remedio: Number(id_remedio),
                frequencia: new Date(frequencia),
                dt_inicio: new Date(dt_inicio),
                dt_fim: new Date(dt_fim),
            },
        });

        res.status(201).json(novaPrescricao);
    } catch (error) {
        res.status(400).json({ error: "Erro ao criar a prescrição." });
    }
});

module.exports = router;