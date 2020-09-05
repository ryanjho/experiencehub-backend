const usersController = require('../controllers/usersController');

module.exports = app => {

    app.get('/users', usersController.getAll);
}

