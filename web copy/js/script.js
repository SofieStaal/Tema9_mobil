$(function () {

    $('article').each(function () {

        $(this).readingTime({
            readingTimeTarget: $(this).find('.eta'),
            remotePath: $(this).attr('data-file'),
            remoteTarget: $(this).attr('data-target')
        });

    });

});

$('article').readingTime();


function myFunction() {

    var x = document.getElementById('readMore');
    if (x.style.display === 'none') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }

    document.getElementById('button').classList.add('displaynone');
}

function myFunction2() {

    var x = document.getElementById('readMore2');
    if (x.style.display === 'none') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }

    document.getElementById('button2').classList.add('displaynone');
}




function myEvent() {
    var x = document.getElementById('myDIV');
    if (x.style.display === 'none') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }

    document.getElementById('buttonEvent').classList.add('displaynone');

}



$(window).scroll({
        previousTop: 0
    },
    function () {
        var currentTop = $(window).scrollTop();
        if (currentTop < this.previousTop) {
            $(".sidebar em").text("Up");
            $(".menu").show();
        } else {
            $(".sidebar em").text("Down");
            $(".menu").hide();
        }
        this.previousTop = currentTop;
    });
