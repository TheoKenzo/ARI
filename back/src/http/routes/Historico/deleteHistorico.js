const express = require("express");
const prisma = require("../../../../prisma/prismaClient");

const router = express.Router();
router.use(express.json());

/**
 * @swagger
 * tags:
 *   - name: Históricos
 *     description: Operações relacionadas a históricos
 * /historicos:
 *   delete:
 *     summary: Deletar um histórico (atualizar status)
 *     description: Atualiza o status de um histórico para inativo com base no ID fornecido.
 *     tags: [Históricos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: ID do histórico a ser atualizado.
 *     responses:
 *       200:
 *         description: Histórico atualizado com sucesso (status definido como inativo).
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do histórico atualizado.
 *                 status:
 *                   type: boolean
 *                   description: Status do histórico (agora inativo).
 *       400:
 *         description: Erro ao atualizar o histórico.
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
    const historico = await prisma.historico.update({
      where: {
        id: Number(id),
      },
      data: {
        status: false,
      },
    });

    res.status(200).json(historico);
  } catch (error) {
    res.status(400).json({ error: "Erro ao deletar o histórico." });
  }
});

module.exports = router;
