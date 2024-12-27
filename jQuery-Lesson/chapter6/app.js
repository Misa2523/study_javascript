// ６章「イベントを検出しよう」

/*----------------------------CSSメソッドの書き方----------------------------*/
/*
１つのCSSの記述
$('セレクタ').css('background-color', '#0000FF');

複数のプロパティを指定
$('セレクタ').css({
  'プロパティ1': '値1',
  'プロパティ2': '値2',
  :
  :
  'プロパティn': '値n'
});
*/

/*----------------------------div要素のスタイルを変更----------------------------*/
// box1のCSSをjQueryを用いて変更（背景色を青、高さを100pxに変更）
// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });


/*----------------------------アニメーションを追加----------------------------*/
// 上から下へスライド
// $(function(){
//   // ()内の数値で速度を指定(大きいほど遅い)
//   $('.box1').slideDown(2000);
// });

// 下から上へスライド
// $(function(){
//   $('.box1').slideUp(2000);
// });


/*----------------------------要素を表示・非表示----------------------------*/
// 非表示の要素をjQueryで表示させる
// $(function(){
//   // ()内の数値で速度を指定(大きいほど遅い)
//   $('.box1').show(1000);
// });

// 表示されている要素をjQueryで非表示にする
// $(function(){
//   $('.box1').hide(2000);
// });


/*----------------------------確認問題----------------------------*/
/*要素を上から下へスライドさせた後、
赤色の正方形を青色の長方形（幅200px、高さ100px）に変更。
その後、下から上へスライドされるようにする。*/
$(function (){
  $('.box1').slideDown(1000, function (){
    $('.box1').css({
      'background-color': '#0000FF',
      'width': '200px',
      'height': '100px'
    }).slideUp(1000);
  });
});
/* 解説：JavaScriptでは引数の中に関数を入れることができる。
slideDown()の引数にfunctionを書き加えると、スライドダウンした後にfunctionを実行できる。*/


// ↓動作ごとにまとめたもの
// $(function(){
//   $('.box1').slideDown(1000);
// });

// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'width': '200px',
//     'height': '100px'
//   });
// });

// $(function(){
//   $('.box1').slideUp(1000);
// });