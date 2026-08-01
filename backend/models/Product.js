import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discountPercentage: { type: Number, default: 0 },
    specialOffer: { type: String, default: '' },
    stock: { type: Number, required: true, default: 0 },
    category: { type: String, default: 'Scented' },
    image: { type: String, required: true }
  },
  { 
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

productSchema.virtual('discountedPrice').get(function () {
  if (this.discountPercentage > 0) {
    return Number((this.price - (this.price * (this.discountPercentage / 100))).toFixed(2));
  }
  return this.price;
});

export default mongoose.model('Product', productSchema);