# Next.js のプロジェクトテンプレート

## ファイルレイアウト

* プロジェクトを進めつつ必要に応じてディレクトリの追加を検討する

```
.
├── components // 再利用可能なコンポーネント
├── pages // https://nextjs.org/docs/basic-features/pages
├── lib // pages で記述される操作のうち抽象化した方が良いもの
├── tests // ユニットテスト用ファイル
|── next.config.js // nextjs の設定ファイル
├── tsconfig.json // typescript 設定ファイル
├── jest.config.js // jest 設定ファイル
├── jest.setup.js // jest.config.js から参照される
```

## 依存関係のインストール

```
$ yarn install
```

### ライブラリの追加・削除

* 必要に応じてライブラリの追加・削除を検討する

```
例）
$ yarn add mysql2
$ yarn add jest --dev # dev dependency
```

## ローカルでの実行

* `.env` 以外 (`.env.local`, `.env.production`, `.env.test`)は利用しない
  * [参考](https://nextjs.org/docs/basic-features/environment-variables)
  * 外部スクリプト側から `.env` を参照しているため

```
$ npx next dev
```

## ユニットテスト

* Testing Framework には jest を利用
* `-i` オプションを付け直列でテストを実行する
  * ローカルの DB 状態を制御できないため
  * テストケースを並列で処理できるようにするのが今後の課題

```
$ npx jest -i --silent
# coverage が必要の場合
$ npx jest -i --coverage
# 単一のファイルをテストしたい場合（例：hoge.test.ts )
$ npx jest -i hoge.test
```

### API Route のテストについて

* [こちらの記事を参照](https://zenn.dev/takepepe/articles/testing-gssp-and-api-routes)
* [next-test-api-router-handler](https://www.npmjs.com/package/next-test-api-route-handler)

## ビルド＆実行

```
$ npx next build && npx next start
```
