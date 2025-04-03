const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const waitlistRoutes = require('./routes/waitlist');
const bodyParser = require('body-parser');
const newsletterRoutes = require('./routes/newsletter');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://puneetpunia7982:jdfhekdfjghe345349@cluster0.kma37.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/waitlist', waitlistRoutes);
app.use('/api/newsletter', newsletterRoutes);

// Store subscribed emails (in memory for development)
const subscribers = new Set();

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        message: 'Please fill in all required fields' 
      });
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // For now, we'll just log it
    console.log('New contact form submission:', {
      name,
      email,
      phone,
      subject,
      message,
      timestamp: new Date()
    });

    res.status(200).json({ 
      message: 'Thank you for your message. We will get back to you soon!' 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      message: 'Failed to send message. Please try again later.' 
    });
  }
});

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 