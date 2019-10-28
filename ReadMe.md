# horizontalなサイトの勉強用リポジトリ

# 環境
eslint,
webpack,
scss("css-loader": "^3.2.0",
    "node-sass": "^4.13.0",
    "sass-loader": "^8.0.0",
    "style-loader": "^1.0.0")
jquery

## jqueryはやめた

wheelのイベント発火でy軸のスクロールを元にbodyをtranslateする実装になっている。
しかし、スマホのフリックには対応していない。

2015,6年ころの記事ではiscroll.jsというライブラリの紹介が多数ある。drawer.jsというjqueryライブラリと組み合わせて実装されていたサイトが多いのだろうか。
githubのcommitは2017.1が最後。2018.12にqiitaでレガシーとしながらも、不具合解消記事あり。
わざわざ選ぶものではなさそう。

horizontal　scrollにはwhite-space method と flexbox methodの２つがあるとして（gridも）説明したサイト。iosのスクロールに関する内容は知らなかった。
https://codeburst.io/how-to-create-horizontal-scrolling-containers-d8069651e9c6

## Answer
### 4パターン考えられる

#### jqueryでの実装。

そんなに手がかからないが、わざわざ選ぶだろうか？

#### iscroll.jsによるレガシー技術対応。

更新されていないライブラリをわざわざ選ぶだろうか？

#### pcにwheelにはjsで対応（このリポジトリの最初のver/cssも上記white-space or flexbox methodなのでsp問題なし）。カクつきはあるけれどdurationと計算で慣性を演出すれば問題なし。

これが現実的な気がする。

#### 最終リポジトリ(bodyにfixスタイル、wheelで発火しtranslateで移動)にflick入力の検知（ライブラリありそう）を追加。

このやり方は想定したデバイス環境では完璧だが、無理やり感もある。判断がつかないが、色々の環境テストができないという点かららとるべきではないor同様のことを行っているライブラリを探して導入するのが良いと思う。ありそう。