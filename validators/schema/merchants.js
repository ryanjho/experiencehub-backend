module.exports = {
    type: 'object',
    required: ['name', 'email', 'password', 'description', 'logo'],
    properties: {
        name: {
            type: 'string'
        },
        email: {
            type: 'string'
        },
        description: {
            type: 'string'
        },
        password: {
            type: 'string'
        },
        logo: {
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