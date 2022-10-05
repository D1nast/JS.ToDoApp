const onClickAdd = () => {
  //入力欄をクリア
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  //li生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //完了リストに追加
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    //未完了リストから削除
    deleteFromIncompletelist(completeButton.parentNode);
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

//未完了リストから完了リストへ
const deleteFromIncompletelist = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//HTMLのIDを取得する
//様々なユーザーからのクリックに対して実行する機能
//addEventListener(種類, 関数, false);
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
