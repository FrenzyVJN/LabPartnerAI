import { env } from '$env/dynamic/private';
import { error } from '@sveltejs/kit';


/**
 * @param {any} prompt
 */
async function generateContent(prompt) {
    const apiKey = env.GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;
  
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    });
  
    if (!response.ok) {
      throw new Error(`Error generating content: ${await response.text()}`);
    }
  
    const data = await response.json();
    console.log(data);
    return data;
  }
  