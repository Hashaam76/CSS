let x= 100;
let y = 50;

function sum(n1,n2){
    let sum;
    sum = n1 + n2;

    return sum;
}

const sum1 = sum(x,y);
const sum2 = sum(10,5);

// LIFO

function first(){
    second()
    console.log("..first");
}

function second(){
    third();
    console.log("..second");
}

function third(){
    console.log("..third");
}

first();