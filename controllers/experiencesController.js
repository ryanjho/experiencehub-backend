// Dependencies
const experiencesRepository = require('../repositories/experiencesRepository');
const httpResponseFormatter = require('../formatters/httpResponse');
const { ObjectId } = require('mongodb');
const { updateOneById } = require('../repositories/merchantsRepository');

module.exports = {
    async getAll(req, res) {
        const experiences = await experiencesRepository.getAll();
        httpResponseFormatter.formatOkResponse(res, experiences);
    },
    async getOneById(req, res) {
        const experience = await experiencesRepository.getOneById(req.params.id);
        httpResponseFormatter.formatOkResponse(res, experience)
    },

    async getAllByMerchantId(req,res) {
        const experiences = await experiencesRepository.getAllByMerchantId(req.params.id);
        httpResponseFormatter.formatOkResponse(res, experiences);
    },

    async create(req,res) {
        req.body.merchantId = ObjectId(req.body.merchantId);
        const newExperience = await experiencesRepository.create(req.body);
        httpResponseFormatter.formatOkResponse(res, newExperience);
    },

    async updateOneById(req, res) {
        const result = await experiencesRepository.updateOneById(req.params.id, req.body);
        httpResponseFormatter.formatOkResponse(res, result);
    },

    async delete(req,res) {
        const result = experiencesRepository.deleteOneById(req.params.id);
        httpResponseFormatter.formatOkResponse(res, result);
    }
}