import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function listOrders(request: Request, response: Response) {
  try {
    const orders = await Order.find()
      .sort({ createdAt: 1 })
      .populate('products.product');

    response.status(201).json(orders);
  } catch {
    response.status(500);
  }
}
