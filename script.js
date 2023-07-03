const decrement = document.getElementById('decrement');
const count =  document.getElementById('count');
const increment = document.getElementById('increment');

let counter = 0;

const updateCounter = () => {
    count.textContent = counter;

    if(counter > 0){
        count.classList.remove('red');
        count.classList.add('green');
    } else if(counter < 0) {
        count.classList.remove('green');
        count.classList.add('red');    
    } else {
        count.classList.remove('green', 'red');
    }
}

increment.addEventListener('click', () => {
    counter++;
    updateCounter();
}); 

decrement.addEventListener('click', () => {
    counter--;
    updateCounter();
});


updateCounter();