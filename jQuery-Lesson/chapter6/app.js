// ６章「イベントを検出しよう」


// イベント：「クリックする」「マウスを移動する」などのように、ブラウザ上でユーザーが実行する動作のこと

/*【イベントの記述】
$('.セレクタ名').イベント名(function(){
  イベント発生時に行われる処理
});
*/

/*----------------------------「マウスオーバー」イベント、「マウスアウト」イベント----------------------------*/
/*
マウスオーバー：HTML要素上にマウスカーソルが重なっている状態
マウスアウト：HTML要素からマウスカーソルが外れること
*/


// jQueryで「マウスオーバー」イベントを設定
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color': '#0000FF'}); //マウスオーバーしたら青に変わる
//   });
// });

// 「マウスアウト」イベントを設定
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color': '#0000FF'}); //マウスオーバーしたら青に変わる
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color': '#FF0000'}); //マウスアウトしたら赤に戻る
//   });
// });


// class属性を追加する/解除する
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext'); //マウスオーバーしたら.box1-extのclassが追加される
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext'); //マウスアウトしたら.box1-extのclassが外れる
//   });
// });

/*addClass( )では、対象のHTML要素にclass属性を追加する
removeClass( )では、要素に設定されているclass属性が解除される*/

/*----------------------------「マウスクリック」イベントを設定する----------------------------*/
/*
マウスクリックのイベントには、.click()もあるが、これはクリックされた時点でイベントが終了してしまう。
クリック後に複数のイベントが行われるようにするため、onをつけた以下の記述を使う。

【マウスクリックイベントの記述】
$('.セレクタ名').on('click', function(){
  イベント発生時に行われる処理
});
*/

$(function(){
  $('.box1').on('click', function(){
     $('.box1').addClass('box1-ext'); //.box1がクリックされたら、box1-extのclassを追加
  });
  $('.box1').mouseout(function(){
     $('.box1').removeClass('box1-ext'); //マウスアウトされたら、box1-extのclassを削除
  });
});

