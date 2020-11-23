const http = require('http');
const HeroFactory = require('./factories/heroFactory');
const heroService = HeroFactory.generateInstance();
const Hero =  require('./entities/hero');

//Porta da aplicacao
const PORT =  3000;

//definindo para que a api retorne sempre JSON 
const DEFAULT_HEADER = {'Content-Type': 'application/json'}

//rotas da aplicacao
const routes = {
  '/heroes:get': async (request, response) => {
    const { id } = request.queryString;
    
    const heroes =  await heroService.find(id);
    response.write(JSON.stringify({results: heroes }));
    response.end();
  },
  '/heroes:post': async (request, response) => {
    //async iterator
    for await (const data of request) {

      try {
        //await Promise.reject('/heroes:get');
        const item = JSON.parse(data);
        const hero = new Hero(item);
        const { error, valid } = hero.isValid();
        if (!valid) {
          response.writeHead(400, DEFAULT_HEADER);
          response.write(JSON.stringify({error: error.join(',') }))
        }
  
        const id = await heroService.create(hero);
        response.writeHead(201, DEFAULT_HEADER);
        response.write(JSON.stringify({ success: 'User created with success!!', id}))
  
        
        /* 
        so jogamos o return aqui pois sabemos que e um objeto body por requisicao 
        se fosse um arquivo, que sobe sob demanda, ele poderia entrar mais vezes 
        em um mesmo evento,ai removeriamos o return.
        */
        return response.end();
      } catch (error) {
        return handleError(response)(error)
      }
    }
  },
  default: (request, response) => {
    response.write('HELLO!');
    response.end();
  }
}

//Closure (funcao que retorna outra funcao) para minupular erros nas rotas
const handleError = response => {
  return error => {
    console.error('Error: ', error);
    response.writeHead(500, DEFAULT_HEADER);
    response.write(JSON.stringify({ error: 'Internal server error!!'}))

    return response.end()
  }
}


//funcao para manipular o servidor
const handler = (request, response) => {
  const { url, method } = request;
  const [first, route, id] = url.split('/');

  //tratando o retorno da id
  request.queryString = { id: isNaN(id) ? id : Number(id)}

  //trazendo a rota a partir de uma chave
  const key = `/${route}:${method.toLowerCase()}`

  //Definindo retorno de resposta 200 e JSON quando nao houver erro na request
  response.writeHead(200, DEFAULT_HEADER);

  //tratamento das rotas
  const chosen = routes[key] || routes.default;
  return chosen(request, response).catch(handleError(response));
}

//criando o servidor
http.createServer(handler).listen(PORT, () => 
  console.log('server running at', PORT)
)