const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./App/config/db');

connectDB();

const PORT = process.env.PORT || 3000;
// json parser
app.use(express.json());

// routes
app.use('/api/v1/auth', require('./App/routes/auth'));
app.use('/api/v1/comment', require('./App/routes/comments'));


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
