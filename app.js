const express = require("express");

const app = express();

app.use(express.json());

/*app.use((req, res, next)=>{
    console.log("Acessou o middlewares");
    next();
});*/
function valueCont (req, res, next){
   if(!req.body.email){
    return res.json({
        erro: true,
        mensagem: "necessário enviar email"
    });
   };
   return next();
}
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

app.post("/contato", valueCont, (req, res) => {
    let {nome} = req.body;
    let {email} = req.body;
    return res.json({
        nome,
        email
    });
});

app.put("/contato/:id", valueCont, (req, res) => {
    const {id} = req.params;
    const {nome, email} = req.body;
   

    return res.json({
        id,
        nome,
        email
    });
});

app.delete("/contato/:id", (req, res) => {
    const {id} = req.params;

    return res.json ({
        id
    });
});
app.listen(8080, () => {
    console.log("servidor iniciado");
} );