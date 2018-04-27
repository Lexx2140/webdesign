// Scroll
$(function() {
    $('a').click(function(e) {
        e.preventDefault();
        $id = $(this).attr('href');
        // $(this).hide();
        $('body,html').animate({
            scrollTop: $($id).offset().top - 20
        }, 750);
    });
});

// Callback form toggle
$(function() {

    var $form = $('#myForm');
    var $toggle = $form.find('.form-toggle');

    $toggle.on('click', function() {
    		$form.toggleClass('my-form-vis');
    });
});