var express 	= require('express'),
	router 		= express.Router(),
	mongoose 	= require('mongoose'),
	Cars 		= mongoose.model('Article');

module.exports = function (app) {
	app.use('/', router);
};

router.get('/', function (req, res, next) {
	Cars.find(function (err, cars) {
		if (err) 
			return next(err);
		else {
			res.render('index', {
				title	: 'Cars',
				cars	: cars
			});
		}
	});
});
