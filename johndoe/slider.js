const slider_items = $('.slider-items li');
const slider_dots = $('.slider-dots li');
const nav_next = $('.slider-nav.next');
const nav_prev = $('.slider-nav.prev');


let selected_item = 0;

// Definir mensajes para cada elemento
const messages = [
    'Experiencia  1 año', //Html
    'Experiencia  1 año', //Css
    'Experiencia  5 meses', //Js
    'Experiencia  5 meses',    //React
    'Experiencia  6 meses',  //Node
    'Experiencia  6 meses', //github
    'Experiencia  5 meses' //php
];


const menssages2 = [
    'Experience 1 year', //Html
    'Experience 1 year', //Css
    'Experience 5 months', //Js
    'Experience 5 months',    //React
    'Experience 6 months',  //Node
    'Experience 6 months', //github
    'Experience 5 months' //php
];


function setItemSlider(index) {
    selected_item = index;

    slider_items.each(function (idx) {
        let offset = idx - selected_item;
        if (offset < 0) offset += slider_items.length;

        for (let i = 0; i < slider_items.length + 1; i++) {
            $(this)
                .removeClass(`item-${i}`)
                .addClass(`item-${offset + 1}`);
        }
        slider_dots
            .eq(selected_item)
            .addClass('active')
            .siblings('li')
            .removeClass('active');
    });
}

function showHoverMessage() {
    $('.slider-items li').hover(
        function () {
            // Obtener el índice del elemento actual
            const index = $(this).index();
            // Mostrar el mensaje correspondiente al pasar el ratón
            const mensajes = (idiomaActual === 'en') ? menssages2 : messages;
            $(this).append(`<div class="hover-message">${mensajes[index]}</div>`);
        },
        function () {
            // Ocultar el mensaje al quitar el ratón
            $(this).find('.hover-message').remove();
        }
    );
}

// Llamada a la función showHoverMessage
showHoverMessage();

slider_items.click(function () {
    setItemSlider($(this).index());
});

slider_dots.click(function () {
    setItemSlider($(this).index());
});

nav_next.click(function () {
    selected_item = selected_item < slider_items.length - 1 ? ++selected_item : 0;

    setItemSlider(selected_item);
});

nav_prev.click(function () {
    selected_item =
        selected_item >= 1 ? --selected_item : slider_items.length - 1;

    setItemSlider(selected_item);
});