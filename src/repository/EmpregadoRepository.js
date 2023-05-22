const { client } = require('../infra/db/postgres');

const salvarEmpregado = async (empregado) => {
	const SQL_INSERT = `INSERT INTO empregado(nome,idade,cargo) values ($1,$2,$3)`;
	const values = [empregado.nome, empregado.idade, empregado.cargo];
	return await client.query(SQL_INSERT, values);
};

const listarEmpregado = async () => {
	const SQL_SELECT = 'SELECT * FROM empregado';
	try {
		const res = await client.query(SQL_SELECT);
		return res.rows;
	} catch (err) {
		console.log('[erro]:', err);
		return null;
	}
};

const date = {
	timestamp: async () => {
		const SQL_TIME = 'SELECT NOW()';
		try {
			const res = await client.query(SQL_TIME);
			return res.rows[0];
		} catch (err) {
			console.log('[erro]: ', err);
			return null;
		}
	},
};

module.exports = { salvarEmpregado, listarEmpregado, date };
