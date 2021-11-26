const mongoose = require("mongoose");
const mongo_uri = "mongodb://localhost/db_ventas";


mongoose.connect(mongo_uri)
    .then(db => console.log("conexion exitosa"))
    .catch(err => console.error(err));
module.exports = mongoose;