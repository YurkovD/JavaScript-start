document.querySelector('a');
const TextField = document.querySelector('h3');
let urlText;
TextField.addEventListener('click', (event) => {
    urlText = prompt('Введите текст');
    TextField.textContent = urlText;
    console.log('Текст в блоке с id TextField изменён на', urlText);
})

