//this makes sure that dynamically generated cards have jQuery functionality
function card_handler() {
    $('.card:last-child').click(function () {
        var x = $(this).width();
        $(this).css('width', x);
        $(this).css('height', $(this).height());
        $(this).children('p').fadeOut(function () {
            var t = $(this).attr('temp');
            $(this).attr('temp', $(this).text());
            $(this).text(t);
            $(this).parent().children('p').fadeIn();
        });
    });
}

$(document).ready(function () {

    //since button is not a submit button, this force submits the form
    $('button').click(function () {
        $('form').submit();
    });

    //once the form is submitted it injects the html into #right_panel and attaches the card_handler
    $('form').submit(function () {
        var data = $(this).serializeArray();
        // var hello = 'hello';
        // cosole.log(`ajjdjdjd ${hello} !`);
        // var html = `<div class="card"><p class="card_name" temp="">${data[0].value} ${data[1].value}</p><p class="card_description" temp="'${data[2].value}'">Click for description!</p></div>`;
        // console.log(html);
        var myHTML = '<div class="card"><p class="card_name" temp="">'
            + data[0].value + ' ' + data[1].value +
            '</p><p class="card_description" temp="' + data[2].value + '">Click for description!</p></div>';
        $(myHTML).appendTo('#right_panel').hide().fadeIn(300);
        card_handler();
        return false;
    });
});