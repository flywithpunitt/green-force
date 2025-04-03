const express = require('express');
const router = express.Router();

// Store subscribed emails (in memory for development)
const subscribers = new Set();

// Newsletter subscription endpoint
router.post('/subscribe', (req, res) => {
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

module.exports = router; 