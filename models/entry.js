// models/Entry.js
import mongoose from 'mongoose';

const entrySchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  title: String,
  content: String,
  date: { type: Date, default: Date.now }
});

export default mongoose.model('Entry', entrySchema);
