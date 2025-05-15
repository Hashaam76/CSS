// Creating h1 and set its attributes
const heading = document.createElement('h1');
const headingText = document.createTextNode('Objects');
heading.setAttribute('class', 'main-heading');
heading.appendChild(headingText);
document.body.appendChild(heading);

// Object
const screen1 = {
    size: '14inch',
    body: 'Plastic',
    type: 'LCD',
    price: 11000,
    calcPrice: function (disc){
        let discount = this.price * disc;
        let discPrice = this.price - discount;
        return discPrice;
    },
};
const screen2 = {
    size: '32inch',
    body: 'Plastic',
    type: 'LED',
    price: 25000,
    calcPrice: function (disc){
        let discount = this.price * disc;
        let discPrice = this.price - discount;
        return discPrice;
    }
};

console.table(screen);
console.log(screen.body)
console.log(screen2.type)
console.log(screen2.calcPrice(0.10));

// Constructor with its method
function screen(size,body,type,price){
    this.size = size;
    this.body = body;
    this.type = type;
    this.price = price;
    this.calcPrice = function (disc){
        let discount = this.price * disc;
        let discPrice = this.price - discount;
        return discPrice;
    }
}

const screen3 = new screen('18inch', 'Metal', 'LCD', 18000)
console.log(screen3);
console.log(`I have bought ${screen3.type} of size ${screen3.size} in just ${screen3.calcPrice(0.2)}Rs.`);
