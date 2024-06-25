// export é para transformar em modulo
// tudo fora deste arquivo é mundo externo

import { Product, taxCalculation } from './06-function-destruction';

const shoppingCart: Product[] = [
    {
        description: "Nokia",
        price: 150
    },

    {
        description: "Dell Inserie",
        price: 3548
    }
];

// tax = 0.15
const [total, tax] = taxCalculation({});


console.log('Total', total);
console.log('Tax', tax);


