import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DistintivoModule } from './modules/distintivo/distintivo.module';
import { EspecialidadeModule } from './modules/especialidade/especialidade.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { ItemModule } from './modules/item/item.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
    ),

    DistintivoModule,
    EspecialidadeModule,
    UsuarioModule,
    ItemModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
