// forEach loop

const numbers = [1,2,3,4,5,6,7,8,9,10];

// numbers.forEach(function (number) {
//     console.log(number);
// })

// numbers.forEach(number => console.log(number));

numbers.forEach( number => {
    console.log(number * 2);
})

const socials = ['Twitter', 'Facebook', 'Instagram', 'Tiktok'];

socials.forEach(social => {
    console.log(social);
})

const carts = [
    {
        name : 'Product One',
        price : 150,
    },
    {
        name : 'Product Two',
        price : 150,
    },
    {
        name : 'Product Three',
        price: 200,
    }
];

carts.forEach(product => console.log(product));

// Filter
const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);

const companies = [
    {name: 'Company One', category : 'Finance', start: 1981, finish: 2004},
    {name: 'Company Two', category : 'Retail', start: 1992, finish: 2008},
    {name: 'Company Three', category : 'Auto', start: 1999, finish: 2007},
    {name: 'Company Four', category : 'Retail', start: 1989, finish: 2010},
    {name: 'Company Five', category : 'Technology', start: 2009, finish: 2014},
    {name: 'Company Six', category : 'Finance', start: 1987, finish: 2010},
    {name: 'Company Seven', category : 'Auto', start: 1986, finish: 1996},
    {name: 'Company Eight', category : 'Technology', start: 2011, finish: 2016},
    {name: 'Company Nine', category : 'Retail', start: 1981, finish: 1989},
];

// Get companies with category of Technology
const techCompanies = companies.filter(company => company.category === 'Technology')

console.log(techCompanies);

// Companies work from 1980 to 2005

const longCompanies = companies.filter(company => company.start >= 1980 && company.finish <= 2005);

console.log(longCompanies)

// Companies that lasted 10 years or more

let companyname = companies.filter(company=> company.finish - company.start >= 10)
console.log(companyname)


// Map
const double = numbers.map(number => number*2);

const sqrtNum = numbers.map(number => Math.sqrt(number).toFixed(2));

// Chaining on map
const sqrtAndDouble = numbers
.map(number => Math.sqrt(number).toFixed(2))
.map(sqrt => sqrt * 2);

// Chaining on different methods
const evenAndDouble = numbers
.filter(number => number % 2 === 0)
.map(even => even * 2);

// Reduce Method
const total = numbers.reduce((accumolator,number) => accumolator + number,0);

const totalPrice = carts.reduce((acc,item) => acc + item.price,0);

console.log(total);
console.log(totalPrice);