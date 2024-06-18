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

function taxCalculation(options: TaxCalculationOptions): [number, number] {
    let total = 0;

    options.products.forEach( ({ price }) => {
        total += price
    });

    return [total, total * tax]
}

const shoppingCart = [phone, notebook];
const tax = 0.15;

const [ total, totalTax] = taxCalculation({
    products: shoppingCart,
    tax: tax
})

console.log('Total ', total);
console.log('Tax', totalTax);



export {}