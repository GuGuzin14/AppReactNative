const express = require('express');
const router = express.Router();
const conexao = require('../db');

// Listar todos os registros de ponto
router.get('/registros_ponto', async (req, res) => {
    try {
        const [rows] = await conexao.query('SELECT * FROM registros_ponto');
        res.json(rows);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Obter um registro de ponto por ID
router.get('/registros_ponto/:id', async (req, res) => {
    try {
        const [rows] = await conexao.query('SELECT * FROM registros_ponto WHERE id = ?', [req.params.id]);
        res.json(rows[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Criar um novo registro de ponto
router.post('/registros_ponto', async (req, res) => {
    try {
        const { funcionario_id, data_hora, tipo } = req.body;
        const [result] = await conexao.query(
            'INSERT INTO registros_ponto (funcionario_id, data_hora, tipo) VALUES (?, ?, ?)',
            [funcionario_id, data_hora, tipo]
        );
        res.json({ id: result.insertId });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Atualizar um registro de ponto
router.put('/registros_ponto/:id', async (req, res) => {
    try {
        const { funcionario_id, data_hora, tipo } = req.body;
        await conexao.query(
            'UPDATE registros_ponto SET funcionario_id = ?, data_hora = ?, tipo = ? WHERE id = ?',
            [funcionario_id, data_hora, tipo, req.params.id]
        );
        res.send('Registro de ponto atualizado com sucesso!');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Excluir um registro de ponto
router.delete('/registros_ponto/:id', async (req, res) => {
    try {
        await conexao.query('DELETE FROM registros_ponto WHERE id = ?', [req.params.id]);
        res.send('Registro de ponto excluído com sucesso!');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;