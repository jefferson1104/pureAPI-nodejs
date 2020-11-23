class Hero {
  constructor({ id, name, age, power}) {
    this.id = Math.floor(Math.random() * 100) + Date.now()
    this.name = name
    this.age = age
    this.power = power
  }

  //metodo validacao
  isValid() {
    const propertyNames = Object.getOwnPropertyNames(this);
    const amountInvalid = propertyNames
      .map(property => (!!this[property]) ? null : `${property} is missing!`)
      .filter(item => !!item)
    
    return {
      valid: amountInvalid.length === 0,
      error: amountInvalid
    }
  }

}

module.exports =  Hero;


//testando entities em '$ node src/entities.js'
/*
const hero =  new Hero({name: 'Batman', age: 40, power: "SuperForce"});
console.log('valid', hero.isValid());
console.log('valid', hero);
*/