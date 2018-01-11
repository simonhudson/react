const controller = require('../controllers/home');

module.exports = (router) => {
	router.get('/', controller);
};
