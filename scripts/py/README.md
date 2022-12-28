# python application

 ウェブアプリケーション API から非同期で実行される python アプリケーションが存在しており、このアプリケーションのプロジェクトは [poetry](../../doc/development.md) で管理されていた。web app 側の API からは、外部コマンドとして `poetry run` でスクリプトが実行されている。


## 依存パッケージのインストール

```
$ poetry install
```

## スクリプトの実行

* [.env](../../webapp/README.md#ローカルでの実行) を設定
* [コマンドの参照はこちら](https://python-poetry.org/docs/cli/#run)

```
$poetry run python -m mfbks_calc.{モジュール名}
```

## ユニットテストの実行

```
$ poetry run python -m pytest --cov
```

## Linter の実行

* `.flake8` のルールは開発を行いながらアップデートを行う

```
$ poetry run flake8
```

## パッケージの追加

* [こちら](https://python-poetry.org/docs/cli/)を参照

```
例）
$ poetry add requests pendulum
$ poetry add pytest -G dev
```
