
/*

//  back to top button   //

function backToTop() {
    let button = $('.back-to-top');

    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 50) {
            button.fadeOut();
        }
    });

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 1000);
    })
}

backToTop();
*/
"use strict"

const titles = document.querySelectorAll('.accordion__title');
const contents = document.querySelectorAll('.accordion__content');

    titles.forEach(item => item.addEventListener('click', () => {
        const activeContent = document.querySelector('#' + item.dataset.tab);

        if (activeContent.classList.contains('active')) {
            activeContent.classList.remove('active');
            item.classList.remove('active');
            activeContent.getElementsByClassName.maxHeight = 0;
        } else {
            contents.forEach(element => {
                element.classList.remove('active');
                element.style.maxHeight = 0;
            });

            titles.forEach(element => element.classList.remove('active'));

            item.classList.add('active');
            activeContent.classList.add('active');
            activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
        }
    }))

document.querySelector('[data-tab="tab-1"]').classList.add('active');
document.querySelector('#tab-1').classList.add('active');
document.querySelector('#tab-1').style.maxHeight = document.querySelector('#tab-1').scrollHeight + 'px';
