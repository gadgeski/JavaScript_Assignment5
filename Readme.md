目的：今後 TypeScript や React にスケールする為の準備段階
使用技術： JavaScript/CSS/HTML

<h1>HTML コードの解説</h1>
HTML はウェブページの構造を作る言語です。このコードでは、ウェブページの基本的な内容と、CSS（見た目の設定）と JavaScript（動きの設定）を読み込む設定をしています。

<h3>!DOCTYPE html</h3>: この文書がHTML5の形式であることをブラウザに伝えます。
<h3>html lang="ja"</h3>: HTML文書の始まりで、言語が日本語であることを示しています。
<h3>head</h3>: ウェブページには表示されないけれど、重要な情報（ページのタイトルや読み込むファイルなど）を記述する部分です。
<h3>meta charset="UTF-8"</h3>: 文字化けを防ぐためのおまじないです。
<h3>meta name="viewport" content="width=device-width, initial-scale=1.0"</h3>: どんなデバイス（スマホやPCなど）で見ても、適切に表示されるように設定しています。
<h3>title</h3>: ブラウザのタブに表示されるページのタイトルです。
<h3>link rel="stylesheet"</h3>>: style.cssという名前のCSSファイルを読み込んで、ページの見た目を設定します。
<body>: ウェブページに実際に表示される内容を記述する部分です。
<h3>div class="container"</h3>: このdiv要素は、中に含まれる要素をまとめるための「箱」のようなものです。containerというクラス名がついています。
    <h3>div class="box"</h3>モード切り替え対応</div>: 「モード切り替え対応」というテキストが入った「箱」です。boxというクラス名がついています。
    <h3>p</h3>下のボタンをクリックして、ライトモードとダークモードを切り替えてみましょう。</p>: 説明の文章です。
    <h3>button id="toggleModeButton"</h3>: 「モード切り替え」と書かれたボタンです。toggleModeButtonというid（識別名）がつけられており、JavaScriptでこのボタンを特定するために使われます。
  <h3>script src="script.js"</h3>: script.jsという名前のJavaScriptファイルを読み込んで、ページに動き（今回はモード切り替え）を追加します。

<h1>CSSコードの解説</h1>
CSSはHTMLで作られたウェブページの見た目（色、配置、サイズなど）をデザインする言語です。このコードでは、ページ全体や各要素のスタイル、特にライトモードとダークモードの切り替えに関するスタイルが定義されています。
 <h3>body</h3>: ページ全体のスタイルを設定しています。
   * width: 100%;: 幅を100%に設定。

- background: url(img/Stylish_Marble2025_3.png) no-repeat;: 背景に画像を設定し、繰り返し表示しないようにしています。

- background-size: cover;: 背景画像を要素全体を覆うように拡大・縮小します。

- font-family: Arial, sans-serif;: フォントの種類を設定しています。

- display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0;: ページの内容を画面の中央に配置するための設定です。

- transition: background-color 0.5s ease, color 0.5s ease;: 背景色や文字色が変化する際に、0.5 秒かけてゆっくりと切り替わるように設定しています。

- LightMode:

  - body.light-mode: body 要素に light-mode というクラスが付いているときのスタイルです。

    - background-color: #f8f9fa;: 背景色を薄いグレーに設定。

    - color: #212529;: 文字色を濃いグレーに設定。

- DarkMode:

  - body.dark-mode: body 要素に dark-mode というクラスが付いているときのスタイルです。

    - background-color: #343a40;: 背景色を濃いグレーに設定。

    - color: #f8f9fa;: 文字色を薄いグレーに設定。

- .container:

  - background-color: white;: 背景色を白に設定。

  - padding: 30px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);: 内側の余白、角の丸み、影の設定です。

  - text-align: center;: テキストを中央寄せに設定。

  - transition: background-color 0.5s ease, box-shadow 0.5s ease;: 背景色や影の変化を 0.5 秒かけてスムーズにする設定です。

  - body.dark-mode .container: body がダークモードの時に.container に適用されるスタイルです。背景色と影が変化します。

- h1, p: 見出し（h1）と段落（p）の余白や行間を設定しています。

