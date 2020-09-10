// Dependencies
const merchantsRepository = require('../repositories/merchantsRepository');
const httpResponseFormatter = require('../formatters/httpResponse');

module.exports = {
    async getAll(req, res) {
        console.log(req.session);
        if (req.session.merchantId) {
            const merchants = await merchantsRepository.findAllMerchants();
            httpResponseFormatter.formatOkResponse(res, merchants);
        } else {
            httpResponseFormatter.formatOkResponse(res, {
                error: 'Merchant must be logged in to access merchant database'
            });
        }

    },

    async getOneById(req, res) {
        const merchant = await merchantsRepository.findOneMerchantById(req.params.id);
        httpResponseFormatter.formatOkResponse(res, merchant);
    },

    async create(req, res) {
        const check = await merchantsRepository.findOneMerchantByEmail(req.body.email);
        if (check) {
            httpResponseFormatter.formatOkResponse(res, {
                error: 'Email address is already in use. Please use another one'
            }
            );
        } else {
            const newMerchant = await merchantsRepository.create(req.body);
            httpResponseFormatter.formatOkResponse(res, newMerchant);
        }
    },

    async deleteOneById(req, res) {
        const result = await merchantsRepository.deleteOneById(req.params.id);
        httpResponseFormatter.formatOkResponse(res, result);
    },

    async updateOneById(req, res) {
        const result = await merchantsRepository.updateOneById(req.params.id, req.body);
        httpResponseFormatter.formatOkResponse(res, result);
    }


}