# Eisuke Watanabe's Portfolio - Frontend -
>### ポートフォリオの基本方針

* 可読性、メンテナンス性などを考慮し作成を行うことを基本とする
* 第三者にも見やすく、汎用的なマークアップを心がける
* 新しい機能を用いる場合、レガシーブラウザにも配慮する


## 仕様内容
>### Webpackの実行処理
#### JavaScript
* jsのES6(ES2015)をES5へ変換（Babelでトランスパイル）＆バンドル　(src/js/ → docs/javascripts/)
* バンドルしたJavascriptを圧縮(minify)
* 外部モジュールからjQueryファイルの読み込み
* ESLintとPrettierを連携させてコードの検証と整形を行う

#### SCSS
* SCSSをCSSに変換＆バンドル （src/scss/ →　docs/stylesheets/)
* SCSSから変換したCSSを圧縮
* ベンダープレフィックスを自動付与
* 省略記法を用いた@importファイルの読み込み

#### HTML
* CSSとJavascriptを読み込んだHTMLを出力　(src/html/index.html →　docs/html/index.html) 

#### ビルドコマンド
* yarn start  (開発環境用)　→　ローカルサーバーが立ち上がる
* yarn prod   (本番用）　　 →　本番資材をdocs配下に出す
<br><br><br>
>### CSS設計の採用
【命名規則・コーディング規則】
#### SCSS
#### -FLOCSS-
FLOCSSは、OOCSS,SMACSS,BEM,SuitCSSといった既存の設計思想を組み合わせたものがベースとなっており、可読性、メンテナンス性を向上させる
<table>
    <tr>
        <td><b>レイヤー</b></td>
        <td>接頭辞</td>
        <td>役割</td>
    </tr>
    <tr>
        <td><b>foundation</b></td>
        <td></td>
        <td>リセットCSS、要素セレクタ・属性セレクタのような最低限のスタイルを指定するクラス</td>
    </tr>    
    <tr>
        <td><b>layout</b></td>
        <td>l-</td>
        <td>ページを構成する大枠の要素（全ページ共通部分など）に使用するクラス</td>
    </tr>
    <tr>
        <td><b>object</b></td>
        <td></td>
        <td>プロジェクトにおける繰り返されるビジュアルパターンを定義するクラス</td>
    </tr>
    <tr>
        <td><b>component</b></td>
        <td>c-</td>
        <td>複数のページで再利用できる要素に使用するクラス</td>
    </tr>
      <tr>
        <td><b>project</b></td>
        <td>p-</td>
        <td>いくつかのComponentと、他の要素によって構成される大きな単位のモジュールを管理するクラス</td>
    </tr>
    <tr>
        <td><b>utility</b></td>
        <td>u-</td>
        <td>強制的にスタイルを当てる際に使用するクラス</td>
    </tr>
    <tr>
        <td><b></b></td>
        <td>js-</td>
        <td>Javascriptを当てる際に使用するクラス</td>
    </tr>
    <tr>
        <td><b></b></td>
        <td>is-</td>
        <td>クリックなどのイベントが発生している要素に付与するクラス</td>
    </tr>
</table>

#### -BEM-
BEMはブロックごとにモジュール化し、名前空間を持たせるようなことができるようになり、わかりやすく破綻しにくいCSSが書けるようになる
<table>
    <tr>
        <td><b></b></td>
        <td>説明</td>
        <td>接続詞</td>
    </tr>
    <tr>
        <td><b>Block</b></td>
        <td>ページ構成のルートとなる要素</td>
        <td></td>
    </tr>
    <tr>
        <td><b>Element</b></td>
        <td>Blockの構成要素</td>
        <td>(__)アンダースコア２つ</td>
    </tr>
    <tr>
        <td><b>Modifier</b></td>
        <td>変化した状態を表す要素</td>
        <td>(--)ハイフン２つ</td>
    </tr>
</table>

