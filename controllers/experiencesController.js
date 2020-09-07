// Dependencies
const experiencesRepository = require('../repositories/experiencesRepository');
const httpResponseFormatter = require('../formatters/httpResponse');

module.exports = {
    async getAll(req, res) {
        const experiences = await experiencesRepository.getAll();
        httpResponseFormatter.formatOkResponse(res, );
    }
}