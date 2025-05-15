const heading = document.createElement("h1");

const car = {
    name : 'Toyota',
    color: 'Black',
    speed : {
        fuelConsumption : '20litre',
        horsePower: '90000hp',
        maxSpeed: '240km/h',
    }
}
console.table(car)

console.log(heading);
console.log(car.color);
console.log(car.speed.fuelConsumption);

for(let prop in car){
    console.log(prop);
    if(prop === 'speed'){
        for(let spdProp in car[prop]){
            console.log(spdProp);
        }
    }
}

// Complete address of File
const currentPos = window.location.href;

// Checking Domain Name
const PosDomain = window.location.hostname;

// Checking Path of our website
const PosPath = window.location.pathname;

// Checking protocol what our web page used
const PosProtocol = window.location.protocol;

// Checking #value in our page
const PosHash = window.location.hash;

// Checking port value of URL
const PosPort = window.location.port;

console.log(currentPos)
console.log(PosDomain)
console.log(PosProtocol)
console.log(PosPath)
console.log(PosHash)
console.log(PosPort)

const newURL = `${PosProtocol}//localHost:5500${PosPath}`

if(PosHash){
    window.location.replace('http://127.0.0.1:5500/window.html','https://www.youtube.com');
}
history.back();
history.forward();

const reference = document.referrer;

console.log(newURL);
console.log(reference);

// Filling the window with content
function goTo() {
    window.open('https://www.google.com','_self');
    console.log("I am targeted")
}
