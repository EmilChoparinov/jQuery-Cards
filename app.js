//this makes sure that dynamically generated cards have jQuery functionality
function card_handler() {
    $('.card').click(function () {
        var lasParent = $(this);
        console.log("card clicked");
        var x = $(this).width();
        $(this).css('width', x);
        $(this).children('p').fadeOut(function () {
            var t = $(this).attr('temp');
            $(this).attr('temp', $(this).text());
            $(this).text(t);
            console.log($(this).html())
            lasParent.children('p').fadeIn();
        });
    });
}

$(document).ready(function () {

    //since button is not a submit button, this force submits the form
    $('button').click(function () {
        console.log('button clicked');
        $('form').submit();
    });

    //once the form is submitted it injects the html into #right_panel and attaches the card_handler
    $('form').submit(function () {
        console.log('in submit');
        var data = $(this).serializeArray();
        var myHTML = '<div class="card"><p class="card_name" temp="">'
            + data[0].value + ' ' + data[1].value +
            '</p><p class="card_description" temp="' + data[2].value + '">Click for description!</p>';
        $(myHTML).appendTo('#right_panel').hide().fadeIn(300);
        card_handler();
        return false;
    });
});