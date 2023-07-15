## 三目並べのチュートリアル
TypeScript & Create React Appを使いたい。
```zsh
npx create-react-app react-tic-tac-toe --template typescript
```
（脱線）ローカルで作成したいリポジトリをリモートにpushするのにGitHub CLIを使う。
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
