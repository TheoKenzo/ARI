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
 *   get:
 *     summary: Buscar históricos
 *     description: Retorna uma lista de históricos ativos.
 *     tags: [Históricos]
 *     responses:
 *       200:
 *         description: Lista de históricos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID do histórico.
 *                   id_prescricao:
 *                     type: integer
 *                     description: ID da prescrição associada ao histórico.
 *                   dt_atual:
 *                     type: string
 *                     format: date
 *                     description: Data do histórico.
 *       400:
 *         description: Erro ao buscar os históricos.
 */

router.get("/", async (req, res) => {
  try {
    const historicos = await prisma.historico.findMany({
      where: {
        status: true,
      },
    });
    res.status(200).json(historicos);
  } catch (error) {
    res.status(400).json({ error: "Erro ao buscar os historicos." });
  }
});

module.exports = router;
