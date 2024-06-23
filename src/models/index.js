import mongoose from 'mongoose';
import { nanoid } from 'nanoid';

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  imageURL: {
    type:Object,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
  userID: {
    type: String,
    required: false,
  },
  id: {
    type: String,
    default: nanoid(),
    unique: true,
  }
}, { timestamps: true });

const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);

export default Post;
