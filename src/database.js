const mongoose = require('mongoose');

async function database() {
    await mongoose.connect(process.env.DB_HOST);
}

module.exports = database;

