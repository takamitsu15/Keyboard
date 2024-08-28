const display = document.getElementById('display');
const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('click', () => {
        let keyValue = key.textContent;
        if (keyValue === 'Backspace') {
            display.value = display.value.slice(0, -1);
        } else if (keyValue === 'Space') {
            display.value += ' ';
        } else {
            display.value += keyValue;
        }
    });
});
