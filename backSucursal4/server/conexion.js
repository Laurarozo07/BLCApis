const mongoose = require("mongoose");
const mongo_uri = "mongodb://localhost/db_consolidacion"; // no sabemos si es solo o con db :D //


mongoose.connect(mongo_uri)
    .then(db => console.log("conexion exitosa"))
    .catch(err => console.error(err));
module.exports = mongoose;