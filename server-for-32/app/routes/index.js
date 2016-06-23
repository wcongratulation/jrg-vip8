module.exports = function(app) {
	var Router 		= require('koa-router'), 
		indexCtrl 	= require('../controllers/index');

	var router = new Router();

	router
		.get('/', indexCtrl.index)
		.get('/ddd', indexCtrl.ddd)
		.get('/index2', indexCtrl.index2)
        .post('/', indexCtrl.post)

	app.use(router.middleware());
};
