## 三目並べのチュートリアル
TypeScript & Create React Appを使いたい。
```zsh
npx create-react-app react-tic-tac-toe --template typescript
```

## アプリの内容に関するメモ
[React三目並べのチュートリアル](https://ja.react.dev/learn/tutorial-tic-tac-toe)。
とりあえず、最後までやったので、最低限の三目並べはプレイできる。

チュートリアルではJavaScriptだが併せて勉強したかったのでTypeScriptにした。

チュートリアル外の機能としては、引き分け判定の追加を行った。あとは昇順・降順ソートとかいまの番手を表示するとかは追加分。

## 本旨とは関係ない諸々のメモ
### GitHub CLIインストール
ローカルで作成したいリポジトリをリモートにpushするのにGitHub CLIを使う。
```zsh
// GitHub CLIがローカルに入ってなかったのでインストール
brew install gh

// インストールできたか確認
gh --version

// 認証。プロトコルはsshにする（httpsも利用可能）。
gh auth login -p ssh

// リモートリポジトリを作成。ローカルの現在のディレクトリを選択する。あとは諸々質問に答えていく。
gh repo create
```

### VSCode内でのプレビュー
エディタ内ブラウザで画面を確認したい。[Preview.js](https://marketplace.visualstudio.com/items?itemName=zenclabs.previewjs)が入ってた（たぶん昔入れた）のでとりあえず使う。

### コード整形をファイル保存時に自動で行う
settings.jsonを最低限、以下のようにするのが良さげ。Prettierが入ってたのでこれを選択。
```json
    "editor.formatOnSave": true,
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
```

### GitHub Copilot ChatとColipot for Docsが学習の伴走者として便利

他の言語・フレームワークは触ったことある初学者だと、ReactやTypeScriptの学習に[GitHub Copilot Chat](https://github.com/github-copilot/chat_waitlist_signup/join)や[Colipot for Docs](https://githubnext.com/projects/copilot-for-docs)が大変便利。業務関係ないから気にせず使えるし、学習の補助線を引いてくれて良い。

