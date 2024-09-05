const express = require('express');
const bodyParser = require('body-parser');
const webhookController = require('./controllers/webhookController');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/dialogflow', webhookController.handleRequest);

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});
