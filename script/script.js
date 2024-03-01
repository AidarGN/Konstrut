document.addEventListener('DOMContentLoaded', () => {

    function scrollToSection(sectionId) {
        window.scrollTo({
            top: document.getElementById(sectionId).offsetTop,
            behavior: 'smooth'
        });
    }

    document.querySelectorAll('.click__link').forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            const sectionId = event.target.getAttribute('href').slice(1);
            scrollToSection(sectionId);
        });
    });

    document.querySelector('.header__link').onclick = function () {
        document.getElementById('nav').scrollIntoView({behavior: 'smooth'});
    }
    
    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal');

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 10000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

});