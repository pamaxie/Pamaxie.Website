exports.Authentication = function(app) {
    const controller = require('../controllers/Authentication');

    app.route('/users/authenticate')
        .post(controller.Authenticate);
}