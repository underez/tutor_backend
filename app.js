require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); // เพิ่มส่วนนี้
const sequelize = require('./config/database');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Routes
const teacherRoutes = require('./api/teachers/routes');
const timetableRoutes = require('./api/timetables/routes');
const memberRoutes = require('./api/members/routes');
const sendEmailController = require('./api/send-email/routes');

app.use('/api/teachers', teacherRoutes);
app.use('/api/timetables', timetableRoutes);
app.use('/api/members', memberRoutes);
app.use('/api/send-email', sendEmailController); // เพิ่มส่วนนี้


// Database connection
sequelize
  .sync({ force: false }) // Set force to true to drop existing tables
  .then(() => {
    console.log('Tables created successfully');
    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Unable to sync database:', err);
  });