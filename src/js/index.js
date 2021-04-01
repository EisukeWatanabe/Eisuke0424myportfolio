import $ from 'jquery';
import '../scss/style.scss';

$(() => {
  'use strict';

  //メニューを開く
  const openMenu = () => {
    $('.p-hambergerMenu, .c-btn__line').toggleClass('open');
  }

  //メインタイトルの表示
  const fadeIn = () => {
    $('.js-fadeIn').fadeIn(2000);
  }

  //セクションへスクロール
  const scrollSection = (e) => {
    const $this = $(e.currentTarget);
    let speed = 1100,
        adjust = 0,
        href= $this.attr('href'),
        position = $(href).offset().top + adjust;
    $('html, body').stop().animate({scrollTop:position}, speed, 'swing');
    return false;
  }

  //スクロールアニメーション
  const scrollAnimation = () => {
    $('.js-scrollTrigger').each(function() {
      const position = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200) {
        $(this).addClass('is-active');
      }
      if (scroll < position - windowHeight + 230) {
        $(this).removeClass('is-active');
      }
    });
  }


  //セクションを横からスライド

  function slideSection() {
    const $win = $(window),
          $winH = $win.height(),
          $connect = $(this),
          position = $connect.offset().top;
    let current = 0,
        scroll;
    $win.on('load scroll', () => {
      scroll = $win.scrollTop();
      current = (1 - (position - scroll) / $winH) * 2 * 100;
      if (current > 99.9) {
        current = 100;
      }
      if (scroll > position - $winH) {
        $connect.css({width: `${current  }%`});
      }
    });
  }

  //初期発火
  const init = () => {
    fadeIn();
    // animation呼び出し
    if ($('.js-scrollTrigger').length) {
      scrollAnimation();
    }
    $('.p-section__title').each(slideSection);
    $('.p-section__titleLine').each(slideSection);
  }

  //SET EVENT
  const setEvent = () => {
    $('.js-btn').on('click', openMenu);
    $('.p-hambergerMenu__link').on('click', scrollSection);
    $('.p-hambergerMenu__link').on('click', openMenu);
    $(window).on('load scroll', scrollAnimation);
  }

  //関数の実行
  init();
  setEvent();


});