import { Controller, Get } from '@nestjs/common';
import { ChatService } from './chat.service';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';


@Controller('chat')
export class ChatController {
  constructor(
    private readonly ChatService: ChatService,
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
