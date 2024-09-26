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
 *   put:
 *     summary: Atualizar um histórico
 *     description: Atualiza um histórico existente com base no ID fornecido.
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
 *               id_prescricao:
 *                 type: integer
 *                 description: Novo ID da prescrição associada ao histórico.
 *               data_atual:
 *                 type: string
 *                 format: date
 *                 description: Data da atualização do histórico.
 *     responses:
 *       200:
 *         description: Histórico atualizado com sucesso.
 *       400:
 *         description: Erro ao atualizar o histórico.
 */

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
