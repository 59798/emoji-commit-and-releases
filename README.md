絵文字コミットについて
---

<p align="right">
  <a href="https://travis-ci.org/59798/emoji-commit-and-releases">
    <img src="http://img.shields.io/travis/59798/emoji-commit-and-releases.svg?style=flat-square">
  </a>
</p>

[conventional-changelog-atom/convention.md](https://github.com/conventional-changelog/conventional-changelog-atom/blob/master/convention.md)
---
| emoji | raw | 説明(類似する[angular-commit-type]) |
|:---:|---|---|
| :bug:                | `:bug:`               | バグ修正 (`fix`)
| :arrow_up:           | `:arrow_up:`          | 依存の更新 (影響度による)
| :arrow_down:         | `:arrow_down:`        | 依存のバージョン調整 (同上)
| :lock:               | `:lock:`              | セキュリティに関する変更 (`fix`)
| :racehorse:          | `:racehorse:`         | パフォーマンス改善 (`perf`)
| :non-potable_water:  | `:non-potable_water:` | メモリリーク修正 (`perf`)
| :penguin:            | `:penguin:`           | `Linux`に関する修正 (`fix`)
| :apple:              | `:apple:`             | `OSX`に関する修正 (`fix`)
| :checkered_flag:     | `:checkered_flag:`    | `Windows`に関する修正 (`fix`)
| :art:                | `:art:`               | リファクタリングやコード形式の変更 (`refactor` or `style`)
| :memo:               | `:memo:`              | ドキュメント追加、変更（誤字脱字修正ふくむ）(`docs`)
| :fire:               | `:fire:`              | コードかファイルの削除(`chore`)
| :white_check_mark:   | `:white_check_mark:`  | テストを追加 (`test`)
| :green_heart:        | `:green_heart:`       | CIに関する修正 (`chore`)
| :shirt:              | `:shirt:`             | linterの警告を修正(`refactor` or `style`)

**うち、patchに該当するもの**
:arrow_up: :arrow_down: :bug: :lock: :racehorse: :non-potable_water: :penguin: :apple: :checkered_flag:

**うち、minorに該当するもの**
:arrow_up: :arrow_down:

**該当しない（いわゆる`chore`）**
:art: :memo: :fire: :white_check_mark: :green_heart: :shirt:

非公式（筆者が推奨したい追加のemoji）
---

| emoji | raw | 説明(類似する[angular-commit-type]) |
|:---:|---|---|
| :wrench: :package:	         | `:wrench:` `:package:`           | 開発環境の整備、変更。(`chore`)
| :heavy_plus_sign: :sparkles: | `:heavy_plus_sign:` `:sparkles:` | 機能追加(`feat`)
| :heavy_minus_sign: :zap:     | `:heavy_minus_sign:` `:zap:`     | 機能削除(`BREAKING CHANGE`)
| :lipstick:                   | `:lipstick:`                     | cssなどのGUIに関する調整(影響度による)。
| :globe_with_meridians:       | `:globe_with_meridians:`         | 言語に関する変更(影響度による)
| :copyright:                  | `:copyright:`                    | ライセンスに関する変更(`chore`)
| :construction:               | `:construction:`                 | 作業中(N/A)

**うち、patchに該当するもの**
:globe_with_meridians: :lipstick:

**うち、minorに該当するもの**
:globe_with_meridians: :lipstick: :heavy_plus_sign: :sparkles: :heavy_minus_sign: :zap:

**該当しない（いわゆる`chore`）**
:globe_with_meridians: :lipstick: :wrench: :package: :copyright: :construction:

[angular-commit-type]: https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#type

コミットを書くときの留意点
---
  * emojiが増えすぎないように気をつける

    [releases](https://github.com/59798/emoji-commit-and-releases/releases/tag/v0.0.1)を見ると分かるが、あまりにemojiを使いすぎるとかえって読みづらくなる。

    `chore`, `feat`, `fix` に使うemojiをあらかじめ決めておくこと。

  * コミットメッセージにはWhy（動機、原因）を含めることが望ましい。

    コミットの情報量を増やすこと。

    ```bash
    # bad
    git commit -m ':wrench: file.txtを追加（なぜ？）'

    # good
    git commit -m ':white_check_mark: testのfixtureとしてfile.txtを追加'

    # bad
    git commit -m ':wrench: file.txtを削除（なぜ？）'

    # good
    git commit -m ':fire: テストで使用しなくなったfile.txtを削除'
    ```

参考文献
---
* [conventional-changelog-atom/convention.md](https://github.com/conventional-changelog/conventional-changelog-atom/blob/master/convention.md)

  基本。コミット先頭に絵文字を使用した場合、[`github/releases`](https://github.com/59798/emoji-commit-and-releases/releases)には、箇条書きでグループ化して出力する。

  `npm version`で`package.json:version`を更新し、`git tag v0.0.1`が自動で実行され、新しいコミット`v0.0.1`を作成する。

  そして、`package.json`に定義した`postversion`を実行してコミットのpushおよび、`github/releases`の更新を行う。

  > [npm version, preversion, postversionの使い分け - htanjo/Qiita](http://qiita.com/htanjo/items/d16d8531bc22e0a43217)

  ```bash
  npm version patch

  # v0.0.1
  # > emoji-commit-and-releases@0.0.1 postversion /Users/59naga/Downloads/emoji-commit-and-releases
  # > git push --follow-tags && conventional-github-releaser -p atom -r 0
  #
  # ...
  # * [new tag]         v0.0.1 -> v0.0.1
  ```

* [体言止めにする](https://gist.github.com/p1ch-jp/2912dc157b53449f7d1b#体言止めにする)
  > Use the present tense ("Add feature" not "Added feature")

  の日本語的解釈。

* [p1ch-jp/emoji-commit-message-guideline.md](https://gist.github.com/p1ch-jp/2912dc157b53449f7d1b)

  `:sparkles:` :sparkles: は、[angularの`feat`](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#type)の代用として使えそうに見える。

* [GitHubで絵文字コミットを続けてみて有用だったEmojiまとめ](http://mzyy94.com/blog/2015/10/14/emoji-commit-message/)

  ほか、分かりやすい絵文字集

* [Commit Message Format - conventional-changelog-angular/convention.md](https://github.com/conventional-changelog/conventional-changelog-angular/blob/master/convention.md#commit-message-format)

  Angularのコミットメッセージ規約。atomのように絵文字を使わないが、分類の仕方が洗練されている。また、`scope`を使って変更対象を明確に表現できる。[原文](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#type)

* [npmで成果物をsemantic-release :rocket: - azu](http://azu.github.io/slide/niku_sushi/npm-semantic-release.html)

  > Q. どうやってバージョンを決める?
  > A. コミットメッセージを見て`feat`があるなら`minor`、`fix`なら`patch`と解析してsermverで自動的にあげる

ふろく
---
* `npm version`

  * `patch`: **調整**。バグ修正、性能改善、動作の小さな変更、セキリティ修正など、`minor`でない粒度のもの
  * `minor`: **変更**。機能追加、機能削除、破壊的変更（`BREAKING CHANGE`）
  * `major`: **リニューアル**。 APIの大掛かりな変更。デザインの一新。１からプロジェクトを作りなおした時など

  ```bash
  mkdir foo && cd foo
  git init && npm init -y
  # { ... "version": "1.0.0", ... }

  npm version patch
  # v1.0.1
  npm version prepatch
  # v1.0.2-0
  npm version prerelease
  # v1.0.2-1
  npm version patch
  # v1.0.2

  npm version preminor
  # v1.1.0-0
  npm version prerelease
  # v1.1.0-1
  npm version minor
  # v1.1.0

  npm version premajor
  # v2.0.0-0
  npm version prerelease
  # v2.0.0-1
  npm version major
  # v2.0.0

  npm version prerelease
  # v2.0.1-0
  npm version prerelease
  # v2.0.1-1

  git log --oneline
  # 160b19a 2.0.1-1
  # 16b3a14 2.0.1-0
  # 54f6115 2.0.0
  # c147134 2.0.0-1
  # 3078dc3 2.0.0-0
  # d19f800 1.1.0
  # 361a4ce 1.1.0-1
  # f5e280e 1.1.0-0
  # 78f78fd 1.0.2
  # 6d1acab 1.0.2-1
  # ce787fc 1.0.2-0
  # 6350d55 1.0.1
  ```

License
---
[MIT](http://59naga.mit-license.org/)
