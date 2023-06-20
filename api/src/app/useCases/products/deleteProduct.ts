import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function deleteProduct(request: Request, response: Response) {
  try {
    const { productId } = request.params;

    await Product.findByIdAndDelete(productId);

    response.status(201);
  } catch {
    response.status(500);
  }
}
