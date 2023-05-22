const { Router } = require('express');
const empregadoDAO = require('./repository/EmpregadoRepository');

const route = Router();

route.get('/', async (_, res) => {
	const timestamp = await empregadoDAO.date.timestamp();
	return res.json({ ok: `[rodando] ${timestamp.now}` });
});

route.get('/empregados', async (_, res) => {
	const empregados = await empregadoDAO.listarEmpregado();
	return res.json(empregados);
});

route.post('/empregados', async (req, res) => {
	const { nome, idade, cargo } = req.body;

	await empregadoDAO.salvarEmpregado({ nome, idade, cargo });
	return res.json({ create: `empregado ${nome} foi criado` });
});

module.exports = route;
