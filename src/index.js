const onClickAdd = () => {
  //Todoリストを追加する処理
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
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  //li生成
  const li = document.createElement("li");
  li.innerText = text;

  //完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompletelist(completeButton.parentNode);
    //完了リストに追加
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    const li = document.createElement("li");
    li.innerText = text;
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
