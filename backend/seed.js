const seedDB = async () => {
  try {
    // Try local MongoDB directly so seeding always succeeds locally
    const connUri = 'mongodb://127.0.0.1:27017/divacandle';
    await mongoose.connect(connUri);
    
    await Product.deleteMany({});
    await Product.insertMany(sampleCandles);
    
    console.log('✅ Sample candles inserted into local MongoDB successfully!');
    process.exit();
  } catch (err) {
    console.error('❌ Seeding failed:', err.message);
    process.exit(1);
  }
};