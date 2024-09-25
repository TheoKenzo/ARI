const express = require('express');
const prisma = require("../../../../prisma/prismaClient");

const router = express.Router();
router.use(express.json());

router.get("/", async (req, res) => {
    try {
        const usuarios = await prisma.usuario.findMany();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(400).json({ error: "Erro ao buscar os usuários." });
    }
})

module.exports = router;