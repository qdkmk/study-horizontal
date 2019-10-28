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

horizontal　scrollにはwhite-space method と flexbox methodの２つがあるとして（gridも）大雑把に説明したサイト。
https://codeburst.io/how-to-create-horizontal-scrolling-containers-d8069651e9c6

## Answer
・jqueryでの実装。

・iscroll.jsによるレガシー技術対応。
・
pcにwheelにはjsで対応（このリポジトリの最初のver/cssも上記white-space or flexbox method）。カクつきはあるけれどdurationと計算で慣性を演出すれば問題なし。

・最終リポジトリにflick入力の検知を追加（ライブラリありそう）

