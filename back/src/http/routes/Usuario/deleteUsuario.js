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
 *   delete:
 *     summary: Atualizar status de deleção de um usuário
 *     description: Atualiza o status de um usuário para "deletado" com base no ID fornecido.
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: ID do usuário a ser marcado como deletado.
 *     responses:
 *       200:
 *         description: Usuário marcado como deletado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do usuário atualizado.
 *                 status:
 *                   type: boolean
 *                   description: Novo status do usuário (false para deletado).
 *       400:
 *         description: Erro ao marcar o usuário como deletado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensagem de erro.
 */

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
