const toggleModeButton = document.getElementById("toggleModeButton");
const body = document.body; // body要素全体を取得

// 初期状態をライトモードにする
body.classList.add("light-mode");

toggleModeButton.addEventListener("click", function () {
  // body要素に'dark-mode'クラスがあれば削除し、なければ追加する
  body.classList.toggle("dark-mode");

  // 'light-mode'クラスも同時に切り替える
  // もしdark-modeが有効になったらlight-modeを削除、そうでないなら追加
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("light-mode");
  } else {
    body.classList.add("light-mode");
  }
});
