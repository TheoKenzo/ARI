const express = require('express');
const prisma = require("../../../../prisma/prismaClient");

const router = express.Router();
router.use(express.json());

router.put("/", async (req, res) => {
    const { id } = req.body;

    try {
        const prescricao = await prisma.prescricao.update({
            where: {
                id: Number(id),
            },
            data: {
                status: false,
            },
        });

        res.status(200).json(prescricao);
    } catch (error) {
        res.status(400).json({ error: "Erro ao deletar a prescrição." });
    }
});

module.exports = router;