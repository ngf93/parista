var input = document.getElementById("telephoneInput");

let inp = document.querySelector('#tel');

// Проверяем фокус
if (inp !== null) {
    inp.addEventListener('focus', _ => {
        // Если там ничего нет или есть, но левое
        if(!/^\+\d*$/.test(inp.value))
          // То вставляем знак плюса как значение
            inp.value = '+7';
    });
      
    inp.addEventListener('keypress', e => {
    // Отменяем ввод не цифр
    if(!/\d/.test(e.key))
        e.preventDefault();
    });
}