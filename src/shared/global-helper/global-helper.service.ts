import { Injectable } from '@nestjs/common';

@Injectable()
export class GlobalHelperService {
    globalFunction(): string{
        return 'use global function';
    }
}
