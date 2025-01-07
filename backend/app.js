const express = require('express');
const app = express();
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const { sequelize } = require('./src/models');

// Kết nối cơ sở dữ liệu
sequelize.authenticate()
  .then(() => console.log('Database connected successfully!'))
  .catch(err => console.error('Unable to connect to the database:', err));

// Middleware
app.use(express.json());
app.use(logger('dev')); 
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.set('views', path.join(__dirname, 'views')); // Thư mục chứa các view
app.set('view engine', 'jade'); // Sử dụng Jade (Pug) làm view engine

// Import routes
const userRouter = require('./src/routes/user');
app.use('/users', userRouter);

