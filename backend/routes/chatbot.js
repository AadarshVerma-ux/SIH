const express = require('express');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Make sure to add your OpenAI API key in the .env file
});
const openai = new OpenAIApi(configuration);

router.post('/chatbot', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    });

    res.json({ response: response.data.choices[0].message.content });
  } catch (error) {
    console.error('Error with OpenAI API:', error);
    res.status(500).json({ error: 'Failed to connect with the AI service.' });
  }
});

module.exports = router;
