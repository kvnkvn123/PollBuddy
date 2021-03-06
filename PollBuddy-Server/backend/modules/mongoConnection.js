const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const url = 'mongodb://db:27017';
const database = 'pollbuddy';

var db;

module.exports = {
	connect: function(callback){

		con();

		function con() {
			const client = new MongoClient(url);
			client.connect((err) => {
				if (err) {
					console.error("Seems the database isn't up yet, retrying in 1 second");
					setTimeout(function () {
						con();
					}, 1000);
				} else {
					db = client.db(database);
					console.log('Database connected from module');
				}
			});

		}
	},
	getDB: function(){
		return db;
	},
	getMongo: function(){
		return mongo;
	}
};