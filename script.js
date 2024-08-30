document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('passwordForm');
    const result = document.getElementById('result');
    const correctPassword = 'RmxhZ3szcXdiVcKjP1FxwqM/MjNjMD4qY30='; // Bu yerda to'g'ri parolni kiriting

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Forma yuborilishini to'xtatadi

        const inputPassword = document.getElementById('password').value;

        if (inputPassword === correctPassword) {
            result.textContent = 'Parol to\'g\'ri!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Xato parol!';
            result.style.color = 'red';
        }
    });
});
