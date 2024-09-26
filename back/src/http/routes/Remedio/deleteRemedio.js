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
 *   delete:
 *     summary: Atualizar status de deleção de um remédio
 *     description: Atualiza o status de um remédio para "deletado" com base no ID fornecido.
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
 *                 description: ID do remédio a ser marcado como deletado.
 *     responses:
 *       200:
 *         description: Remédio marcado como deletado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do remédio atualizado.
 *                 status:
 *                   type: boolean
 *                   description: Novo status do remédio (false para deletado).
 *       400:
 *         description: Erro ao marcar o remédio como deletado.
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
        const remedio = await prisma.remedio.update({
            where: {
                id: Number(id),
            },
            data: {
                status: false,
            },
        });

        res.status(200).json(remedio);
    } catch (error) {
        res.status(400).json({ error: "Erro ao deletar o remedio." });
    }
})

module.exports = router;