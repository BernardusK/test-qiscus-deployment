const express = require('express');
const dotenv = require('dotenv');

// Load env vars
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Webhook endpoint
app.post('/webhook/qiscus/test', (req, res) => {
  console.log('Received Qiscus webhook:');
  console.log(JSON.stringify(req.body, null, 2));
  res.status(200).send('Webhook received');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});