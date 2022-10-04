import "./styles.css";

const onClickAdd = () => {
  //入力欄をクリア
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  alert(inputText);

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  //li生成
  const li = document.createElement("li");
  li.innerText = inputText;
  //divの子要素にli
  div.appendChild(li);
  //divを子要素にする
  document.getElementById("incomplete-list").appendChild(div);
};
//HTMLのIDを取得する
//様々なユーザーからのクリックに対して実行する機能
//addEventListener(種類, 関数, false);
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd);
