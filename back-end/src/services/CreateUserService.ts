import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';
import User from '../entities/users/User';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

//serviço para criar usuario
class CreateUserService {
  async execute({ name, email, password }: IRequest): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    //verifica se o email ja está no banco de dados
    if (checkUserExists) {
      throw new AppError('Email address already used');
    }

    //criptografa a senha
    const hashedPassword = await hash(password, 8);

    //cria o usuario
    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    //salva o usuario
    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
