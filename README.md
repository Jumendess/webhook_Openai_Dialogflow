# Webhook para Dialogflow

Este projeto é um webhook criado para integrar o Dialogflow com a API OpenAI.

## Descrição

A aplicação funciona como um intermediário entre o Dialogflow e a API OpenAI. Quando uma consulta é enviada ao Dialogflow, o webhook processa a requisição, envia a consulta para a API OpenAI e retorna a resposta gerada pelo modelo da OpenAI para o Dialogflow.

### Principais Funcionalidades

- **Recepção de Requisições**: O webhook aceita requisições POST enviadas pelo Dialogflow.
- **Integração com OpenAI**: A consulta recebida é enviada para a API OpenAI para processamento.
- **Resposta ao Dialogflow**: A resposta gerada pela OpenAI é retornada para o Dialogflow, que a utiliza para responder ao usuário.

Este webhook permite que você adicione respostas mais complexas e dinâmicas às interações do Dialogflow, aproveitando a capacidade de geração de texto da OpenAI.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para o código do servidor.
- **Express**: Framework para construir a aplicação web.
- **OpenAI API**: Serviço para geração de texto.
- **Dialogflow**: Plataforma para construção de chatbots.

## Como Funciona

1. **Configuração**: O webhook é configurado com uma chave de API da OpenAI e expõe um endpoint para receber requisições do Dialogflow.
2. **Processamento**: Quando uma requisição é recebida, o webhook extrai a consulta, a envia para a API OpenAI e aguarda a resposta.
3. **Resposta**: A resposta da OpenAI é retornada ao Dialogflow, que a utiliza para interagir com o usuário.

Para mais detalhes sobre a configuração e uso, consulte a documentação adicional.
