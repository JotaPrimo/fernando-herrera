interface SuperHero {
    name: string;
    age: number;
    address: Address,    
    showAddress(): string;
}

interface Address {
    calle: string;
    pais: string;
    ciudad: string;
}

const superHero: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais + ', ' + this.address.calle;
    }    
}

const address = superHero.showAddress();
console.log(address);

export {};
