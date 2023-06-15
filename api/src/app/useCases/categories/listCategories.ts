import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function listCategories(request: Request, response: Response) {
  try {
    const categories = await Category.find();

    response.status(201).json(categories);
  } catch {
    response.status(500);
  }
}
