import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000

// Comma-separated list, e.g. "https://fwd-hlp.netlify.app,http://localhost:5173"
const origins = (process.env.CORS_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((o) => o.trim())

app.use(cors({ origin: origins }))
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() })
})

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from Express' })
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
