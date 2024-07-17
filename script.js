document.getElementById('telegramButton').addEventListener('click', function() {
    const username = document.getElementById('telegramUsername').value;
    if (username) {
        window.location.href = `https://t.me/${username}`;
    } else {
        alert('Per favore, inserisci un username di Telegram');
    }
});
