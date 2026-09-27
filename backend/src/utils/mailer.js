import nodemailer from 'nodemailer'
import env from '../config/env.js'

const transporter = nodemailer.createTransport({
  host: env.smtp.host,
  port: env.smtp.port,
  secure: env.smtp.secure,
  auth: {
    user: env.smtp.user,
    pass: env.smtp.pass
  }
})

export async function sendContactEmail({ name, email, message }) {
  return transporter.sendMail({
    from: `"${env.mailFromName}" <${env.smtp.user}>`,
    to: env.mailTo,
    replyTo: email,
    subject: `New portfolio message from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      'Message:',
      message
    ].join('\n'),
    html: `
      <h2>New portfolio contact message</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
    `
  })
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}
