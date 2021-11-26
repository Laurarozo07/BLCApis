const express = require("express");
const morgan = require("morgan");
const app = express();
const { mongoose } = require("./conexion");
const cors = require("cors");


// configuracion
app.set('port', process.env.PORT || 8082);

// ------------ configuracion de cors --------------------
app.use(cors()) // habilita todos los origenes

// Funciones para procesar los datos
app.use(morgan("dev")); // sirve para que se comene automaticamente cada ejecusion por consola.
app.use(express.json());


// Iniciar servidor
app.listen(app.get('port'), () => {
    console.log('Servidor por el puerto: ' + app.get('port'));
})

//rutas de nuestro servidor
app.use("/api/usuarios", require("./routes/usuarios.routes"))
app.use("/api/clientes", require("./routes/clientes.routes"))