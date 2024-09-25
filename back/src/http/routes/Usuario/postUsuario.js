const express = require("express");
const prisma = require("../../../../prisma/prismaClient");

const router = express.Router();
router.use(express.json());

router.post("/", async (req, res) => {
  const { nome, email, senha, data_nascimento } = req.body;

  try {
    const novoUsuario = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha,
        dt_nascimento: new Date(data_nascimento),
      },
    });

    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar usuário." });
  }
});

module.exports = router;
