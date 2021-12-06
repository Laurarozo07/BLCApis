const mongoose = require("mongoose");
const mongo_uri = "mongodb+srv://admin:1234@bikerlinkcompany.swjxy.mongodb.net/DB_Clientes?retryWrites=true&w=majority";


mongoose.connect(mongo_uri)
    .then(db => console.log("conexion exitosa"))
    .catch(err => console.error(err));
module.exports = mongoose;