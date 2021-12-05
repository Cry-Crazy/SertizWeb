// S('.page1').on('click', function(e) {
//     e.preventDefault;
//     S(this).toggleClass('.page1_active');
//     S('.second-nav').toggleClass('.second-nav_active');
// });
const coNtent = document.querySelector('.coNtent');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
    coNtent.classList.toggle('active');
});



