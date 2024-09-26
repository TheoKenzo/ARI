const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../swaggerConfig');

const deleteHistorico = require("./http/routes/Historico/deleteHistorico");
const getHistorico = require("./http/routes/Historico/getHistorico");
const postHistorico = require("./http/routes/Historico/postHistorico");
const putHistorico = require("./http/routes/Historico/putHistorico");

const deletePrescricao = require("./http/routes/Prescricao/deletePrescricao");
const getPrescricao = require("./http/routes/Prescricao/getPrescricao");
const postPrescricao = require("./http/routes/Prescricao/postPrescricao");
const putPrescricao = require("./http/routes/Prescricao/putPrescricao");

const deleteRemedio = require("./http/routes/Remedio/deleteRemedio");
const getRemedio = require("./http/routes/Remedio/getRemedio");
const postRemedio = require("./http/routes/Remedio/postRemedio");
const putRemedio = require("./http/routes/Remedio/putRemedio");

const deleteUsuario = require("./http/routes/Usuario/deleteUsuario");
const getUsuario = require("./http/routes/Usuario/getUsuario");
const postUsuario = require("./http/routes/Usuario/postUsuario");
const putUsuario = require("./http/routes/Usuario/putUsuario");

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/historicos", getHistorico);
app.post("/historicos", postHistorico);
app.put("/historicos", putHistorico);
app.delete("/historicos", deleteHistorico);

app.get("/prescricoes", getPrescricao);
app.post("/prescricoes", postPrescricao);
app.put("/prescricoes", putPrescricao);
app.delete("/prescricoes", deletePrescricao);

app.get("/remedios", getRemedio);
app.post("/remedios", postRemedio);
app.put("/remedios/:id", putRemedio);
app.delete("/remedios", deleteRemedio);

app.get("/usuarios", getUsuario);
app.post("/usuarios", postUsuario);
app.put("/usuarios", putUsuario);
app.delete("/usuarios", deleteUsuario);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
