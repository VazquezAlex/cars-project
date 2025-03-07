import { brands } from '../data/brands.data';

class BrandsService {
  static async getAllBrands() {
    return brands;
  }
}

export default BrandsService;
