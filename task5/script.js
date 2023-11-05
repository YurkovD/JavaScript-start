let button = document.querySelector('button');
let input = document.querySelector('input');
let userText = document.querySelector('#duplicateField');

input.addEventListener('input', function(){
    userText.textContent = input.value
})

button.addEventListener('click', () =>{
console.log(input.value)
})
