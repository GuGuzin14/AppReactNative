const express = require('express');
const router = express.Router();
const conexao = require('../db');

// Listar todos os funcionários
router.get('/funcionarios', async (req, res) => {
    try {
        const [rows] = await conexao.query('SELECT * FROM funcionarios');
        res.json(rows);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Obter um funcionário por ID
router.get('/funcionarios/:id', async (req, res) => {
    try {
        const [rows] = await conexao.query('SELECT * FROM funcionarios WHERE id = ?', [req.params.id]);
        res.json(rows[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Criar um novo funcionário
router.post('/funcionarios', async (req, res) => {
    try {
        const { nome, cargo_id, turno_id } = req.body;
        const [result] = await conexao.query('INSERT INTO funcionarios (nome, cargo_id, turno_id) VALUES (?, ?, ?)', [nome, cargo_id, turno_id]);
        res.json({ id: result.insertId });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Atualizar um funcionário
router.put('/funcionarios/:id', async (req, res) => {
    try {
        const { nome, cargo_id, turno_id } = req.body;
        await conexao.query('UPDATE funcionarios SET nome = ?, cargo_id = ?, turno_id = ? WHERE id = ?', [nome, cargo_id, turno_id, req.params.id]);
        res.send('Funcionário atualizado com sucesso!');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Excluir um funcionário
router.delete('/funcionarios/:id', async (req, res) => {
    try {
        await conexao.query('DELETE FROM funcionarios WHERE id = ?', [req.params.id]);
        res.send('Funcionário excluído com sucesso!');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;