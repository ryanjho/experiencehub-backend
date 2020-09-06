// Dependencies
const db = require('../db');
const { ObjectId } = require('mongodb');

module.exports = {
    async findAllMerchants() {
        const data = await db.merchants.find().toArray();
        return data;
    }
}
