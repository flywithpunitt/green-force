const express = require('express');
const router = express.Router();
const Waitlist = require('../models/Waitlist');

// POST /api/waitlist - Add new waitlist entry
router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body;

    // Check if email already exists
    const existingEntry = await Waitlist.findOne({ email });
    if (existingEntry) {
      return res.status(400).json({ message: 'This email is already on the waitlist' });
    }

    // Create new waitlist entry
    const waitlistEntry = new Waitlist({
      name,
      email
    });

    await waitlistEntry.save();

    res.status(201).json({ message: 'Successfully joined the waitlist' });
  } catch (error) {
    console.error('Waitlist submission error:', error);
    res.status(500).json({ message: 'Error joining waitlist' });
  }
});

module.exports = router; 