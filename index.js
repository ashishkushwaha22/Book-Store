const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authorRoutes = require('./routes/authorRoutes');
const bookRoutes = require('./routes/bookRoutes');
const swaggerUI = require('swagger-ui-express')
const swaggerDoc = require('./ApiDocumentation/swagger.json')
const swaggerFile = require('./swagger-output.json')

const app = express();
const PORT = 3000;

// MongoDB connection: Using MongoDB Atlas
mongoose.connect('mongodb+srv://ashishkush1122:Rmq7fshMJWf6pivU@cluster0.xjqt49y.mongodb.net/cupboard', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Body parser middleware
app.use(bodyParser.json());

// Routes
app.use('/authors', authorRoutes); // 5. Import Route and redirect 
app.use('/books', bookRoutes); // 10. Import Route and redirect 

// Custom written api docs
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

// auto generated api docs
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerFile));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});