import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DistintivoService } from './distintivo.service';
import { DistintivoController } from './distintivo.controller';
import { Distintivo, DistintivoSchema } from './distintivo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Distintivo.name, schema: DistintivoSchema },
    ]),
  ],
  controllers: [DistintivoController],
  providers: [DistintivoService],
})
export class DistintivoModule {}
