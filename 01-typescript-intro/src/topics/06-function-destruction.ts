interface Product {
    descption: string;
    price: number;
}

const phone: Product = {
    descption: 'Nokia A1',
    price: 150.0
}

const notebook: Product = {
    descption: 'Lenovo Idea Pad 320',
    price: 3150.0
}

interface TaxCalculationOptions {
    tax: number,
    products: Product[];
}

function taxCalculation(options: TaxCalculationOptions): number[] {
    let total = 0;

    options.products.forEach( product => {
        total += product.price
    });

    return [total, total * options.tax]
}

const shoppingCart = [phone, notebook];
const tax = 0.15;

const result = taxCalculation({
    products: shoppingCart,
    tax: tax
})

console.log('Total ', result[0]);
console.log('Tax', result[1]);



export {}