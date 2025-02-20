import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { UtilityModule } from 'src/shared/utility/utility.module';

@Module({
  providers: [OrderService],
  imports: [UtilityModule],
  controllers: [OrderController],
})
export class OrderModule {}
