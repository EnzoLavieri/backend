import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DistintivoModule } from './modules/distintivo/distintivo.module';
import { EspecialidadeModule } from './modules/especialidade/especialidade.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { ItemModule } from './modules/item/item.module';
import { AuthModule } from './auth/auth.module';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://devenzolavieri:39DH4WaDq313Eii1@inventorycluster.pnfmaae.mongodb.net/?retryWrites=true&w=majority&appName=InventoryCluster',
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
