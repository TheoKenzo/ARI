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
 *   get:
 *     summary: Buscar usuários
 *     description: Retorna uma lista de usuários ativos.
 *     tags: [Usuários]
 *     responses:
 *       200:
 *         description: Lista de usuários.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID do usuário.
 *                   nome:
 *                     type: string
 *                     description: Nome do usuário.
 *                   email:
 *                     type: string
 *                     description: Email do usuário.
 *                   dt_nascimento:
 *                     type: string
 *                     format: date
 *                     description: Data de nascimento do usuário.
 *       400:
 *         description: Erro ao buscar os usuários.
 */

router.get("/", async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany({
      where: {
        status: true,
      },
    });
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(400).json({ error: "Erro ao buscar os usuários." });
  }
});

module.exports = router;
