## 三目並べのチュートリアル
TypeScript & Create React Appを使いたい。
```zsh
npx create-react-app react-tic-tac-toe --template typescript
```
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