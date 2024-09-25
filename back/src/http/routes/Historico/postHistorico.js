const express = require("express");
const prisma = require("../../../../prisma/prismaClient");

const router = express.Router();
router.use(express.json());

router.post("/", async (req, res) => {
  const { id_prescricao, data_atual } = req.body;

  try {
    const novoHistorico = await prisma.historico.create({
      data: {
        id_prescricao: Number(id_prescricao),
        dt_atual: new Date(data_atual),
      },
    });

    res.status(201).json(novoHistorico);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar o histórico." });
  }
});

module.exports = router;
