//heroRepository.js reponsavel por manipular os dados do nosso banco de dados.
const { readFile, writeFile } = require('fs/promises');

class HeroRepository {
  constructor({ file }) {
    this.file = file;
  }

  //ler o arquivo do banco de dados.
  async _currentFileContent() {
    return JSON.parse(await readFile(this.file));
  }

  //Acesso a dados do arquivo e fazendo filtros de busca.
  async find(itemId) {
    const all = await this._currentFileContent();
    if(!itemId) return all;

    return all.find(({ id }) => itemId === id)

  }

  //Criando dados
  async create(data) {
    const currentFile =  await this._currentFileContent();
    currentFile.push(data);

    await writeFile(this.file, JSON.stringify(currentFile));
    return data.id;
  }
}

module.exports = HeroRepository;



const heroRepository = new HeroRepository({file: './../../database/data.json'});


//TESTANDO O METODO FIND
//heroRepository.find().then(console.log).catch(error => console.log('Error: ', error));

//TESTANDO O MOETODO CREATE
//heroRepository.create({id: 2, name: 'Chapolin',}).then(console.log).catch(error => console.log("Error: ", error));