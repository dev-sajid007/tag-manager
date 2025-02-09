import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  url: { type: String, required: true },  // URL or file path of the image
  type: { type: String, enum: ['front', 'back'], required: true },  // Type of the image (front or back)
}, { timestamps: true });

export const Image = mongoose.model('Image', imageSchema);

