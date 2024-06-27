document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('gift-popup').style.display = 'flex';
    }, 90)

    document.getElementById('close-popup').addEventListener('click', function() {
        document.getElementById('gift-popup').style.display = 'none';
    });
});

