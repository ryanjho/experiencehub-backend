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
    },

    async getOneById(id) {
        try {
            const result = await db.experiences.findOne( { _id: ObjectId(id) } );
            return result;
        } catch(err) {
            console.log(err);
        }
    },

    async create(data) {
        try {
            const { ops: [newExperience] } = await db.experiences.insertOne(data);
            return newExperience;
        } catch(err) {
            console.log(err);
        }
    },

    async getAllByMerchantId(merchantId) {
        try {
            const result = await db.experiences.find( { merchantId: ObjectId(merchantId) }).toArray();
            return result;
        } catch(err) {
            console.log(err);
        }
    },

    async updateOneById(id, data) {
        try {
            const { value } = await db.experiences.findOneAndUpdate(
                { _id: ObjectId(id) },
                { $set: data },
                { returnOriginal: false }
            )
            return value;
        } catch(err) {
            console.log(err);
        }
    },

    async deleteOneById(id) {
        try {
            const { result } = await db.experiences.deleteOne( { _id: ObjectId(id) });
            if (!result.n) throw new Error(`Experience with ID ${id} does not exist`);
            return result;
        } catch(err) {
            console.log(err);
        }
    }
}