// Dependencies
const { MongoClient, connect } = require('mongodb');

// Connection
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017';

// Database Name
const DB_NAME = process.env.DB_NAME || 'experience-hub';

// Collections Name
const COLLECTIONS = {
    USERS: 'users',
    MERCHANTS: 'merchants',
    EXPERIENCES: 'experiences'
}

// Create new MongoClient
const client = new MongoClient(MONGO_URL, { useUnifiedTopology: true});

module.exports = {
    async connect() {
        const connection = await client.connect();
        console.log('Connected to MongoDB');
        const db = connection.db(DB_NAME);
        this.users = db.collection(COLLECTIONS.USERS);
        this.merchants = db.collection(COLLECTIONS.MERCHANTS);
        this.experiences = db.collection(COLLECTIONS.EXPERIENCES);
    },
    disconnect() {
        return client.close();
    }
}
