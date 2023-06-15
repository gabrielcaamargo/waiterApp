import { Router } from 'express';

import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';

export const router = Router();

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);

// List products
router.get('/products', (request, response) => {
  response.send('ok');
});

// Create product
router.post('/products', (request, response) => {
  response.send('ok');
});

// Get products by category
router.get('/products/:categoryId/products', (request, response) => {
  response.send('ok');
});

// List orders
router.get('/orders', (request, response) => {
  response.send('ok');
});

// Create order
router.post('/orders', (request, response) => {
  response.send('ok');
});

// Change order
router.patch('/orders/:orderId', (request, response) => {
  response.send('ok');
});

// Delete Order
router.delete('/orders/:orderId', (request, response) => {
  response.send('ok');
});
