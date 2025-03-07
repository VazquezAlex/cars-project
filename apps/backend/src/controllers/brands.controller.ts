import { Request, Response } from 'express';
import BrandsService from '../services/brands.service';

class BrandsController {
  static async getAllBrands(req: Request, res: Response) {
    try {
      const brands = await BrandsService.getAllBrands();
      res.status(200).json(brands);
    } catch (err) {
      res.status(500).json({
        message: 'An error occurred while fetching the list of brands.',
        error: err,
      });
    }
  }
}

export default BrandsController;
