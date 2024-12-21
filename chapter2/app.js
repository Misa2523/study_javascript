// ２章「JavaScriptの基本文法」

let hello = 'Hello World'; // let 変数名 = 内容;
alert(hello);


/* その他の書き方 （それぞれの記述の後にalert(変数名);を追記すれば、アラートウィンドウに指定した値が表示される）*/
let int1 = 1; // 整数を代入
let int2 = -10; // 負数を代入
let float1 = 3.14;  // 小数点を代入
let str1 = 'JavaScriptを覚えよう';  // 文字列を代入


/* 四則演算の書き方 */
alert(4 + 3);
alert(8 - 5);
alert(2 * 6);
alert(10 / 2);


/* 文字列を結合する */
alert('Hello' + 'World');

/* 変数を利用した文字列の結合 */
let str2 = 'Hello'
let str3 = 'World!!'
alert(str2 + str3);



/* 条件分岐 */
let orange = 100;
let apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
} else if(orange == apple){
  alert('みかんとりんごが同じ値段');
} else{
  alert('みかんの値段がりんごより高い');
}


/* 繰り返し処理（while文） */
/* 条件式が真(true)なら制限なく繰り返す */
let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です')


/* 繰り返し処理（do...while文） */
/* 条件式のtrue/falseに関わらず、最初の１回だけは必ず処理が行われる。そのあと条件式を評価し、繰り返し処理を続けるか/抜けるか、決める */
let num2 = 4;

do {  // 最低１回は行われる処理
  alert(num2);
  num2 = num2 * 4;  // 条件式(while()の()内の部分)が変化する文が必要になる
} while(num2 < 100);    // whileの最後に;が必要！！

alert(num2);


/* 繰り返し処理（for文） */
/* 決められた回数だけ繰り返す */
let i;
let num3 = 0;

for(i = 1; i < 11; i++){
  num3 = num3 + i;
}

alert('1から10まで足し算した結果は' + num3 + 'です');