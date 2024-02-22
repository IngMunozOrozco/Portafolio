
// smooth scroll
$(document).ready(function () {
    $(".navbar .nav-link").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 2700, function () {
                window.location.hash = hash;
                
                // Cierra el menú después de hacer clic en algún elemento
                $(".navbar-collapse").removeClass("show");
            });
        }
    });
});





