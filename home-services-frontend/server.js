const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for the frontend
app.use(cors());

// Parse JSON bodies
app.use(bodyParser.json());

// Store subscribed emails (in memory for development)
const subscribers = new Set();

// Newsletter subscription endpoint
app.post('/api/newsletter/subscribe', (req, res) => {
  const { email } = req.body;

  // Basic email validation
  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  // Check if already subscribed
  if (subscribers.has(email)) {
    return res.status(400).json({ message: 'Email already subscribed' });
  }

  // Add to subscribers
  subscribers.add(email);
  console.log(`New subscriber: ${email}`);
  console.log(`Total subscribers: ${subscribers.size}`);

  res.status(200).json({ message: 'Successfully subscribed to newsletter' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 