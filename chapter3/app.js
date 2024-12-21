// ３章「関数」

/* 引数：入力する値、戻り値：出力される値
function 関数名(引数){
  処理
  return 戻り値;
}*/

/*------------------作成した関数を呼び出す------------------*/
// メイン部分
let alertString;

// 作成した関数を呼び出し、変数へ格納
alertString = addString("WebCamp");

// 変数の中身をアラートで表示
alert(alertString);

// 文字列を結合する関数
function addString(strA){
  let addStr = "Hello" + strA;
  return addStr;
}

/*------------------複数の関数で表示できるようにする------------------*/
// じゃんけんの手を入力してもらうプロンプト欄を生成（入力ダイアログ）
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){ //nullはキャンセルボタンの判定
  alert('グー・チョキ・パーのいずれかを入力してください');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}

// じゃんけんの手をランダムに生成する関数の呼び出し
let is_hand = getJShand();

// ユーザーの手とJavaSciptのじゃんけんを手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, is_hand);

// 結果の表示
if (user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + is_hand + 'です。\n結果は' + judge + 'です。');
}
else{
  alert("またチャレンジしてね");
}

// ランダムでじゃんけんの手を生成する関数
function getJShand(){
  // 乱数を生成する関数を設定
  let js_hand_num = Math.floor(Math.random() * 3); // 0~2までのランダムば整数値を生成
  let hand_name;

  // ランダム生成された数値を基に条件分岐させ、グーチョキパーを出し分ける
  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

// ユーザーの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}