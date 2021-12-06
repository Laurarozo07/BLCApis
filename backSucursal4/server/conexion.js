const mongoose = require("mongoose");
const mongo_uri = "mongodb+srv://admin:1234@bikerlinkcompany.swjxy.mongodb.net/DB_Consolidacion?retryWrites=true&w=majority"; // no sabemos si es solo o con db :D //
// 'mongodb+srv://admin:1234@bikerlinkcompany.swjxy.mongodb.net/DB_Consolidacion?retryWrites=true&w=majority'

mongoose.connect(mongo_uri)
    .then(db => console.log("conexion exitosa"))
    .catch(err => console.error(err));
module.exports = mongoose;