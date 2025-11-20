const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory storage for contact messages
const messages = [];

// Routes
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  messages.push({ name, email, message, date: new Date() });
  console.log('New Contact Message:', { name, email, message });

  return res.json({ success: true, message: 'Message received successfully!' });
});

app.get('/messages', (req, res) => {
  res.json(messages);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
