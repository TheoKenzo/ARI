const express = require("express");
const prisma = require("../../../../prisma/prismaClient");

const router = express.Router();
router.use(express.json());

/**
 * @swagger
 * tags:
 *   - name: Usuários
 *     description: Operações relacionadas aos usuários
 * /usuarios:
 *   post:
 *     summary: Criar um novo usuário
 *     description: Adiciona um novo usuário ao sistema com base nas informações fornecidas.
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome do novo usuário.
 *               email:
 *                 type: string
 *                 description: Email do novo usuário.
 *               senha:
 *                 type: string
 *                 description: Senha do novo usuário.
 *               data_nascimento:
 *                 type: string
 *                 format: date
 *                 description: Data de nascimento do novo usuário.
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso.
 *       400:
 *         description: Erro ao criar o usuário.
 */

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
