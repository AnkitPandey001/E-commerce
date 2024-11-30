import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  addresses: {
    type: [{
      street: { type: String, default: null },
      city: { type: String, default: null },
      state: { type: String, default: null },
      zip: { type: String, default: null },
      country: { type: String, default: null }
    }],
    default: []
  },
  role: {
    type: [String],
    enum: ['customer', 'seller'],
    default: ['customer'] 
  },
  cart: {
    type: [{
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    }],
    default: []
  },
  wishlist: {
    type: [{
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }
    }],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);
export default User;

