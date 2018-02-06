
var appRouter = function(app) {

	var sqlite3 = require('sqlite3').verbose()
	var db = new sqlite3.Database('./database.db',sqlite3.OPEN_READWRITE, err => {
		if (err)
			return console.log(err);

		console.log('connected to the database');
	})

	//https://enable-cors.org/server_expressjs.html
	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		res.header("Content-Type","application/json");
		next();
	  });

	app.get("/car/:carid", function(req, res) {

		var carId = req.params.carid;

		console.log('asked for car ' + carId);

		let data = {};
		db.get("SELECT * FROM Car WHERE Id = ?", [carId], function(err, row) {
			if (err){
				console.log(err);
				res.status(500).send(err);
				return;
			}
			if (row)
				res.send(row);
			else
				res.status(404).send({});
			
		});
	});

}

module.exports = appRouter;