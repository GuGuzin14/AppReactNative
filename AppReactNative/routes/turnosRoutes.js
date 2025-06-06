const express = require('express');
const router = express.Router();
const conexao = require('../db');

// Listar todos os turnos
router.get('/turnos', async (req, res) => {
    try {
        const [rows] = await conexao.query('SELECT * FROM turnos');
        res.json(rows);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Obter um turno por ID
router.get('/turnos/:id', async (req, res) => {
    try {
        const [rows] = await conexao.query('SELECT * FROM turnos WHERE id = ?', [req.params.id]);
        res.json(rows[0]);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Criar um novo turno
router.post('/turnos', async (req, res) => {
    try {
        const { nome } = req.body;
        const [result] = await conexao.query('INSERT INTO turnos (nome) VALUES (?)', [nome]);
        res.json({ id: result.insertId });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Atualizar um turno
router.put('/turnos/:id', async (req, res) => {
    try {
        const { nome } = req.body;
        await conexao.query('UPDATE turnos SET nome = ? WHERE id = ?', [nome, req.params.id]);
        res.send('Turno atualizado com sucesso!');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Excluir um turno
router.delete('/turnos/:id', async (req, res) => {
    try {
        await conexao.query('DELETE FROM turnos WHERE id = ?', [req.params.id]);
        res.send('Turno excluído com sucesso!');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Endpoint para criar um novo turno
router.post('/turnos', async (req, res) => {
    try {
        const { periodo, horario_inicio, horario_fim } = req.body;
        const [result] = await conexao.query(
            'INSERT INTO turnos (periodo, horario_inicio, horario_fim) VALUES (?, ?, ?)',
            [periodo, horario_inicio, horario_fim]
        );
        res.json({ id: result.insertId });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;