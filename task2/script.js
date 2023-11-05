const consolelog = document.querySelector('#consoleLog');
consolelog.addEventListener('click', () => {
    alert ('Служит для вывода сообщения в web-консоль.');
})
const alertcommand = document.querySelector('#alert');
alertcommand.addEventListener('click', () => {
    alert ('Показывает диалоговое окно с сообщением и кнопкой OK.');
})
const promptcommand = document.querySelector('#prompt');
promptcommand.addEventListener('click', () => {
    alert ('Отображает диалоговое окно с запросом на ввод текста.');
})
