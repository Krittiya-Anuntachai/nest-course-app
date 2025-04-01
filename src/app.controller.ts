import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  showInformation(): string {
    return this.appService.showInformation();
  }

  @Get('/myJSON')
  myJSON() {
    return this.appService.myJSON();
  }

  @Get('/GitHub')
  GitHub() {
    return this.appService.GitHub();
  }

  @Get('/usepostman')
  usepostman() {
    return this.appService.usepostman();
  }

  @Get('/showjson')
  showjson() {
    return this.appService.showjson();
  }
}
