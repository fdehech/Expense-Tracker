const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const TransactionRoutes = require('./routes/TransactionRoutes');
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/transactions', TransactionRoutes);

app.get('/api', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

