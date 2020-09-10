// Dependencies
const db = require('../db');
const { ObjectId } = require('mongodb');

module.exports = {
    async findAllUsers() {
        try {
            const users = await db.users.find().toArray();
            return users;
        } catch(err) {
            console.log(err);
        }
        
    },

    async findOneUserById(id) {
        try {
            const user = await db.users.findOne( { _id: ObjectId(id) });
            return user;
        } catch(err) {
            console.log(err);
        }
    },

    async findOneUserByEmail(email) {
        try {
            const result = await db.users.findOne( { email: email} );
            if (!result) throw new Error(`User with email ${email} does not exist.`);
            return result;
        } catch(err) {
            console.log(err);
        }
    },

    async create(data) {
        try {
            const { ops: [newUser] } = await db.users.insertOne(data);
            return newUser
        } catch(err) {
            console.log(err);
        }
    },

    async updateOneById(id, newData) {
        try {
            const { value } = await db.users.findOneAndUpdate(
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
            const { result } = await db.users.deleteOne( { _id: ObjectId(id) });
            if (!result.n) throw new Error(`User with ID ${id} does not exist`);
            return result;
        } catch(err) {
            console.log(err);
        }
    }
 }
