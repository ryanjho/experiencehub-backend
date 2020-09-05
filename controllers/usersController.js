const usersRepository = require('../repositories/usersRepository');
const httpResponseFormatter = require('../formatters/httpResponse');

module.exports = {
    async getAll(req, res) {
        const users = await usersRepository.findAll();
        httpResponseFormatter.formatOkResponse(res, users);
    }
}