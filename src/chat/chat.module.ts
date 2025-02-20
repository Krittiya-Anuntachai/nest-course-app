import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { UtilityModule } from 'src/shared/utility/utility.module';

@Module({
  providers: [ChatService],
  imports: [UtilityModule],
  controllers: [ChatController],
})
export class ChatModule {}
