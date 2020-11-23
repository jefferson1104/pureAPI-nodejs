const HeroRepository = require('./../repositories/heroRepository');
const HeroService = require('./../services/heroService');

//diretorio do arquivo que simula o banco de dados
const { join } =  require('path');
const filename = join(__dirname, '../../database', 'data.json');

//instanciando repository e service
const generateInstance = () => {
  const heroRepository = new HeroRepository({
    file: filename
  });

  const heroService = new HeroService({
    heroRepository
  });

  return heroService;
}

module.exports = { generateInstance }