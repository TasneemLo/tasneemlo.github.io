/* ---- contact form ---- */
$("#contactForm").validator().on("submit", function(event) {
    if (event.isDefaultPrevented()) {
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        event.preventDefault();
        submitForm();
    }
});
function submitForm() {
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var msg_subject = $("#msg_subject").val();
    var message = $("#message").val();
    $.ajax({
        type: "POST",
        url: "php/contact.php",
        data: "name=" + name + "&email=" + email + "&msg_subject=" +
            msg_subject + "&message=" + message,
        success: function(text) {
            if (text == "success") {
                formSuccess();
            } else {
                formError();
                submitMSG(false, text);
            }
        }
    });
}
function formSuccess() {
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!")
}
function formError() {
    $("#contactForm").removeClass().addClass('shake animated').one(
        'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function() {
            $(this).removeClass();
        });
}
function submitMSG(valid, msg) {
    if (valid) {
        var msgClasses = "h4 text-success";
    } else {
        var msgClasses = "h4 text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}

/* ---- our work gallery ---- */
$('#work').magnificPopup({
    delegate: 'a.zoom',
    type: 'image',
    fixedContentPos: false,
    removalDelay: 300,
    mainClass: 'mfp-fade',
    gallery: {
        enabled: true,
        preload: [0,2]
    }
});

/* ---- particle ---- */
$(document).ready(function() {
    if ( $('#particles-js').length != 1) {
        return
    }
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
})

/* ---- nav smooth scroll ---- */
$(document).ready(function() {
    $('.scroll-link').on('click', function(event){
        event.preventDefault();
        var sectionID = $(this).attr("data-id");
        scrollToID('#' + sectionID, 750);
    });
    $('.scroll-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop:0}, 1200);       
    });
});

/* ---- navbar offset ---- */
function scrollToID(id, speed){
    var offSet = 69;
    var targetOffset = $(id).offset().top - offSet;
    $('html,body').animate({scrollTop:targetOffset}, speed);
}

/* ---- animations ---- */
if (typeof sr == 'undefined') {
    window.sr = ScrollReveal({
        duration: 1500,
        delay: 50
    });
}
Royal_Preloader.config({
    onComplete: function () {
        triggerReveals();
    }
});
function triggerReveals() {
    sr.reveal('.bottomReveal', {
        origin: 'bottom'
    }).reveal('.leftReveal', {
        origin: 'left'
    }).reveal('.rightReveal', {
        origin: 'right'
    }).reveal('.topReveal', {
        origin: 'top'
    });

    sr.reveal('.rotateBottomReveal', {
        origin: 'bottom',
        rotate: { x: 90 }
    }).reveal('.rotateLeftReveal', {
        origin: 'left',
        rotate: { x: 90 }
    }).reveal('.rotateRightReveal', {
        origin: 'right',
        rotate: { x: 90 }
    }).reveal('.rotateTopReveal', {
        origin: 'top',
        rotate: { x: 90 }
    })

    sr.reveal('.scaleReveal', {
        origin: 'top',
        scale: 0.6
    });
}

/* ---- close mobile nav on click ---- */
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});

/* ---- rotater text ---- */
var current = 1; 
var height = jQuery('.ticker').height(); 
var numberDivs = jQuery('.ticker').children().length; 
var first = jQuery('.ticker h1:nth-child(1)'); 
setInterval(function() {
    var number = current * -height;
    first.css('margin-top', number + 'px');
    if (current === numberDivs) {
        first.css('margin-top', '0px');
        current = 1;
    } else current++;
}, 2500);

/* ---- Works ---- */
var workData = [{
    "name": "Awake",
    "types": ["painting"],
}, {
    "name": "Banyan at IITM",
    "types": ["painting"],
}, {
    "name": "Copy - Carnation, lily, lily, rose - Sargent",
    "types": ["painting"],
}, {
    "name": "Copy - Portrait of Hendrikje Stoffels - Rembrandt",
    "types": ["painting"],
}, {
    "name": "Devouring Evil",
    "types": ["painting"],
}, {
    "name": "Dispertia",
    "types": ["painting"],
}, {
    "name": "Greed",
    "types": ["painting"],
}, {
    "name": "Impression, Sky",
    "types": ["painting"],
}, {
    "name": "Kerala Mural",
    "types": ["painting"],
}, {
    "name": "Old Man",
    "types": ["painting"],
}, {
    "name": "Reflections",
    "types": ["painting"],
}, {
    "name": "Still fruit life",
    "types": ["painting"],
}, {
    "name": "Thwart",
    "types": ["painting"],
}]
function toTitleCase(str) {
    return str.replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}
$(document).ready(function() {
    $.each(workData, function(i, work) {
        var $item = $('#thework .template').clone();
        $item.removeClass('template')
            .addClass(work.types.join(' '));
        $item.find('.portfolio-image').attr('src', 'img/works/' + work.name + '.jpg');
        $item.find('.zoom')
            .attr('href', 'img/works/' + work.name + '.jpg')
            .attr('title', work.name);
        $item.find('.project-title').html(work.name);
        $item.find('.portfolio-badge').html(work.types.map(toTitleCase).join(' + '))
        $('#thework').append($item);
    });
    $('#thework .template').remove();
    /* ---- mixitup.js our work sorting ---- */
    $('#thework').mixItUp({
        animation: {
            duration: 1000
        }
    });
})
