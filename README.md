# site_base

ディレクトリ構成

```
│  gulpfile.js //sassの出力設定
│  index.html
│  package-lock.json
│  package.json //npmパッケージ構成
│  README.md //このデータ
│  webpack.config.js //jsの出力データ
│  
├─dist //ビルド
│  ├─css 
│  └─js
├─ejs //EJSファイル
│  │     index.ejs
│  │    
│  └─template-parts //共通テンプレート
│         _header.ejs //ヘッダー
│         _footer.ejs //フッター
│ 
├─fonts //icomoonのアイコン格納
└─src
    ├─js
    │  │ main.js
    │  │  
    │  └─module
    │      fixViewport.js //375px以下のビューポートを固定
    │      setAnimation.js //アニメーションの発火
    │      observeNavgation.js //ナビゲーションの位置取得
    │      accordion.js //アコーディオンメニュー
    │      webFont.js //WEBフォント同期出力        
    │          
    └─scss
        │  main.scss
        │  swiper-bundle.min.scss
        │  
        ├─component //コンポーネント
        │      _index.scss
        │      
        ├─foundation //全体に使うの緩やかなスタイル
        │      _body.scss //全体に使う緩やかなスタイル
        │      _index.scss
        │      _reset.scss //Reset
        │      _root.scss //CSS変数など
        │      
        ├─global //変数・ミックスイン等 @fowardで関連付け
        │  │  _index.scss
        │  │  
        │  ├─mixin //ミックスイン
        │  │   _hover.scss //ホバーのミックスイン
        │  │   _index.scss 
        │  │   _media.scss //メディアクエリのミックスイン
        │  │   _utility.scss //ユーティリティクラス出力用
        │  │      
        │  └─settings //主に全体で使う設定
        │      _icomoon.scss //icomoon
        │      _index.scss
        │      _keyframes.scss //アニメーション
        │      _variable.scss //色やユーティリティクラスの出力数
        │          
        ├─layout //位置関係
        │      _index.scss
        │      
        ├─project //主に使い切りのクラス
        │      _index.scss
        │      
        └─utility //ユーティリティクラス
                _color.scss //背景、文字、線の色
                _flex.scss //flex
                _font.scss //文字のサイズ、ウェイト、文字配置、文字間、行間
                _index.scss
                _interaction.scss //インタラクションアニメーション
                _margin.scss //余白
                _media.scss //メディアクエリ
                _position.scss //ポジション
                _size.scss //要素サイズ
```

### メディアクエリ

```
default
md →　screen and (min-width: 701px)
lg →　screen and (min-width: 1201px)
```

## remの初期値

```
defalut         → 1rem = 2.5vw
min-width:701px → 1rem = 10px

font-sizeはbodyで1.6rem
```

### 余白

```
$spaceEndValueで繰り返し数を設定

default
$spaceEndValue = 20

クラス名の10 = 1rem
mt{number} 10～200 (10ずつ)　→　margin-top
mb{number} 10～200 (10ずつ)　→　margin-bottom
pt{number} 10～200 (10ずつ)　→　padding-top
pb{number} 10～200 (10ずつ)　→　padding-bottom
mAuto = margin auto

※末尾に-{mediasize}でスタイル上書き
mt10-{mediasize}
```

### 色指定

```
bg{color} //背景色
txt{color} //文字色
bdr{color} //線の色
```

### 文字配置

```
alignCenter
alignLeft
alignRight
alignJustify

※末尾に-{mediasize}でスタイル上書き
alignCenter-{mediasize}
```

### 文字関係

```
サイズ
fs{number} 10~50
fs10 = 1rem
fs16 = 1.6rem = 16px

ウエイト
fw{number} 1~9

行間
lh{number} 0~20

※lhのみ末尾に-{mediasize}でスタイル上書き
lh10-{mediasize}

文字間
ls{number} -10~10

```

### 表示切替

```
u-disp-{mediasize}  　→　display block
u-inline-{mediasize}　→　display inline
u-ib-{mediasize}      →　display inline-block
u-none-{mediasize}　  →　display none
u-flex-{mediasize}    →　display flex
u-grid-{mediasize}    →　display grid
```

## 環境構成

### npm install

でOK

## ビルドコマンド

### npm run build

sassとjsとhtmlを出力する（圧縮版）

### npm run build:js

jsのみを出力する（圧縮版）

### npm run watch

jsのwatchモード（あんまり使ってない）

### npm run ejs

EJSからhtmlを書き出し

### npm run css

cssのみを出力する（無圧縮版、マップ付）

### npm run css:min

cssのみを出力する（圧縮版）
