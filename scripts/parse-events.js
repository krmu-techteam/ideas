import fetch from "node-fetch"

const csvUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ideas_list-G5588CS3tU6tPQqw8iF8GzB1lTGLfy.csv"

async function parseCSV() {
  const res = await fetch(csvUrl)
  const text = await res.text()
  const lines = text.split("\n")
  const headers = lines[0].split(",").map((h) => h.trim())

  const events = []
  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue
    const values = lines[i].split(",").map((v) => v.trim())
    const event = {}
    headers.forEach((h, idx) => {
      event[h] = values[idx] || ""
    })
    events.push(event)
  }

  console.log(JSON.stringify(events, null, 2))
}

parseCSV()
