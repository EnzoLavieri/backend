import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EspecialidadeService } from './especialidade.service';
import { EspecialidadeController } from './especialidade.controller';
import { Especialidade, EspecialidadeSchema } from './especialidade.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Especialidade.name, schema: EspecialidadeSchema },
    ]),
  ],
  controllers: [EspecialidadeController],
  providers: [EspecialidadeService],
})
export class EspecialidadeModule {}
