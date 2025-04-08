const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const Waitlist = require('../models/Waitlist');

// Contact form submission
router.post('/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ message: 'Error submitting contact form' });
  }
});

// Waitlist signup
router.post('/waitlist', async (req, res) => {
  try {
    const waitlist = new Waitlist(req.body);
    await waitlist.save();
    res.status(201).json({ message: 'Waitlist signup successful' });
  } catch (error) {
    console.error('Error saving waitlist:', error);
    res.status(500).json({ message: 'Error signing up for waitlist' });
  }
});

module.exports = router; 