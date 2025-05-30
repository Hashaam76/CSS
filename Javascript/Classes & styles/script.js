// function run(){
//     const card = document.querySelector('.card');
//     card.className = 'card dark';

//     const ul = document.querySelector('ul');
//     ul.classList.toggle('hidden');
// }

const button = document.querySelector('button');

// button.onclick = run;

button.addEventListener('click', () => {
    const card = document.querySelector('.card');
    card.className = 'card dark';

    // const ul = document.querySelector('ul');
    // ul.classList.toggle('hidden');

    const li = document.querySelector('li');
    li.remove();
});


function childHeading() {
    const div = document.querySelector('div');
    const h1 = document.querySelector('h1');

    // Create Element
    const h2 = document.createElement('h2');
    h2.textContent = 'I am replaced heading';
    h2.className = 'heading';

    div.replaceChild(h2,h1);
}

function firstElementReplace(){
    const li = document.querySelector('li');

    const li2 = document.createElement('li');
    li2.innerHTML = 'Replace List Item <ul><li>Inner List</li></ul>'

    li.replaceWith(li2);
}

function anyElementReplace(itemNum){
    const li = document.querySelectorAll('li')[`${itemNum - 1}`];
    li.outerHTML = '<li>Any Item</li>'
}

function removeFirstChild(){
    const ul = document.querySelector('ul');
    // const li = document.querySelectorAll('li')[`${itemNum - 1}`];
    const li = document.querySelector('li');
    // ul.removeChild(li);
    li.remove();
}
// anyElementReplace(5);
// firstElementReplace();
// childHeading();
// removeFirstChild(6)


const input = document.getElementById('input-form');

// function onKeypress() {
//     console.log('You press a key');
// }

// const onKeyup = () => console.log('You press up key');
const onKeydown = (e) => {

    // key
    if(e.key === 'Enter'){
        alert('You pressed Enter key!')
    }


    // code
    // console.log(e.code)
    if(e.code === 'Digit1'){
        alert("Your pressed 1 key")
    }

    // const h1 = document.querySelector('div h1');

    // h1.textContent = e.key;

    console.log(`${e.key} ${e.keyCode} ${e.code}`)
    if(e.shiftKey && e.key === 'A'){
        alert('Your pressed shift + '+e.key)
    }
    // keycode
    console.log(e.keyCode)
};

// input.addEventListener('keypress', onKeypress);
// input.addEventListener('keyup', onKeyup);
input.addEventListener('keydown', onKeydown);