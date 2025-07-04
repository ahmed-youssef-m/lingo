import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  id:{
    type:String
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export default model('User', userSchema);
