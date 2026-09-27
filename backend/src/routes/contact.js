import { Router } from 'express'
import Contact from '../models/Contact.js'
import { sendContactEmail } from '../utils/mailer.js'

const router = Router()

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body

    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof message !== 'string' ||
      name.trim().length < 2 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
      message.trim().length < 10
    ) {
      return res.status(400).json({ message: 'Please enter a valid name, email and message.' })
    }

    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim(),
      message: message.trim()
    })

    try {
      await sendContactEmail(contact)
      contact.status = 'emailed'
      await contact.save()
    } catch (emailError) {
      console.error('SMTP error:', emailError)
      // The message remains stored in MongoDB even if SMTP temporarily fails.
      return res.status(502).json({
        message: 'Your message was saved, but the email could not be delivered right now.'
      })
    }

    return res.status(201).json({ message: 'Message sent successfully.' })
  } catch (error) {
    console.error('Contact route error:', error)
    return res.status(500).json({ message: 'Server error. Please try again later.' })
  }
})

export default router
