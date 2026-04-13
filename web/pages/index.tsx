import { useState } from 'react'

export default function Home(){
  const [name,setName]=useState('')
  const [features,setFeatures]=useState('')
  const [out,setOut]=useState('')
  const [loading,setLoading]=useState(false)

  async function handleGenerate(e){
    e.preventDefault()
    setLoading(true)
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ productName: name, features })
    })
    const data = await res.json()
    setOut(data.output || JSON.stringify(data))
    setLoading(false)
  }

  return (
    <main style={{padding:24,fontFamily:'sans-serif'}}>
      <h1>AI Listing Generator (MVP)</h1>
      <form onSubmit={handleGenerate}>
        <label>Product name<br/>
          <input value={name} onChange={e=>setName(e.target.value)} style={{width:400}} />
        </label>
        <br/>
        <label>Key features / bullet points (comma separated)<br/>
          <textarea value={features} onChange={e=>setFeatures(e.target.value)} rows={4} style={{width:600}} />
        </label>
        <br/>
        <button type="submit" disabled={loading}>{loading? 'Generating...':'Generate listing'}</button>
      </form>
      <section style={{marginTop:20}}>
        <h2>Output</h2>
        <pre style={{whiteSpace:'pre-wrap'}}>{out}</pre>
      </section>
    </main>
  )
}
