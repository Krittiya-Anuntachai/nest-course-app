import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  productFunction() {
    return 'we use product service';
  }

  productjson() {
    return {
      name: 'Krittiya',
      age: 19,
      hobby: 'Sleeppp',
    };
  }
}
