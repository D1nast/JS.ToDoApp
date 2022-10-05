const onClickAdd = () => {
  //入力した値をTodoリストに追加するための処理
  //createIncompleteListはTodoリストを作成する処理
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};
/////////////////////////////
// JSでTodoリストに追加するHTML /
// <div class=list-row>     /
//   <li>To Do</li>         /
//   <button>完了</button>   /
//   <button>削除</button>   /
// </div>                   /
/////////////////////////////

//未完了リストから削除する関数
//引数"target"はこの未完了リストから削除する機能を沢山使うので便宜的に設定
//【例】deleteFromIncompletelist(completeButton.parentNode);
//完了ボタンの親要素list-rowの子要素全てを削除する(li,button)
const deleteFromIncompletelist = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
//(text)として入れた値がこの処理内でtextとして扱われる
//【例】createIncompleteList("あ");
//この場合は、textは文字列の「あ」になる
//li.innnerText=textは「あ」
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  //li生成
  const li = document.createElement("li");
  li.innerText = text;

  //完了ボタンの作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  //完了ボタン押した時の処理
  //{}は４３～６９行目まで関数処理
  //作成したli.innnerText等は位置が指定されていないため、
  //最後のappendchildで位置
  completeButton.addEventListener("click", () => {
    deleteFromIncompletelist(completeButton.parentNode);
    //完了リストに追加
    //firstElementChildは親要素の下にある最初の子要素（li）
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    const li = document.createElement("li");
    li.innerText = text;

    //戻すボタン
    //div以下の要素を除去・liの値を取得して未完了リストを再作成する
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      //未完了リストに追加
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });
    //子要素に追加
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });
  //削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompletelist(deleteButton.parentNode);
  });
  //divの子要素を作成
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  //divを子要素にする
  document.getElementById("incomplete-list").appendChild(div);
};
//HTMLのIDを取得する
//様々なユーザーからのクリックに対して実行する機能
//addEventListener(種類, 関数, false);
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
