document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const checkBtn = document.getElementById('check-btn');
    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result');
    const resultIcon = document.querySelector('.result-icon');
    const form = document.getElementById('palindrome-form');

    // Prevenir que se envié el formulario
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    // Función para limpiar el string ingresado, eliminar caracteres no alfanuméricos y convertir a minúsculas
    function cleanStr(str) {
        const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        return cleanedStr;
    }


    // Función para verificar si es palíndromo
    function isPalindrome(str) {
        // Limpiar el string
        const cleanedStr = cleanStr(str);
        // Comparar con su reverso
        const reversedString = cleanedStr.split('').reverse().join('');
        return cleanedStr === reversedString;
    }

    // Función para mostrar el resultado
    function showResult(isValid, inputText) {
        // Actualizar contenido y clases
        if (isValid) {
            resultText.textContent = `${inputText} is a palindrome`;
            resultContainer.className = 'result-container success show';
            resultIcon.className = 'result-icon fas fa-check-circle';
        } else {
            resultText.textContent = `${inputText} is not a palindrome`;
            resultContainer.className = 'result-container error show';
            resultIcon.className = 'result-icon fas fa-times-circle';
        }

        // Añadir animación
        resultContainer.classList.add('pulse');
        setTimeout(() => {
            resultContainer.classList.remove('pulse');
        }, 500);
    }

    // Manejar el evento de clic en el botón
    checkBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const inputText = textInput.value.trim();

        // Validar entrada
        if (inputText === '') {
            alert('Please input a value');
            return;
        }

        // Verificar si es palíndromo y mostrar resultado
        const isValid = isPalindrome(inputText);
        showResult(isValid, inputText);
    });

    // Permitir verificación con la tecla Enter
    textInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            checkBtn.click();
        }
    });

    // Focus en el input al cargar la página
    textInput.focus();
});