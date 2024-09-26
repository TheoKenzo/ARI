const express = require("express");
const prisma = require("../../../../prisma/prismaClient");

const router = express.Router();
router.use(express.json());

/**
 * @swagger
 * tags:
 *   - name: Prescrições
 *     description: Operações relacionadas a prescrições
 * /prescricoes:
 *   get:
 *     summary: Buscar prescrições
 *     description: Retorna uma lista de prescrições ativas.
 *     tags: [Prescrições]
 *     responses:
 *       200:
 *         description: Lista de prescrições.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID da prescrição.
 *                   id_usuario:
 *                     type: integer
 *                     description: ID do usuário associado à prescrição.
 *                   observacao:
 *                     type: string
 *                     description: Observação da prescrição.
 *                   id_remedio:
 *                     type: integer
 *                     description: ID do remédio associado à prescrição.
 *                   frequencia:
 *                     type: string
 *                     format: date
 *                     description: Frequência da prescrição.
 *                   dt_inicio:
 *                     type: string
 *                     format: date
 *                     description: Data de início da prescrição.
 *                   dt_fim:
 *                     type: string
 *                     format: date
 *                     description: Data de fim da prescrição.
 *       400:
 *         description: Erro ao buscar as prescrições.
 */

router.get("/", async (req, res) => {
  try {
    const prescricoes = await prisma.prescricao.findMany({
      where: {
        status: true,
      },
    });
    res.status(200).json(prescricoes);
  } catch (error) {
    res.status(400).json({ error: "Erro ao buscar as prescricoes." });
  }
});

module.exports = router;
