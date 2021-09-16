# FCamara Hackathon Season 2 2021 (Squad28)

### BackEnd criado por: Matheus Alves Freitas

### FrontEnd criado pro: Samuel Menecucci Moraes

------
para iniciar o projeto é necessário que o Docker esteja instalado na máquina, a seguir estará um link mostrando o passo a passo para instalar o docker na máquina: [Instalação Docker](https://docs.docker.com/desktop/windows/install/)

Como executar o projeto:

  >1° entre na pasta do projeto clonado pelo powershell <br/>
  >2° digite: "docker-compose build" e espere até o docker completar a ação <br/>
  >3° digite: "docker-compose up" e espere até que o docker retorne o email e a senha para teste

Dados do usuário de teste do database:

  >email: matheusfreitas@fcamara.com.br <br/>
  >senha: testesenha

-----
## Informações do BackEnd

Rotas disponivéis para Appointments:
<ul>
  GET: <br/>
  <ul>
     /appointments <br/> 
     /appointments/user <br/>
  </ul>
</ul>
<ul>
  POST: <br/>
  <ul>
    /appointments
  </ul>
</ul>
<ul>
  DELETE: <br/>
  <ul>
    /appointments
  </ul>
</ul>

Rota disponível para Session:
<ul>
  POST: <br/>
  <ul>
    /sessions
  </ul>
</ul>

Rota disponível para User:
<ul>
  POST:<br/>
  <ul>
    /users
  </ul>
</ul>

> informações mais detalhadas pode ser encontrada na documentação [Postman](https://documenter.getpostman.com/view/17479822/U16opj7N)