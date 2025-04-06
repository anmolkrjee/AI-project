import { GoogleGenerativeAI } from '@google/generative-ai';
import express from 'express';
import ottPlans from '../assets/ottPlans.js';

const router = express.Router();
const apiKey = process.env.API_KEY;

router.post('/', async (req, res) => {
  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const { query } = req.body;

    const prompt = `
You are a helpful OTT subscription assistant.

👤 The user asked: "${query}"

👉 First, briefly respond to their query based on available data.

Then say:
"To give you better suggestions, could you please tell me:
- Your preferred budget?
- Desired duration (monthly, quarterly, yearly)?
- Any specific platforms (e.g., Netflix, Prime)?
- Are you interested in sports, movies, regional content, or kids' shows?"

🎯 Use the following data to support your response:

${JSON.stringify(ottPlans, null, 2)}

Only use relevant plans in your answer. Avoid listing all plans. Speak naturally like a real assistant.
`;


    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    const cleanedString = text
      .replace(/```(json|javascript)?/g, '')
      .replace(/```/g, '')
      .trim();

    res.send({ reply: cleanedString });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'An error occurred' });
  }
});

router.get('/:userId', (req, res) => {
  res.send("User result");
});

export default router;
