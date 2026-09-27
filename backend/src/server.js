import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import env from './config/env.js'
import contactRouter from './routes/contact.js'

const app = express()

app.use(cors({
  origin: true,
  methods: ['GET', 'POST'],
  credentials: false
}))
app.use(express.json({ limit: '20kb' }))

app.get('/api/health', (req, res) => {
  res.json({ ok: true, service: 'portfolio-api' })
})

app.use('/api/contact', contactRouter)

async function start() {
  if (!env.mongoUri) {
    throw new Error('MONGODB_URI is not configured.')
  }

  await mongoose.connect(env.mongoUri)
  console.log('MongoDB connected')

  app.listen(env.port, () => {
    console.log(`Backend running on http://localhost:${env.port}`)
  })
}

start().catch((error) => {
  console.error('Failed to start backend:', error)
  process.exit(1)
})
