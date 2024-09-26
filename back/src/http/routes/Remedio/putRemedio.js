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
 *   put:
 *     summary: Atualizar um remédio
 *     description: Atualiza um remédio existente com base no ID fornecido.
 *     tags: [Remédios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: ID do remédio a ser atualizado.
 *               nome:
 *                 type: string
 *                 description: Novo nome do remédio.
 *               funcao:
 *                 type: integer
 *                 description: Nova função do remédio.
 *               dosagem:
 *                 type: integer
 *                 description: Nova dosagem do remédio.
 *     responses:
 *       200:
 *         description: Remédio atualizado com sucesso.
 *       400:
 *         description: Erro ao atualizar o remédio.
 */

router.put("/", async (req, res) => {
    const { id, nome, funcao, dosagem } = req.body;

    try {
        const remedio = await prisma.remedio.update({
            where: {
                id: Number(id),
            },
            data: {
                nome,
                funcao: Number(funcao),
                dosagem: Number(dosagem),
            },
        });

        res.status(200).json(remedio);
    } catch (error) {
        res.status(400).json({ error: "Erro ao atualizar o remedio." });
    }
})

module.exports = router;