$('.slider').slick({
    fade: true,//切り替えをフェードで行う。初期値はfalse。
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
    speed: 1000,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows: true,//左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
    pauseOnFocus: false,//フォーカスで一時停止を無効
    pauseOnHover: false,//マウスホバーで一時停止を無効
    pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});
//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function (event, slick, currentSlide, nextSlide) {
    $('.slider').slick('slickPlay');
});


//フェード（下）----------------------------------------------------------------------------


//表示・非表示---------------------------------------------------------------------------

$(function () {
    $('.section').hide();
    $('.secList').on('click', function () {
        $('.section').not($('.' + $(this).attr('id'))).hide();
        $('.' + $(this).attr('id')).show();
    });
});

$(function () {
    $('.section2').hide();
    $('.secList2').on('click', function () {
        $('.section2').not($('.' + $(this).attr('id'))).hide();
        $('.' + $(this).attr('id')).show();

    });
});


//look-------------------------------------------------------------------------------
var position = $("#intro_box").offset().top - 250;
$('#aaa').click(function () {
    $("html,body").animate({
        scrollTop: position
    }, {
        queue: false
    });
});
$('#bbb').click(function () {
    $("html,body").animate({
        scrollTop: position
    }, {
        queue: false
    });
});
$('#ccc').click(function () {
    $("html,body").animate({
        scrollTop: position
    }, {
        queue: false
    });
});
$('#ddd').click(function () {
    $("html,body").animate({
        scrollTop: position
    }, {
        queue: false
    });

});
$('#eee').click(function () {
    $("html,body").animate({
        scrollTop: position
    }, {
        queue: false
    });

});

//close
document.getElementById('close_1').addEventListener('click', close_1_click);
function close_1_click() {
    document.querySelector('.aaa').style.display = 'block';
    document.querySelector('.aaa').style.display = 'none';
}
document.getElementById('close_2').addEventListener('click', close_2_click);
function close_2_click() {
    document.querySelector('.bbb').style.display = 'block';
    document.querySelector('.bbb').style.display = 'none';
}
document.getElementById('close_3').addEventListener('click', close_3_click);
function close_3_click() {
    document.querySelector('.ccc').style.display = 'block';
    document.querySelector('.ccc').style.display = 'none';
}
document.getElementById('close_4').addEventListener('click', close_4_click);
function close_4_click() {
    document.querySelector('.ddd').style.display = 'block';
    document.querySelector('.ddd').style.display = 'none';
}
document.getElementById('close_5').addEventListener('click', close_5_click);
function close_5_click() {
    document.querySelector('.eee').style.display = 'block';
    document.querySelector('.eee').style.display = 'none';
}



//submit
var positionfff = $("#con").offset().top + 400;
document.getElementById('submit').addEventListener('click', submitclick);
function submitclick() {
    if (document.getElementById('message').value !== '' && document.getElementById('mail').value.match(/(.@)/) !== null && document.getElementById('tell').value.match(/\d{11}/) !== null && document.getElementById('name').value !== '') {
        document.querySelector('#coment_box').classList.add('fff');
        $("html,body").animate({
            scrollTop: positionfff
        }, {
            queue: false
        });

    }
    if (document.getElementById('message').value == '') {
        document.getElementById('att_4').style.display = 'block';
    } else {
        document.getElementById('att_4').style.display = 'none';
    }
    if (document.getElementById('mail').value.match(/(.@)/) == null) {
        document.getElementById('att_3').style.display = 'block';
    } else {
        document.getElementById('att_3').style.display = 'none';
    }
    if (document.getElementById('tell').value.match(/\d{11}/) == null) {
        document.getElementById('att_2').style.display = 'block';
    } else {
        document.getElementById('att_2').style.display = 'none';
    }
    if (document.getElementById('name').value == '') {
        document.getElementById('att_1').style.display = 'block';
    } else {
        document.getElementById('att_1').style.display = 'none';
    }
};

//ok
document.getElementById('ok').addEventListener('click', okclick);
function okclick() {
    document.querySelector('#coment_box').classList.remove('fff');
    document.querySelector('#coment_box').style.display = 'block';
    document.querySelector('#coment_box').style.display = 'none';
    document.getElementById('name').value = '';
    document.getElementById('tell').value = '';
    document.getElementById('mail').value = '';
    document.getElementById('message').value = '';
}



$(".qa-list dd").hide();
$(".qa-list dl").on("click", function (e) {
    $('dd', this).slideToggle('fast');
    if ($(this).hasClass('open')) {
        $(this).removeClass('open');
    } else {
        $(this).addClass('open');
    }
});

