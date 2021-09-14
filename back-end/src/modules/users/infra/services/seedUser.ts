import CreateUserService from './CreateUserService';

async function asyncSeed() {
  try {
    const createUser = new CreateUserService();
    await createUser.execute({
      name: 'Matheus Alves Freitas',
      email: 'matheusfreitas@fcamara.com.br',
      password: 'testesenha',
    });
    console.log('Seed Account Created');
  } catch (error) {
    console.log('Seed Account already in database');
  }
  console.log('email: matheusfreitas@fcamara.com.br');
  console.log('password: "testesenha"');
}

export default asyncSeed;
