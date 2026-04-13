import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  if(req.method !== 'POST') return res.status(405).end()
  const { productName, features } = req.body
  if(!productName) return res.status(400).json({ error: 'productName required' })
  const apiKey = process.env.OPENAI_API_KEY
  if(!apiKey) return res.status(500).json({ error: 'OPENAI_API_KEY not set' })

  const prompt = `Generate a high-converting product listing for the product named "${productName}". Include:\n- A concise title\n- 5 persuasive bullet points\n- A 2-paragraph product description\n- 10 relevant keywords (comma separated)\nFeatures: ${features}`

  try{
    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 800
      })
    })
    const json = await r.json()
    const text = json?.choices?.[0]?.message?.content ?? JSON.stringify(json)
    return res.status(200).json({ output: text })
  }catch(err:any){
    console.error(err)
    return res.status(500).json({ error: 'generation_failed', detail: String(err) })
  }
}
