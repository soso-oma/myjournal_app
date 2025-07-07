import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import path from 'path';
import { fileURLToPath } from 'url';
import User from './models/user.js';
import Entry from './models/entry.js';

dotenv.config();
const app = express();
const port = 4000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// MongoDB Connection 
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ MongoDB Error:', err));

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'process.env.MONGO_URI',
  resave: false,
  saveUninitialized: false
}));

function isLoggedIn(req, res, next) {
  if (req.session.userId) return next();
  res.redirect('/');
}

// Routes

// Home
app.get('/', (req, res) => {
  res.render('index');
});

// Register
app.get('/register', (req, res) => {
  res.render('register', { message: '' });
});

app.post('/register', async (req, res) => {
  const { username, email, password, question, customQuestion, answer } = req.body;
  const finalQuestion = question === 'custom' ? customQuestion : question;
  const hashed = await bcrypt.hash(password, 10);

  try {
    await User.create({
      username,
      email,
      password: hashed,
      securityQuestion: finalQuestion,
      securityAnswer: answer
    });
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.render('register', { message: 'Username already exists' });
  }
});

// Login
app.get('/login', (req, res) => {
  res.render('login', { message: '' });
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (user && await bcrypt.compare(password, user.password)) {
    req.session.userId = user._id;
    res.redirect('/dashboard');
  } else {
    res.render('login', { message: 'Invalid credentials' });
  }
});

// Dashboard
app.get('/dashboard', isLoggedIn, async (req, res) => {
  const entries = await Entry.find({ userId: req.session.userId }).sort({ date: -1 });
  const user = await User.findById(req.session.userId);
  res.render('dashboard', { entries, user });
});

// Compose
app.get('/compose', isLoggedIn, (req, res) => {
  res.render('compose');
});

app.post('/compose', isLoggedIn, async (req, res) => {
  const { title, content } = req.body;
  await Entry.create({ userId: req.session.userId, title, content, date: new Date() });
  res.redirect('/dashboard');
});

// Edit Entry
app.get('/edit/:id', isLoggedIn, async (req, res) => {
  try {
    const entry = await Entry.findById(req.params.id);
    if (!entry || entry.userId.toString() !== req.session.userId) {
      return res.redirect('/dashboard');
    }
    res.render('edit-entry', { entry });
  } catch (err) {
    console.error(err);
    res.redirect('/dashboard');
  }
});

// Edit Entry 
app.post('/edit/:id', isLoggedIn, async (req, res) => {
  const { title, content } = req.body;
  try {
    const entry = await Entry.findById(req.params.id);
    if (!entry || entry.userId.toString() !== req.session.userId) {
      return res.redirect('/dashboard');
    }
    entry.title = title;
    entry.content = content;
    await entry.save();
    res.redirect('/dashboard');
  } catch (err) {
    console.error(err);
    res.redirect('/dashboard');
  }
});

// Delete Entry
app.post('/delete/:id', isLoggedIn, async (req, res) => {
  try {
    await Entry.findByIdAndDelete(req.params.id);
    res.redirect('/dashboard');
  } catch (err) {
    console.error(err);
    res.redirect('/dashboard');
  }
});

// Edit Account
app.get('/edit-account', isLoggedIn, async (req, res) => {
  const user = await User.findById(req.session.userId);
  res.render('edit-account', { user, message: '' });
});

app.post('/edit-account', isLoggedIn, async (req, res) => {
  const { newUsername, newEmail, newPassword, newQuestion, customQuestion, newAnswer } = req.body;
  try {
    const user = await User.findById(req.session.userId);
    const updateData = {
      username: newUsername || user.username,
      email: newEmail || user.email,
      securityQuestion: newQuestion === 'custom' ? customQuestion : newQuestion,
      securityAnswer: newAnswer || user.securityAnswer
    };

    if (newPassword && newPassword.trim() !== '') {
      const hashed = await bcrypt.hash(newPassword, 10);
      updateData.password = hashed;
    }

    await User.findByIdAndUpdate(req.session.userId, updateData);
    const updatedUser = await User.findById(req.session.userId);
    res.render('edit-account', { user: updatedUser, message: 'Account updated successfully!' });
  } catch (err) {
    console.error(err);
    const user = await User.findById(req.session.userId);
    res.render('edit-account', { user, message: 'Error updating account.' });
  }
});

// Delete Account
app.post('/delete-account', isLoggedIn, async (req, res) => {
  try {
    await Entry.deleteMany({ userId: req.session.userId });
    await User.findByIdAndDelete(req.session.userId);
    req.session.destroy();
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.redirect('/dashboard');
  }
});

// Forgot Password
app.get('/forgot-password', (req, res) => {
  res.render('forgot-password', { message: '', showQuestion: false, user: null });
});

app.post('/forgot-password', async (req, res) => {
  const { username, answer, newPassword } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    return res.render('forgot-password', { message: 'User not found', showQuestion: false, user: null });
  }

  if (!answer) {
    return res.render('forgot-password', { message: '', showQuestion: true, user });
  }

  if (answer === user.securityAnswer) {
    const hashed = await bcrypt.hash(newPassword, 10);
    await User.findByIdAndUpdate(user._id, { password: hashed });
    return res.render('login', { message: 'Password reset successful. Please login.' });
  } else {
    return res.render('forgot-password', { message: 'Incorrect answer', showQuestion: true, user });
  }
});

// Logout
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

// Start Server
app.listen(port, () => {
  console.log (`listening on port ${port}`);
});
