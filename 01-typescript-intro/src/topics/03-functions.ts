function addNumbers(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

const arrowAddNumbers = (a: number, b: number) => {
    return a + b;
}

function multiply(first: number, second?: number, base: number = 2) {
    return first * base;
}

interface Character {
    name: string;
    hp: number;
    showHp: () => void; // definição de função em interface
}

// const resultado: number = addNumbers(2, 5)
// const resultado2: number = arrowAddNumbers(8, 5)
// const multiplyResult: number = multiply(5, 5, 2);

// console.log('arrowAddNumbers')
// console.log(arrowAddNumbers(5, 5));
// console.log('addNumbers');
// console.log({resultado, resultado2});

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Pontos de vida ${ this.hp }`);
        
    }
}

strider.showHp()

console.log("curando");

healCharacter(strider, 30)

strider.showHp()



export {}