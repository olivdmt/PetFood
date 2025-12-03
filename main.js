
const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('navegation');

function toggleMenu() {
    nav.classList.toggle('aberto');

    if (nav.classList.contains('aberto')) {
        btnMobile.classList.remove('fa-bars');
        btnMobile.classList.add('fa-xmark');
        btnMobile.style.color = 'var(--primary)'; // Muda cor para laranja
    } else {
        btnMobile.classList.add('fa-bars');
        btnMobile.classList.remove('fa-xmark');
        btnMobile.style.color = '#fff';
    }
}

btnMobile.addEventListener('click', toggleMenu);

const links = document.querySelectorAll('#navegation a');
links.forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('aberto')) toggleMenu();
    });
});



