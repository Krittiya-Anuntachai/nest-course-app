import { Controller, Get } from '@nestjs/common';
import { OrderService } from './order.service';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';


@Controller('order')
export class OrderController {
  constructor(
    private readonly OrderService: OrderService,
    private readonly UtilityService: UtilityService,
    private readonly globalHelperService:GlobalHelperService
      ) {}

  @Get('/shared')
  shareFunction(): string {
    return this.UtilityService.shareFunction();
  }

  @Get('/global')
  globalFunction() {
    return this.globalHelperService.globalFunction();
}
}
