import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function listProducts(request: Request, response: Response) {
  try {
    const products = await Product.find();

    response.status(201).json(products);
  } catch {
    response.status(500);
  }
}
