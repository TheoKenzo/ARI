const express = require("express");
const prisma = require("../../../../prisma/prismaClient");

const router = express.Router();
router.use(express.json());

router.put("/", async (req, res) => {
  const { id, id_prescricao, data_atual } = req.body;

  try {
    const historico = await prisma.historico.update({
      where: {
        id: Number(id),
      },
      data: {
        id_prescricao,
        dt_atual: new Date(data_atual),
      },
    });

    res.status(200).json(historico);
  } catch (error) {
    res.status(400).json({ error: "Erro ao atualizar o historico." });
  }
});

module.exports = router;
