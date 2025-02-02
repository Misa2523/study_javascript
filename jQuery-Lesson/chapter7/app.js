// ７章「thisとchildren」

/*
【this】イベントが発生した要素のみを変化させる
例：正方形にクリックした時、その正方形のみsideUpして消えていく機能を作れる。

【children】HTML要素直下のすべての子要素を取得できる
例：リスト(ul要素)の子要素であるli内の文字列が全て黒から赤に変化する機能を作れる。
*/


/*----------------------------thisとは----------------------------*/
// イベントが発生した要素のみ変化させたいときに使う
/*
$(function(){
  $('.bg1').on('click', function(){
     $('.bg1').slideUp();
  });

  $('.bg2').on('click', function(){
     $('.bg2').slideUp();
  });

  $('.bg3').on('click', function(){
     $('.bg3').slideUp();
  });

  $('.bg4').on('click', function(){
     $('.bg4').slideUp();
  });
});
これを、thisを使って書き換えると↓のようになる
*/

// $(function(){
//   $('.box1').on('click', function(){
//     $(this).slideUp(); //クリックされた要素をスライドアップ（this=クリックされた要素）
//   });
// });


/*----------------------------childrenとは----------------------------*/
// HTML要素直下のすべての子要素を取得するときに使う
$(function(){
  $('button').on('click', function(){
     $('ul').children().css('color', 'red'); //クリックされた要素直下のすべての子要素を赤に変える
  });
});

