const express = require('express');
const prisma = require("../../../../prisma/prismaClient");

const router = express.Router();
router.use(express.json());

/**
 * @swagger
 * tags:
 *   - name: Usuários
 *     description: Operações relacionadas aos usuários
 * /usuarios:
 *   put:
 *     summary: Atualizar um usuário
 *     description: Atualiza um usuário existente com base no ID fornecido.
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: ID do usuário a ser atualizado.
 *               nome:
 *                 type: string
 *                 description: Novo nome do usuário.
 *               email:
 *                 type: string
 *                 description: Novo email do usuário.
 *               senha:
 *                 type: string
 *                 description: Nova senha do usuário.
 *               dt_nascimento:
 *                 type: string
 *                 format: date
 *                 description: Nova data de nascimento do usuário.
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso.
 *       400:
 *         description: Erro ao atualizar o usuário.
 */

router.put("/", async (req, res) => {
    const { id, nome, email, senha, dt_nascimento } = req.body;

    try {
        const usuario = await prisma.usuario.update({
            where: {
                id: Number(id),
            },
            data: {
                nome,
                email,
                senha,
                dt_nascimento: new Date(dt_nascimento),
            },
        });

        res.status(200).json(usuario);
    } catch (error) {
        res.status(400).json({ error: "Erro ao atualizar o usuário." });
    }
})

module.exports = router;