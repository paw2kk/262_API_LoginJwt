const db = require('../models');

async function connectDatabase() {
    try {
        await db.sequelize.authenticate();
        console.log('Database connection has been established successfully.');

        await db.sequelize.sync({ alter: true });
        console.log('Database synchronized successfully.');
    } catch (err) {
        console.error('Unable to connect to the database:', err.message);
        process.exit(1); // Exit the process with an error code
    }
}

module.exports = connectDatabase;