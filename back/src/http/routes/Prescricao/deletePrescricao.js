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
 *   delete:
 *     summary: Deletar uma prescrição (atualizar status)
 *     description: Atualiza o status de uma prescrição para inativo com base no ID fornecido.
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
 *     responses:
 *       200:
 *         description: Prescrição atualizada com sucesso (status definido como inativo).
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID da prescrição atualizada.
 *                 status:
 *                   type: boolean
 *                   description: Status da prescrição (agora inativo).
 *       400:
 *         description: Erro ao atualizar a prescrição.
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
        const prescricao = await prisma.prescricao.update({
            where: {
                id: Number(id),
            },
            data: {
                status: false,
            },
        });

        res.status(200).json(prescricao);
    } catch (error) {
        res.status(400).json({ error: "Erro ao deletar a prescrição." });
    }
});

module.exports = router;