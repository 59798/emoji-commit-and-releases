絵文字コミットについて
---

<p align="right">
  <a href="https://travis-ci.org/59798/emoji-commit-and-releases">
    <img src="http://img.shields.io/travis/59798/emoji-commit-and-releases.svg?style=flat-square">
  </a>
</p>

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

ふろく
---
* `npm version`

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
