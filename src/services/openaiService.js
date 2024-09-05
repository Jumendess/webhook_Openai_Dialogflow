const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.generateText = async (queryText) => {
  try {
    const response = await openai.completions.create({
      model: 'text-davinci-003', // Atualize o modelo se necessário
      prompt: queryText,
      max_tokens: 150,
    });
    return response.choices[0].text.trim();
  } catch (error) {
    console.error('Erro na API OpenAI:', error);
    throw new Error('Erro ao gerar resposta');
  }
};
