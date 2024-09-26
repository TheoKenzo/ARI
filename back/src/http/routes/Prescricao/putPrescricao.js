const express = require('express');
const prisma = require("../../../../prisma/prismaClient");

const router = express.Router();
router.use(express.json());

/**
 * @swagger
 * tags:
 *   - name: Prescrições
 *     description: Operações relacionadas a prescrições
 * /prescricoes:
 *   put:
 *     summary: Atualizar uma prescrição
 *     description: Atualiza uma prescrição existente com base no ID fornecido.
 *     tags: [Prescrições]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: ID da prescrição a ser atualizada.
 *               observacao:
 *                 type: string
 *                 description: Nova observação da prescrição.
 *               id_remedio:
 *                 type: integer
 *                 description: Novo ID do remédio associado à prescrição.
 *               frequencia:
 *                 type: string
 *                 format: date
 *                 description: Nova frequência da prescrição.
 *               dt_inicio:
 *                 type: string
 *                 format: date
 *                 description: Nova data de início da prescrição.
 *               dt_fim:
 *                 type: string
 *                 format: date
 *                 description: Nova data de fim da prescrição.
 *     responses:
 *       200:
 *         description: Prescrição atualizada com sucesso.
 *       400:
 *         description: Erro ao atualizar a prescrição.
 */

router.put("/", async (req, res) => {
    const { id, observacao, id_remedio, frequencia, dt_inicio, dt_fim } = req.body;

    try {
        const prescricao = await prisma.prescricao.update({
            where: {
                id: Number(id),
            },
            data: {
                observacao,
                id_remedio,
                frequencia: new Date(frequencia),
                dt_inicio: new Date(dt_inicio),
                dt_fim: new Date(dt_fim),
            },
        });

        res.status(200).json(prescricao);
    } catch (error) {
        res.status(400).json({ error: "Erro ao atualizar a prescrição." });
    }
})

module.exports = router;