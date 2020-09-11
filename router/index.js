// Dependencies
const usersController = require('../controllers/usersController');
const merchantsController = require('../controllers/merchantsController');
const experiencesController = require('../controllers/experiencesController');
const sessionsController = require('../controllers/sessionsController');

// Routes
module.exports = app => {

    // Session Routes
    app.post('/merchants/login', sessionsController.merchantLogin);
    app.get('/merchants/logout', sessionsController.merchantLogout);
    app.get('/merchants/authentication', sessionsController.checkMerchantAuthentication);


    // User Routes
    app.get('/users', usersController.getAll);
    app.get('/users/:id', usersController.getOneById);
    app.post('/users', usersController.create);
    app.put('/users/:id', usersController.updateOneById);    
    app.delete('/users/:id', usersController.deleteOneById);

    // Merchant Routes
    app.get('/merchants', merchantsController.getAll);
    app.get('/merchants/:id/experiences', experiencesController.getAllByMerchantId);
    app.get('/merchants/:id', merchantsController.getOneById);
    app.post('/merchants', merchantsController.create);
    app.put('/merchants/:id', merchantsController.updateOneById);
    app.delete('/merchants/:id', merchantsController.deleteOneById);

    // Experience Routes
    app.get('/experiences', experiencesController.getAll);
    app.get('/experiences/:id', experiencesController.getOneById);
    app.post('/experiences', experiencesController.create);
    app.put('/experiences/:id', experiencesController.updateOneById);
    app.delete('/experiences/:id', experiencesController.delete);

    
}

