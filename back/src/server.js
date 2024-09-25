const express = require('express');

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

app.use("/delete-historico", deleteHistorico);
app.use("/get-historico", getHistorico);
app.use("/post-historico", postHistorico);
app.use("/put-historico", putHistorico);

app.use("/delete-prescricao", deletePrescricao);
app.use("/get-prescricao", getPrescricao);
app.use("/post-prescricao", postPrescricao);
app.use("/put-prescricao", putPrescricao);

app.use("/delete-remedio", deleteRemedio);
app.use("/get-remedio", getRemedio);
app.use("/post-remedio", postRemedio);
app.use("/put-remedio", putRemedio);

app.use("/delete-usuario", deleteUsuario);
app.use("/get-usuario", getUsuario);
app.use("/post-usuario", postUsuario);
app.use("/put-usuario", putUsuario);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
