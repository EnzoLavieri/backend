import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../modules/usuario/usuario.service';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {}

  async signIn(nomeUsuario: string, pass: string) {
    const user = await this.usuarioService.findOne(nomeUsuario);
    if (user?.senha !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { nomeUsuario: user.nomeUsuario, sub: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
