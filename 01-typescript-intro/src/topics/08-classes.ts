// estáé a recomendação para criação de classe

export class Person {
       constructor(
        public name: string, 
        private address: string = 'No Address') {}
}


const ironman = new Person('Jota Santos');
console.log(ironman);
