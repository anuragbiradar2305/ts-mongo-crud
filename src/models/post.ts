import mongoose, { Schema, Document } from 'mongoose';

// Interface for the Post model
export interface IPost extends Document {
  title: string;
  content: string;
  author: string;
  createdAt: Date;
}

// Mongoose Schema for Post
const postSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

// Post Model
export const Post = mongoose.model<IPost>('Post', postSchema);
