const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/slack/slash-commands', (req, res) => {
    const { text } = req.body;
    const chave = text.trim();
    // Aqui você pode adicionar lógica para validar e processar a chave da nota fiscal

    // Supondo que a lógica de processamento e armazenamento foi bem-sucedida
    res.send(`A chave da nota fiscal ${chave} foi bipada e armazenada com sucesso!`);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
