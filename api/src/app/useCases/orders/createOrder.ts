import { Request, Response } from 'express';

import { Order } from '../../models/Order';
import { io } from '../../..';

export async function createOrder(request: Request, response: Response) {
  try {
    const { table, products } = request.body;

    const order = await Order.create({ table, products });
    const orderDetails = await order.populate('products.product');

    io.emit('order@new', orderDetails);
    await order.save();
    response.status(201).json(order);
  } catch {
    response.status(500);
  }
}
