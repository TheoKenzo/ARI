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
 *   post:
 *     summary: Criar uma nova prescrição
 *     description: Adiciona uma nova prescrição ao sistema com base nas informações fornecidas.
 *     tags: [Prescrições]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_usuario:
 *                 type: integer
 *                 description: ID do usuário associado à prescrição.
 *               observacao:
 *                 type: string
 *                 description: Observação da prescrição.
 *               id_remedio:
 *                 type: integer
 *                 description: ID do remédio associado à prescrição.
 *               frequencia:
 *                 type: string
 *                 format: date
 *                 description: Frequência da prescrição.
 *               dt_inicio:
 *                 type: string
 *                 format: date
 *                 description: Data de início da prescrição.
 *               dt_fim:
 *                 type: string
 *                 format: date
 *                 description: Data de fim da prescrição.
 *     responses:
 *       201:
 *         description: Prescrição criada com sucesso.
 *       400:
 *         description: Erro ao criar a prescrição.
 */

router.post("/", async (req, res) => {
    const { id_usuario, observacao, id_remedio, frequencia, dt_inicio, dt_fim } = req.body;

    try {
        const novaPrescricao = await prisma.prescricao.create({
            data: {
                id_usuario: Number(id_usuario),
                observacao,
                id_remedio: Number(id_remedio),
                frequencia: new Date(frequencia),
                dt_inicio: new Date(dt_inicio),
                dt_fim: new Date(dt_fim),
            },
        });

        res.status(201).json(novaPrescricao);
    } catch (error) {
        res.status(400).json({ error: "Erro ao criar a prescrição." });
    }
});

module.exports = router;