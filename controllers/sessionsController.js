// Dependencies
const merchantsRepository = require('../repositories/merchantsRepository');
const httpResponseFormatter = require('../formatters/httpResponse');

module.exports = {
    async merchantLogin (req, res) {
        try {
            const merchant = await merchantsRepository.findOneMerchantByEmail(req.body.email);
            if (!merchant || merchant.password !== req.body.password ) {
                httpResponseFormatter.formatOkResponse(res, {
                    error: 'Email and/or password is not correct'
                })
            } else {
                req.session.merchantId = merchant._id;
                console.log(req.session);
                httpResponseFormatter.formatOkResponse(res, merchant);
            }
        } catch(err) {
            console.log(err);
        }
    },

    merchantLogout (req, res) {
        req.session.destroy(err => {
            if (err) console.log(err);
            httpResponseFormatter.formatOkResponse(res, {
                merchant: 'Log Out'
            })
        })
    },

    checkMerchantAuthentication(req, res) {
        req.session.merchantId ? httpResponseFormatter.formatOkResponse(res, {
            merchantLoginStatus: true
        }) : httpResponseFormatter.formatOkResponse(res, {
            merchantLoginStatus: false
        })
    }
}
