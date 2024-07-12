import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DistintivoModule } from './modules/distintivo/distintivo.module';
import { EspecialidadeModule } from './modules/especialidade/especialidade.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { ItemModule } from './modules/item/item.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/GEVC'), // substitua com a URL do seu MongoDB
    DistintivoModule,
    EspecialidadeModule,
    UsuarioModule,
    ItemModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
