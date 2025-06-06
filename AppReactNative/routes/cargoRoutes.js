const express = require('express');
const router = express.Router();
const conexao = require('../db');

// Listar todos os cargos
router.get('/cargos', async (req, res) => {
    try {
        const [rows] = await conexao.query('SELECT * FROM cargos');
        res.json(rows);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Obter um cargo por ID
router.get('/cargos/:id', async (req, res) => {
    try {
        const [rows] = await conexao.query('SELECT * FROM cargos WHERE id = ?', [req.params.id]);
        res.json(rows[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Criar um novo cargo
router.post('/cargos', async (req, res) => {
    try {
        const { nome } = req.body;
        const [result] = await conexao.query('INSERT INTO cargos (nome) VALUES (?)', [nome]);
        res.json({ id: result.insertId });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Atualizar um cargo
router.put('/cargos/:id', async (req, res) => {
    try {
        const { nome } = req.body;
        await conexao.query('UPDATE cargos SET nome = ? WHERE id = ?', [nome, req.params.id]);
        res.send('Cargo atualizado com sucesso!');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Excluir um cargo
router.delete('/cargos/:id', async (req, res) => {
    try {
        await conexao.query('DELETE FROM cargos WHERE id = ?', [req.params.id]);
        res.send('Cargo excluído com sucesso!');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;