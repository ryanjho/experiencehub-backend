const usersController = require('../controllers/usersController');
const merchantsController = require('../controllers/merchantsController');
const experiencesController = require('../controllers/experiencesController');

module.exports = app => {

    // User Routes
    app.get('/users', usersController.getAll);

    // Merchant Routes
    app.get('/merchants', merchantsController.getAll);
    app.get('/merchants/:id', merchantsController.getOneById);
    app.post('/merchants', merchantsController.create);
    app.put('/merchants/:id', merchantsController.updateOneById);
    app.delete('/merchants/:id', merchantsController.deleteOneById);

    // Experience Routes
    app.get('/experiences', experiencesController.getAll);

}

