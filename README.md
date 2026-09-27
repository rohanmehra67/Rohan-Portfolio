# Bianca Portfolio — React + Tailwind + Node + MongoDB

A React/Vite/Tailwind recreation of the supplied Bianca portfolio design.

## Stack

- React + Vite
- Tailwind CSS
- Framer Motion for UI/scroll transitions
- Node.js + Express
- MongoDB + Mongoose
- Nodemailer for direct email delivery
- Lucide React icons

## Architecture

`frontend` contains the portfolio UI.

`backend` exposes:

- `POST /api/contact` — validates a contact form submission, saves it to MongoDB, and emails it to you.
- `GET /api/health` — health check.

The browser never receives MongoDB credentials or SMTP credentials.

## Setup

### 1. Frontend

```bash
cd frontend
npm install
npm run dev
```

### 2. Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Fill `.env` before starting the backend.

### 3. MongoDB

Create a MongoDB Atlas database and put its connection string in:

`MONGODB_URI=...`

### 4. Email

The backend uses SMTP through Nodemailer.

For Gmail, use an App Password rather than your normal Gmail password:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-character-app-password
MAIL_TO=your-email@gmail.com
```

The visitor's message is stored in MongoDB and forwarded to `MAIL_TO`.

## Images

Put the downloaded assets in:

`frontend/public/images/`

See `frontend/public/images/README.md` for the exact filenames expected by the UI.

## Important

Do not commit `.env` files or SMTP credentials.
