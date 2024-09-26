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
 *   post:
 *     summary: Criar um novo histórico
 *     description: Adiciona um novo histórico ao sistema com base nas informações fornecidas.
 *     tags: [Históricos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_prescricao:
 *                 type: integer
 *                 description: ID da prescrição associada ao histórico.
 *               data_atual:
 *                 type: string
 *                 format: date
 *                 description: Data do histórico.
 *     responses:
 *       201:
 *         description: Histórico criado com sucesso.
 *       400:
 *         description: Erro ao criar o histórico.
 */

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
