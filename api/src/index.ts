import express from 'express';
import mongoose from 'mongoose';



mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    const PORT = '3001';
    console.log('🚀 Connected to mongo');

    app.listen(PORT, () => console.log(`🚀 Server started at http://localhost:${PORT}`));
  })
  .catch(() => console.log('❌ Failed when connecting to mongo'));


