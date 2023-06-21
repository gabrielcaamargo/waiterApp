import express from 'express';
import mongoose from 'mongoose';
import path from 'node:path';

import { router } from './router';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();
    const PORT = '3001';

    app.use(express.json());
    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');
      next();
    });
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(router);

    app.listen(PORT, () => console.log(`🚀 Server started at http://localhost:${PORT}`));
  })
  .catch(() => console.log('❌ Failed when connecting to mongo'));


