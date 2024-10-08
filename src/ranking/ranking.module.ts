import { Module } from '@nestjs/common';
import { RankingService } from './ranking.service';
import { RankingController } from './ranking.controller';

@Module({
  providers: [RankingService],
  exports: [RankingService],
  controllers: [RankingController],
})
export class RankingModule {}
