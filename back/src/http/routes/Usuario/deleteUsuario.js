const express = require("express");
const prisma = require("../../../../prisma/prismaClient");

const router = express.Router();
router.use(express.json());

router.put("/", async (req, res) => {
  const { id } = req.body;

  try {
    const usuario = await prisma.usuario.update({
      where: {
        id: Number(id),
      },
      data: {
        status: false,
      },
    });

    res.status(200).json(usuario);
  } catch (error) {
    res.status(400).json({ error: "Erro ao deletar o usuário." });
  }
});

module.exports = router;
