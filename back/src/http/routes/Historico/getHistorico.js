const express = require("express");
const prisma = require("../../../../prisma/prismaClient");

const router = express.Router();
router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const historicos = await prisma.historico.findMany();
    res.status(200).json(historicos);
  } catch (error) {
    res.status(400).json({ error: "Erro ao buscar os historicos." });
  }
});

module.exports = router;
