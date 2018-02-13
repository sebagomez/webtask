var path = require('path');

var appRouter = function (app) {

	var sqlite3 = require('sqlite3').verbose()
	var db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, err => {
		if (err)
			return console.log(err);

		console.log('connected to the database');
	})

	//https://enable-cors.org/server_expressjs.html
	app.use(function (req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});

	app.get("/images/:image", function (req, res) {
		var image = req.params.image;
		let imagePath = path.join(__dirname, '/../images/' + image);
		
		//console.log('Returning image:' + imagePath);
		
		res.header("Content-Type", "image/jpeg");

		res.sendFile(imagePath);
	});

	app.get("/car/:carid", function (req, res) {

		var carId = req.params.carid;

		res.header("Content-Type", "application/json");
		
		//console.log('Car ' + carId + ' requested');

		let car = {};
		let images = [];
		db.get("SELECT * FROM Car WHERE Id = ?", [carId], function (err, row) {
			if (err) {
				console.log(err);
				res.status(500).send(err);
				return;
			}

			car = row;
			if (!row)
				return res.status(404).send({});

			db.all("SELECT ImageUrl FROM CarImage WHERE CarId = ?", [carId], function (err, row) {

				images = row.map(i => i.ImageUrl);
				res.send({ 'car': car, 'images': images });

			});
		});
	});

}

module.exports = appRouter;