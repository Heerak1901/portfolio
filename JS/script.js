// Add any custom JavaScript functionality here
// For example, smooth scrolling to sections:
$('a.nav-link').on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    }
});
