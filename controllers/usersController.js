const usersRepository = require('../repositories/usersRepository');
const httpResponseFormatter = require('../formatters/httpResponse');

module.exports = {
    async getAll(req, res) {
        const users = await usersRepository.findAllUsers();
        httpResponseFormatter.formatOkResponse(res, users);
    },
    async getOneById(req,res) {
        const user = await usersRepository.findOneUserById(req.params.id);
        httpResponseFormatter.formatOkResponse(res, user);
    },

    async create(req,res) {
        const check = await usersRepository.findOneUserByEmail(req.body.email);
        if (check) {
            httpResponseFormatter.formatOkResponse(res, {
                error: 'Email address is already in use. Please use another one'
            });
        } else {
            const newUser = await usersRepository.create(req.body);
            httpResponseFormatter.formatOkResponse(res, newUser);
        }
    },

    async deleteOneById(req, res) {
        const result = await usersRepository.deleteOneById(req.params.id);
        httpResponseFormatter.formatOkResponse(res, result);
    },

    async updateOneById(req, res) {
        const result = await usersRepository.updateOneById(req.params.id, req.body);
        httpResponseFormatter.formatOkResponse(res, result);
    }
}