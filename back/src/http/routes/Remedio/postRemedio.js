const express = require('express');
const prisma = require("../../../../prisma/prismaClient");

const router = express.Router();
router.use(express.json());

/**
 * @swagger
 * tags:
 *   - name: Remédios
 *     description: Operações relacionadas a remédios
 * /remedios:
 *   post:
 *     summary: Criar um novo remédio
 *     description: Adiciona um novo remédio ao sistema com base nas informações fornecidas.
 *     tags: [Remédios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome do novo remédio.
 *               funcao:
 *                 type: integer
 *                 description: Função do novo remédio.
 *               dosagem:
 *                 type: integer
 *                 description: Dosagem do novo remédio.
 *     responses:
 *       201:
 *         description: Remédio criado com sucesso.
 *       400:
 *         description: Erro ao criar o remédio.
 */

router.post("/", async (req, res) => {
    const { nome, funcao, dosagem } = req.body;

    try {
        const novoRemedio = await prisma.remedio.create({
            data: {
                nome,
                funcao: Number(funcao),
                dosagem: Number(dosagem),
            },
        });

        res.status(201).json(novoRemedio);
    } catch (error) {
        res.status(400).json({ error: "Erro ao criar o remedio." });
    }
});

module.exports = router;