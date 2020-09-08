const usersController = require('../controllers/usersController');
const merchantsController = require('../controllers/merchantsController');
const experiencesController = require('../controllers/experiencesController');

module.exports = app => {

    // User Routes
    app.get('/users', usersController.getAll);
    app.get('/users/:id', usersController.getOneById);
    app.post('/users', usersController.create);
    app.put('/users/:id', usersController.updateOneById);    
    app.delete('/users/:id', usersController.deleteOneById);

    // Merchant Routes
    app.get('/merchants', merchantsController.getAll);
    app.get('/merchants/:id', merchantsController.getOneById);
    app.post('/merchants', merchantsController.create);
    app.put('/merchants/:id', merchantsController.updateOneById);
    app.delete('/merchants/:id', merchantsController.deleteOneById);

    // Experience Routes
    app.get('/experiences', experiencesController.getAll);
    app.get('/experiences/:id', experiencesController.getOneById);
    app.get('/merchants/:id/experiences', experiencesController.getAllByMerchantId);
    app.post('/experiences', experiencesController.create);
    app.put('/experiences/:id', experiencesController.updateOneById);
    app.delete('/experiences/:id', experiencesController.delete);
}

