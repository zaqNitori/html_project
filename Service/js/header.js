$(window).on('load resize', function () {
    if ($(window).width() > 760) {
        $('.mb_container').css('display', 'none');
    } else if ($('.mb_container').hasClass("mslide")) {
        $('.mb_container').css('display', 'block');
    } else {
        $('.mb_container').css('display', 'none');
    }
});

$(document).ready(function () {

    var userAgent = window.navigator.userAgent.toLowerCase(),
        ios = /iphone|ipod|ipad/.test(userAgent);

    if (ios) {
        $('.gmenu-container > .ga_menu > ul > li.sbmleft').remove();
    };

    "use strict";

    $('.ga_menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');


    $('.ga_menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');


    $(".ga_menu > .mb_container").before('<div class=\"menu-mobile\"><a href=\"../Carena_LOL/Carena.html\"><img src=\"img/Icon/Carena_Icon.png\" class=\"gamobile_logo\"></a><div class=\"burgericon\" id=\"nav-icon4\"><span></span><span></span><span></span></div></div>');

    $(".menu-mobile > .burgericon").click(function (e) {

        if ($('.mb_container').hasClass("mslide")) {
            outclose('off');
            e.preventDefault();
        } else {
            outclose('on');
            e.preventDefault();
        }

        $(".bg_overlay").click(function () {
            if ($('.mb_container').hasClass("mslide")) {
                outclose('off');
            }
        });

    });

    function outclose(status, nav_animation) {
        //console.log(status);
        if (status == 'off') {
            $(".menu-mobile > .burgericon").removeClass('open');
            $('.mb_container').css('z-index', -10).fadeOut(100).removeClass('mslide');
            $(".bg_overlay").remove();

        } else {
            $(".menu-mobile > .burgericon").addClass('open');
            $('.mb_container').css('z-index', 109).fadeIn(50).addClass('mslide');
            $('<div class="bg_overlay"></div>').insertAfter(".ga_menu ul");

            $(".bg_overlay").css({
                'width': $(window).width(),
                'height': $(window).height(),
                'display': 'block'
            });


        }
    }



});

function PlaceholderTxt(input, label, classname) {
    this.inputele = input;
    this.labelele = label;
    this.classname = classname || 'active';

    this.init();
}

PlaceholderTxt.prototype = {
    switchLabelClass: function (status) {
        if (status) {
            this.labelele.className += ' ' + this.classname;
        } else {
            var oldValue = this.labelele.className.split(/\s+/);
            for (var i = 0, j = oldValue.length; i < j; i++) {
                if (this.classname == oldValue[i]) {
                    oldValue.splice(i, 1);
                    break;
                }
            };
            this.labelele.className = oldValue.join(' ');
        }
    },
    init: function () {
        var that = this;
        this.inputele.onfocus = function () {
            that.switchLabelClass(0);
        }

        this.inputele.onblur = function () {
            if ($.trim(this.value) == '') {
                that.switchLabelClass(1);
            }
        }

        if ($.trim(this.inputele.value) == '') {
            that.switchLabelClass(1);
        }
    }
};

function clearTextarea(textarea, button) {
    this.textarea = textarea;
    this.button = button;

    this.init();
}

clearTextarea.prototype = {
    clear: function () {
        this.textarea[0].value = '';
    },
    init: function () {
        var that = this;
        this.button.click(function () {
            that.clear();
            return false;
        });
    }
}


window.onload = function () {
    var hdsearchInput = document.getElementById('J-search'),
        hdsearchLabel = document.getElementById('J-search-label');

    if (hdsearchInput && hdsearchLabel) {
        new PlaceholderTxt(hdsearchInput, hdsearchLabel, 'hd-search__label--active')
    }

    var ipsearchInput = document.getElementById('J-ip-searchbytxt-input'),
        ipsearchLabel = document.getElementById('J-ip-searchbytxt-label');

    if (ipsearchInput && ipsearchLabel) {
        new PlaceholderTxt(ipsearchInput, ipsearchLabel, 'ip-searchbytxt__form-input-label--active')
    }
}

var reset1 = $('#J-reset-1'),
    textarea1 = $('#J-textarea-1');

if (reset1.length && textarea1.length) {
    new clearTextarea(textarea1, reset1);
}

var reset2 = $('#J-reset-2'),
    textarea2 = $('#J-textarea-2');

if (reset2.length && textarea2.length) {
    new clearTextarea(textarea2, reset2);
}