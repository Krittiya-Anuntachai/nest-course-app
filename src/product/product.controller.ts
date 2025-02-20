import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly UtilityService: UtilityService,
    private readonly globalHelperService:GlobalHelperService
  ) {}

  @Get()
  productFunction() {
    return this.productService.productFunction();
  }

  @Get('/productJson')
  productjson() {
    return this.productService.productjson();
  }

  @Get('/shared')
  shareFunction() {
    return this.UtilityService.shareFunction();
}

@Get('/global')
  globalFunction() {
    return this.globalHelperService.globalFunction();
  }
}