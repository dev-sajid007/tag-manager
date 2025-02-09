import mongoose from 'mongoose';
 // Import the Image model

const tagSchema = new mongoose.Schema({
  name: { type: String, required: true },  // Name of the tag
  images: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Image' }]  // Array of references to Image model
}, { timestamps: true });

export const Tag = mongoose.model('Tag', tagSchema);

