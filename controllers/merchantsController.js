const httpResponse = require("../formatters/httpResponse");

// Dependencies
const merchantsRepository = require('../repositories/merchantsRepository');
const httpResponseFormatter = require('../formatters/httpResponse');

module.exports = {
    async getAll(req, res) {
        const merchants = await merchantsRepository.findAllMerchants();
        httpResponseFormatter.formatOkResponse(res, merchants);
    },

    async create(req, res) {
        console.log(req.body);
    }
}