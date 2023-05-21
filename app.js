const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => (
    res.send("Bem Vinda Bianca")
));

app.get("/contato/:id", (req, res) => {
    const {id} = req.params;
    const {sit} = req.query;
    return res.json({
        id,
       "nome": "Bianca",
       "email": "cbia@gmail.com",
        sit
    });
});

app.post("/contato", (req, res) => {
    let {nome} = req.body;
    let {email} = req.body;
    return res.json({
        nome,
        email
    });
});
app.listen(8080, () => {
    console.log("servidor iniciado");
} );