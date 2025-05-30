// ForEach Loop
 let nums = [1,2,3,4,5,6,7,8,9,10];
const sumNum = nums.forEach(sumNums);


function sumNums(num) {
    let sum = 0;
    sum += num;
    console.log(`${sum} = ${sum + num}`)
}



const evenNum = nums.filter(num => num % 2 === 0)

const totalNum = nums.reduce((accumulator,num) => accumulator + num,0);

console.log(totalNum);
console.log(evenNum);

( function (num) {
    const double = num.map(n => n*2);

    console.log(double);
}
)(nums);


const div = document.querySelector('div:first-child');

// const arr = Array.from(div);
// div.forEach(n => console.log(n));
div.style.background = '#461d81';

div.childNodes[1].style.color = '#fff';

const heading = document.querySelector('h1');

heading.parentElement.style.padding = '1rem 1.5rem';

// div.innerHTML = '<h2>Array Loop</h2>';

console.log(heading);