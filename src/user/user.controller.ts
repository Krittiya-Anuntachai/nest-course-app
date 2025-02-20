import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly UserService: UserService,
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
