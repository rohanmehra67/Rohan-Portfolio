import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, minlength: 2, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 160 },
    message: { type: String, required: true, trim: true, minlength: 10, maxlength: 5000 },
    status: { type: String, enum: ['new', 'emailed'], default: 'new' }
  },
  { timestamps: true }
)

export default mongoose.model('Contact', contactSchema)
