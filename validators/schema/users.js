module.exports = {
    type: 'object',
    required: ['name', 'email', 'password'],
    properties: {
        name: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        phoneNumber: {
            type: 'number'
        },
        password: {
            type: 'string'
        },
        createdAt: {
            type: 'string',
            format: 'date-time'
        },
        updatedAt: {
            type: 'string',
            format: 'date-time'
        }
    }
}