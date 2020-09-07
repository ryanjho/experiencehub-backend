// Depedencies
const db = require('../db');
const { ObjectId } = require('mongodb');

module.exports = {
    async getAll() {
        try {
            const result = await db.experiences.find().toArray();
            return result;
        } catch(err) {
            console.log(err);
        }
        
    }
}