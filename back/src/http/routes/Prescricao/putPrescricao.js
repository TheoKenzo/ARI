const express = require('express');
const prisma = require("../../../../prisma/prismaClient");

const router = express.Router();
router.use(express.json());

router.put("/", async (req, res) => {
    const { id, observacao, id_remedio, frequencia, dt_inicio, dt_fim } = req.body;

    try {
        const prescricao = await prisma.prescricao.update({
            where: {
                id: Number(id),
            },
            data: {
                observacao,
                id_remedio,
                frequencia: new Date(frequencia),
                dt_inicio: new Date(dt_inicio),
                dt_fim: new Date(dt_fim),
            },
        });

        res.status(200).json(prescricao);
    } catch (error) {
        res.status(400).json({ error: "Erro ao atualizar a prescrição." });
    }
})

module.exports = router;