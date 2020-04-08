const footerLogo = document.querySelector('.footer__logo img');
const footerTel = document.querySelector('.footer__tel-img img');
const footerMail = document.querySelector('.footer__mail-img img');

if(window.innerWidth < 576) {
    footerLogo.src = './assets/images/logo.png';
    footerTel.src = './assets/images/phone-white.png';
    footerMail.src = './assets/images/mail-white.png';
}

