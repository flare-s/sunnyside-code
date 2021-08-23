const menuButton = document.querySelector('.main-nav__toggle');
const nav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav__link');
const arrow = document.querySelector('.arrow');
const hero = document.querySelector('.hero');

menuButton.addEventListener('click', function() {
    nav.classList.toggle('active');
});

navLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        let target = link.dataset.target;
        let section = document.querySelector(`[data-section=${target}]`);
        var elementPosition = section.getBoundingClientRect();
        window.scrollTo({
            top: elementPosition.top,
            left: 0,
            behavior: "smooth"
        })
    })
})


arrow.addEventListener('click', function() {
    window.scrollTo(
        {
            top: hero.clientHeight,
            left: 0,
            behavior: 'smooth'
        }
    )
})



