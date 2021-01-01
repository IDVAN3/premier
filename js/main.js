
'use strict'
$(document).ready(function () {

    /* popup */

    function openPopup(id) {
        $(".js-popup[data-id-popup='" + id + "']").fadeIn(300);
        $('body').addClass('lock1');
    }

    function close_popup() {
        $('.js-popup').fadeOut(300);
        $('body').removeClass('lock1');
    }

    $('.js-popup__close').click(close_popup);

    $('.js-btn-popup').click(function (e) {
        e.preventDefault();
        close_popup();
        let index_btn_popup = $(this).attr('href');
        openPopup(index_btn_popup);
    });

    $('.js-popup').click(function (e) {
        let popup = $('.js-popup__wrapp');
        if (!popup.is(e.target) && popup.has(e.target).length === 0)
            close_popup();
    });

    // burger

    $('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
    });
    
    /*el-select*/
     $('.js-select-main').click(function () {
        if ($(window).width() <= 768) {
            let ths = $(this);
            let clos = ths.next('.wrapper-submenu');
            let wr = $('.wrapper-submenu');

            if (!clos.hasClass('active')) {
                wr.removeClass('active');
                clos.addClass('active');
                clos.slideDown(300);
            } else if (wr.hasClass('active')) {
                wr.removeClass('active');
                wr.slideUp(300);
            } 
        }
    });

    // section calc

    $('.capacity__item').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });

    $('.premier-prev-link').click(function (e) {
        e.preventDefault();
        const itemElement = $('.calc-wrapper__item');
        let currentItemElement = $('.calc-wrapper__item.active');
        let currentCalcItem = $('.calc-line__item.active:last');

        if ($('.premier-next-link').hasClass('hidden')) {
            $('.premier-next-link').removeClass('hidden');
            $('.premier-prev-link').css('margin-right', 20);
        }

        if (!$('.calc-wrapper__item:first').hasClass('active')) {
            currentItemElement.removeClass('active');
            currentItemElement.prev(itemElement).addClass('active');
            currentCalcItem.removeClass('active');
        }    
        if ($('.calc-wrapper__item:first').hasClass('active')) {
            $(this).addClass('hidden');
        }
    })

    $('.premier-next-link').click(function (e) {
        e.preventDefault();
        const itemElement = $('.calc-wrapper__item');
        let currentItemElement = $('.calc-wrapper__item.active');
        let currentCalcItem = $('.calc-line__item.active:last');
        let calcItem = $('.calc-line__item');
        

        if ($('.premier-prev-link').hasClass('hidden')) {
            $('.premier-prev-link').removeClass('hidden');
        }
        
        if (!$('.calc-wrapper__item:last').hasClass('active')) {
            currentItemElement.removeClass('active');
            currentItemElement.next(itemElement).addClass('active');
            currentCalcItem.next(calcItem).addClass('active');
        }
        if ($('.calc-wrapper__item:last').hasClass('active')) {
            $(this).addClass('hidden');
            $('.premier-prev-link').css('margin-right', 0);
        }
        else {
            $('.premier-prev-link').css('margin-right', 20);
        }
    })

    //input type range 

    let range = document.getElementById("myRange");
    let field = document.getElementById('num1');
    let range2 = document.getElementById("myRange2");
    let field2 = document.getElementById('num2');
    let percent = 100;
    let maxValue = 100;

    function getRange(slider){
        let x = slider.value;
        let y = x*percent/maxValue;
        let color = 'linear-gradient(90deg, #DC6D48 '+ y +'%, #DBDBDB ' + y + '%)';
        slider.style.background = color;
      }

    function getSliderRange(valueId, numId) {
        valueId.addEventListener('input', function (e) {
            numId.value = e.target.value;
        });
    
        numId.addEventListener('input', function (e) {
            valueId.value = e.target.value;
        });

        getRange(valueId);
        valueId.addEventListener("mousemove", function(){
            getRange(valueId);
        })
        valueId.addEventListener("touchmove", function(){
            getRange(valueId);
        })   

        let id = numId.id;

        $("input#"+id).change(function(){
            if (+$(this).attr('max') < $(this).val()) {
                $(this).val($(this).attr('max'));
                getRange(valueId);
            }
            if (+$(this).attr('min') > $(this).val()) {
                $(this).val($(this).attr('min'));
                getRange(valueId);
            }
            getRange(valueId);
        });
    }

    getSliderRange(range, field);
    getSliderRange(range2, field2);

            


    // telephone mask

    $(function(){
        $(".js-popup-phone").mask("+7999-999-99-99");
      });

});
/*кнопка прокрутки вверх*/

const offset = 100;
const scrollUp = document.querySelector('.js-scroll-up');
// const scrollUpSvgPath = document.querySelector('.js-scroll-up__path');
// const pathLength = scrollUpSvgPath.getTotalLength();

// scrollUpSvgPath.style.strokeDasharray = '\'' + pathLength + pathLength + '\'';
// scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';

// getTop
// const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

//updateDashoffset

// const updateDashoffset = () => {
//     const heigth = document.documentElement.scrollHeight - window.innerHeight;
//     const dashoffset = pathLength - (getTop() * pathLength / heigth);

//     scrollUpSvgPath.style.strokeDashoffset = dashoffset;
// }

// onScroll
// window.addEventListener('scroll', () => {
//     updateDashoffset();
//     getTop() > offset ? scrollUp.classList.add('scroll-up_active') : scrollUp.classList.remove('scroll-up_active');
// });

// click
scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

/*скрол по якорю*/