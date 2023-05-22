const { Client } = require('pg');

const clientInfo = {
	host: 'localhost',
	port: 5432,
	database: 'postgres',
	user: 'postgres',
	password: '19735',
};

const client = new Client(clientInfo);

const connectDB = () => {
	try {
		client.connect();
		console.log(`[DB connected]: ${clientInfo.user}:${clientInfo.database}`);
	} catch (err) {
		console.error('[connection error]', err.message);
		process.exit(1); // saída de erro
	}
};

module.exports = {
	client,
	connectDB,
};
