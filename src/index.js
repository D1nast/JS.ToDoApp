import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  alert(inputText);
};
//HTMLのIDを取得する
//様々なユーザーからのクリックに対して実行する機能
//addEventListener(種類, 関数, false);
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd);
