const openaiService = require('../services/openaiService');

exports.handleRequest = async (req, res) => {
  try {
    const response = await openaiService.generateText(req.body.queryResult.queryText);
    res.json({ fulfillmentText: response });
  } catch (error) {
    console.error('Erro ao gerar texto:', error);
    res.status(500).send('Erro interno do servidor');
  }
};
