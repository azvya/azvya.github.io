// quotes

var kutipan = [
    'The Way Get Started Is To Quit And Begin Doing -Walt Disney',
    'You Learn More From Failure Than From Success. Don\'t Let It Stop You. Failure Builds Character -Unknown',
    'If You See That One Of You Has Slipped, Correct Him, Pray For Him And Do Not Help Shaitan Against Him -Umar ibn Khattab, Radiyallahu Anhu',
    'In The End We Only Regret The Chances We Didn\'t Take -Unknown',
    'Weak People Revenge. Strong People Forgive. Intelligent People Ignore -Albert Einstein',
    'If You Can\'t Explain It Simply, You Don\'t Understand It Well Enough -Albert Einstein'
]

function kutipanJalan() {
    var bilanganAcak = Math.floor(Math.random() * (kutipan.length));
    document.getElementById('tampilanKutipan').innerHTML = kutipan[bilanganAcak];
}

kutipanJalan();


// smoothscrolling js
$('.smoothscroll').on('click', function(e) {

    var point = $(this).attr('href');
    var element = $(point);

    $('html, body').animate({
        scrollTop: element.offset().top -100
    });

    e.preventDefault();
});

// ganti warna navbar

window.onscroll = function() {scrollWindow()};

function scrollWindow() {
    if (document.body.scrollTop > 50 || $(window).width() < 960) {
        document.getElementById("navigasi").className = "shadow-md alternav navbar navbar-expand-lg navbar-dark bg-secondary position-fixed border-secondary border-bottom w-100";
    } else {
        document.getElementById("navigasi").className = "alternav navbar navbar-expand-lg navbar-dark bg-transparent position-fixed border-secondary border-bottom w-100";
    }
}

function resizeSekolah() {
    if ($(window).width() < 960) {
        document.getElementById("Sd").className = "shadow-sm rounded-circle w-50 d-block mx-auto img-thumbnail";
        document.getElementById("Smp").className = "shadow-sm rounded-circle w-50 d-block mx-auto img-thumbnail";
        document.getElementById("Sma").className = "shadow-sm rounded-circle w-50 d-block mx-auto img-thumbnail";
        document.getElementById("Univ").className = "shadow-sm rounded-circle w-50 d-block mx-auto img-thumbnail";
    } else {
        document.getElementById("Sd").className = "shadow-sm rounded-circle w-100 img-thumbnail";
        document.getElementById("Smp").className = "shadow-sm rounded-circle w-100 img-thumbnail";
        document.getElementById("Sma").className = "shadow-sm rounded-circle w-100 img-thumbnail";
        document.getElementById("Univ").className = "shadow-sm rounded-circle w-100 img-thumbnail";
    }
}

resizeSekolah();