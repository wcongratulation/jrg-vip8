module.exports = function(app) {
	var Router 		= require('koa-router'), 
		indexCtrl 	= require('../controllers/index');

	var router = new Router();

	router
		.get('/', indexCtrl.index)
        .post('/', indexCtrl.post)
        .get('/a', indexCtrl.a)

	app.use(router.middleware());
};
