import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import AppError from '../errors/AppError';
import authConfig from '../config/auth';
import User from '../entities/users/User';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email } });

    // verifica se o usuario é igual ao do database
    if (!user) {
      throw new AppError('Incorrect email/password combination.', 401);
    }
    const passwordMatch = await compare(password, user.password);

    //verifica se a senha combina com a do database
    if (!passwordMatch) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    //cria o token
    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    //retorna o usuario mais o JWT
    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
