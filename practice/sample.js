// 「JavaScriptの変数宣言を学ぼう」

/*------------------再宣言------------------*/
// varによる再宣言
var nickname = "taro"
console.log(nickname)
var nickname = "ichiro"
console.log(nickname)

// letによる再宣言（できない）
// let nickname2 = "taro"
// console.log(nickname2)
// let nickname2 = "ichiro"
// console.log(nickname2)

// constによる再宣言（できない）
// const nickname3 = "taro"
// console.log(nickname3)
// const nickname3 = "ichiro"
// console.log(nickname3)


/*------------------再代入------------------*/
// barによる再代入
var nickname4 = "taro"
console.log(nickname4)
nickname4 = "jiro"
console.log(nickname4)

// letによる再代入
let nickname5 = "taro"
console.log(nickname5)
nickname5 = "jiro"
console.log(nickname5)

// constによる再代入（できない）
// const nickname6 = "taro"
// console.log(nickname6)
// nickname6 = "jiro"
// console.log(nickname6)


/*------------------スコープ（有効範囲）------------------*/
/*スコープが広いと意図しない参照からエラーが発生するため、昨今ではletとconstしか使われない。
letは新しい値を再代入する必要がある場合に使い、constは新しい値を再代入する必要がない場合に使う。*/

// varのスコープ
var str = "webcamp"   //グローバルスコープ

function foo(){
  console.log(str)
  var y = "hello"   //関数スコープ（ローカルスコープ）
}
foo()
// console.log(y)  //関数外から呼び出しているためエラーとなる

// letのスコープ
function foo2(){
  let x2 = "webcamp"
  {
    let y2 = "hello webcamp"  //ブロックスコープ（ローカルスコープ）
  }
  console.log(x2)
  // console.log(y2) //ブロック{}外から呼び出しているためエラーとなる
}
foo2()

for(let i = 0; i < 10; i++){
  console.log(i)
}
// console.log(i) //ブロック{}外から呼び出しているためエラーとなる

// constのスコープ
// letと同じブロックスコープになる


/*------------------巻き上げ（ホイスティング）------------------*/
// 変数の巻き上げ＝関数内のどの部分で変数を宣言しても、関数冒頭で変数宣言したことになる
var str2 = "webcamp"

function foo3(){
  console.log(str2)   //↓で値を設定しているため、この段階では初期値が入ってないことになる。よってコンソールに"undefined"と出力される
  var str2 = "dmm webcamp"
  console.log(str2)
}
foo3()

/* letやconstの場合も同様に変数の巻き上げが起こる。
しかし、letやconstでは変数の初期化を行わずに宣言のみした場合、それを参照すると
「Uncaught ReferenceError: Cannot access '変数名' before initialization」
というエラー になる。*/