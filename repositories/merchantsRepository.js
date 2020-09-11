// Dependencies
const db = require('../db');
const { ObjectId } = require('mongodb');

module.exports = {
    async findAllMerchants() {
        const data = await db.merchants.find().toArray();
        return data;
    },

    async findOneMerchantById(id) {
        try {
            const result = await db.merchants.findOne( { _id: ObjectId(id)});
            return result;
        } catch(err) {
            console.log(err)
        }
        
    },

    async findOneMerchantByEmail(email) {
        try {
            const result = await db.merchants.findOne({ email: email});
            if (result) {
                return result
            } else {
                return null;
            }
            // if (!result) throw new Error(`Merchant with email ${email} does not exist.`);
            // return result;
        } catch(err) {
            console.log(err);
        }
    },

    async create(data) {
        try {
            const { ops: [newMerchant] } = await db.merchants.insertOne(data);
            return newMerchant
        } catch(err) {
            console.log(err);
        }
    },

    async updateOneById(id, newData) {
        try {
            const { value } = await db.merchants.findOneAndUpdate(
                { _id: ObjectId(id) },
                { $set: newData},
                { returnOriginal: false }
            );
            return value;
        } catch(err) {
            console.log(err);
        }
    },

    async deleteOneById(id) {
        try {
            const { result } = await db.merchants.deleteOne( { _id: ObjectId(id) });
            if (!result.n) throw new Error(`Merchant with ID ${id} does not exist`);
            return result;
        } catch(err) {
            console.log(err);
        }
    }
}
