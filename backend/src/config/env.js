import 'dotenv/config'

const required = ['MONGODB_URI', 'SMTP_HOST', 'SMTP_USER', 'SMTP_PASS', 'MAIL_TO']

for (const key of required) {
  if (!process.env[key]) {
    console.warn(`[env] Missing ${key}. Contact sending will not work until it is configured.`)
  }
}

export default {
  port: Number(process.env.PORT || 5000),
  mongoUri: process.env.MONGODB_URI,
  smtp: {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: String(process.env.SMTP_SECURE).toLowerCase() === 'true',
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  mailTo: process.env.MAIL_TO,
  mailFromName: process.env.MAIL_FROM_NAME || 'Portfolio'
}
