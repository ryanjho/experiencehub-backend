const usersController = require('../controllers/usersController');
const merchantsController = require('../controllers/merchantsController');

module.exports = app => {

    app.get('/users', usersController.getAll);


    app.get('/merchants', merchantsController.getAll);

}