- Button:

  - button: ボタンのスタイルを設定しています。

    - padding: 10px 25px; font-size: 17px;: 内側の余白と文字の大きさを設定。

    - background-color: #6c757d; color: white;: 背景色をグレー、文字色を白に設定。

    - border: none; border-radius: 5px; cursor: pointer;: 枠線なし、角を丸く、マウスカーソルを指の形にする設定です。

    - transition: background-color 0.3s ease;: 背景色の変化を 0.3 秒かけてスムーズにする設定です。

  - button:hover: ボタンにマウスを乗せたときのスタイルです。背景色が少し濃くなります。

- Box:

  - .box: 「モード切り替え対応」と書かれたボックスのスタイルです。

    - width: 720px; height: 480px;: 幅と高さを設定。

    - margin: 13% auto 0;: 上に 13%の余白、左右は自動で中央寄せ、下は 0 の余白。

    - display: flex; align-items: center; justify-content: center;: 中のテキストを中央に配置。

    - color: #dcdcdc; font-size: 32px; font-weight: bold;: 文字の色、サイズ、太さを設定。

    - position: relative;: 子要素の配置基準点となるように設定。

    - transition: 0.4s;: 変化を 0.4 秒かけてスムーズにする設定。

  - .box::before, .box::after: box 要素の四隅に装飾的な線を表示するための擬似要素です。

    - content: "";: 擬似要素に内容がないことを示します。

    - width: 50px; height: 50px;: 幅と高さを設定。

    - border-top: 2px solid rgba(179, 186, 191, 0.5);: 上の枠線などを設定（色は半透明のグレー）。

    - position: absolute;: 親要素（.box）を基準に配置。

    - top: -1px; left: -1px; や bottom: -1px; right: -1px;: 位置を調整して四隅に配置します。

    - transition: 0.4s; transition-delay: 0.5s;: 変化を 0.4 秒かけてスムーズに、0.5 秒遅れて開始する設定です。

  - .box:hover:before, .box:hover::after: マウスが box に乗ったときに、四隅の線が拡大してボックス全体を囲むように変化します。

  - .box:hover: マウスが box に乗ったときに、背景が半透明のグレーになり、backdrop-filter: blur(15px);で後ろがぼける効果（すりガラスのような効果）が適用されます。

<h1>JavaScriptコードの解説</h1>
JavaScriptはウェブページに動きやインタラクション（ユーザーの操作に対する反応）を追加する言語です。このコードでは、ボタンがクリックされたときに、ページの表示モード（ライトモードとダークモード）を切り替える処理をしています。
 * const toggleModeButton = document.getElementById("toggleModeButton");:
   
   * document.getElementById("toggleModeButton")は、HTMLの中でidがtoggleModeButtonとつけられた要素（今回は「モード切り替え」ボタン）を探し出して取得します。
   
   * const toggleModeButton = ...;で、取得したボタンをtoggleModeButtonという名前の定数（一度値を設定したら変更できない変数）に保存しています。

- const body = document.body;:

  - document.body は、HTML 文書の<body>要素全体を取得します。
  - これも body という定数に保存しています。

- body.classList.add("light-mode");:

  - ページの読み込み時（初期状態）に、body 要素に light-mode というクラスを追加しています。これにより、最初にページが表示されたときはライトモードのスタイルが適用されます。

- toggleModeButton.addEventListener("click", function () { ... });:

  - これは、toggleModeButton（「モード切り替え」ボタン）が「クリック」されたときに、function () { ... }の中の処理を実行するように設定するコードです。これをイベントリスナーと呼びます。

- イベントリスナーの中の処理:

  - body.classList.toggle("dark-mode");:

    - body.classList.toggle("dark-mode")は、body 要素に dark-mode というクラスが付いていれば削除し、付いていなければ追加するという非常に便利なメソッドです。これにより、クリックするたびにダークモードのオン/オフが切り替わります。

  - if (body.classList.contains("dark-mode")) { ... } else { ... }:

         * これは、現在のbody要素にdark-modeクラスが含まれているかどうかを確認する条件分岐です。

         * if (body.classList.contains("dark-mode")): もしdark-modeクラスがbody要素に付いていれば（つまり、ダークモードが有効になったら）...

           * body.classList.remove("light-mode");: light-modeクラスを削除します。

         * else: そうでなければ（つまり、ダークモードが無効になったら＝ライトモードに戻ったら）...

           * body.classList.add("light-mode");: light-modeクラスを追加します。

    この JavaScript コードは、ボタンがクリックされるたびに body 要素のクラスを切り替えることで、CSS で定義されたライトモードとダークモードのスタイルを適用・解除し、ページの見た目を変化させています。
