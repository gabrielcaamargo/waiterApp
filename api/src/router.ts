import { Router } from 'express';
import { listCategories } from './app/useCases/categories/listCategories';

export const router = Router();

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', (request, response) => {
  response.send('ok');
});

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
