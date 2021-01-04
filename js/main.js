
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

    $(".js-select-main").click(function(e) {
        e.preventDefault();
        let ths = $(this);
        let clos = ths.next('.wrapper-submenu');
            if(clos.is(":visible")) {
                clos.removeClass('active');
            }
            else {
                $('.wrapper-submenu').removeClass('active');
                clos.addClass('active');
            }
        });

    $('.link-show-text').click(function(e) {
        e.preventDefault();
        let allText = ((($(this).parent()).parent()).parent()).parent().find($('.wrapper-show-text'));
        console.log(allText)
        allText.slideDown(300);
        $(this).slideUp(300);
    })
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
    const numInputs = document.querySelectorAll('input[type=number]');

    function getRange(slider){
        let x = slider.value;
        let y = x*percent/maxValue;
        let color = 'linear-gradient(90deg, #DC6D48 '+ y +'%, #DBDBDB ' + y + '%)';
        slider.style.background = color;
      }

      function getNull (range, field, id) {
        numInputs[id].addEventListener('change', function (e) {
            if (e.target.value == '') {
                e.target.value = 0;
                range.value = 0;
                field.value = 0;
            }
        })
    }
    if (range && range2) {
        getNull(range, field, 0);
        getNull(range2, field2, 1);
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
            if (+$(this).attr('min') >= $(this).val()) {
                $(this).val($(this).attr('min'));
                getRange(valueId);
            }

            getRange(valueId);
        });
    }

    if (range && range2) {
        getSliderRange(range, field);
        getSliderRange(range2, field2);
    }
    

    // toggle class active for park links

    $('.park__link').click(function(e){
        e.preventDefault();
        e = $(this).closest('.park-list').find('.park__link.active');
        e.removeClass('active');
        $(this).addClass('active');
    })

            


    // telephone mask

    $(function(){
        $(".js-popup-phone").mask("+7999-999-99-99");
      });

});
/*кнопка прокрутки вверх*/

$('.js-scroll-up').click(function() {
    $('body,html').animate({scrollTop:0},500);
});
