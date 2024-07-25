import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DistintivoModule } from './modules/distintivo/distintivo.module';
import { EspecialidadeModule } from './modules/especialidade/especialidade.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { ItemModule } from './modules/item/item.module';

@Module({
  imports: [
    MongooseModule
      .forRoot
      //link do seu mongodb kk
      (),

    DistintivoModule,
    EspecialidadeModule,
    UsuarioModule,
    ItemModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
