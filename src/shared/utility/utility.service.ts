import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilityService {
  shareFunction() {
    return 'use utility shared module';
  }
}
