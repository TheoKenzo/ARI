const express = require("express");
const prisma = require("../../../../prisma/prismaClient");

const router = express.Router();
router.use(express.json());

/**
 * @swagger
 * tags:
 *   - name: Remédios
 *     description: Operações relacionadas a remédios
 * /remedios:
 *   get:
 *     summary: Buscar remédios
 *     description: Retorna uma lista de remédios ativos.
 *     tags: [Remédios]
 *     responses:
 *       200:
 *         description: Lista de remédios.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID do remédio.
 *                   nome:
 *                     type: string
 *                     description: Nome do remédio.
 *                   funcao:
 *                     type: integer
 *                     description: Função do remédio.
 *                   dosagem:
 *                     type: integer
 *                     description: Dosagem do remédio.
 *       400:
 *         description: Erro ao buscar os remédios.
 */



router.get("/", async (req, res) => {
  try {
    const remedios = await prisma.remedio.findMany({
      where: {
        status: true,
      },
    });
    res.status(200).json(remedios);
  } catch (error) {
    res.status(400).json({ error: "Erro ao buscar os remedios." });
  }
});

module.exports = router;
