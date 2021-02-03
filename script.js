let button = document.getElementById('button');
let inputValue = document.getElementById('number').value;



let count = () => {
    let result;
    result = Math.ceil(document.getElementById('number').value / 4);
    console.log(result);
    document.getElementById('result').innerHTML = 'Liczba jednollitrowych puszek farby potrzebnych do pomalowania wynosi: ' +result
}

button.addEventListener('click', count)
