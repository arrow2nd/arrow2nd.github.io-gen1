<template>
  <section>
    <b-tabs active-nav-item-class="font-weight-bold" align="center">
      <!--Works-->
      <b-tab class="mt-4" active>
        <template v-slot:title>
          <font-awesome-icon :icon="['fas', 'code']" />&nbsp;Works
        </template>
        <b-container fluid="md">
          <b-tabs align="center" pills>
            <!--Game-->
            <b-tab class="mt-2" title="Game" active>
              <b-row>
                <b-col class="my-3" md="6">
                  <b-card
                    title="まーじゃんのようなもの。"
                    sub-title="イカサマなしのぽんこつ麻雀ゲーム"
                    img-src="/static/works/game/mj_3ds_1.webp"
                    img-alt="まーじゃんのようなもの。"
                    img-top
                  >
                    <b-card-body class="p-0 text-right">
                      <router-link to="/mj_3ds">
                        <b-button variant="outline-primary">くわしく</b-button>
                      </router-link>
                      <b-button
                        href="http://wiki.hosiken.jp/petc3gou/?Toukou%2F4%BF%CD%C2%C7%A4%C1%CB%E3%BF%FD%A5%B2%A1%BC%A5%E0%A1%D8%A4%DE%A1%BC%A4%B8%A4%E3%A4%F3%A4%CE%A4%E8%A4%A6%A4%CA%A4%E2%A4%CE%A1%A3%A1%D9"
                        target="_blank"
                        rel="noopener"
                        variant="outline-primary"
                      >
                        <font-awesome-icon :icon="['fas', 'external-link-alt']" />&nbsp;まとめWiki
                      </b-button>
                    </b-card-body>
                  </b-card>
                </b-col>
                <b-col class="my-3" md="6">
                  <b-card
                    title="まーじゃんのようなもの。for Switch"
                    sub-title="のんびり遊べる4人打ち麻雀ゲーム"
                    img-src="/static/works/game/mj_sw_1.webp"
                    img-alt="まーじゃんのようなもの。for Switch"
                    img-top
                  >
                    <b-card-body class="p-0 text-right">
                      <router-link to="/mj_sw">
                        <b-button variant="outline-primary">くわしく</b-button>
                      </router-link>
                      <b-button
                        href="http://wiki.hosiken.jp/petc4/?Toukou%2F%A4%DE%A1%BC%A4%B8%A4%E3%A4%F3%A4%CE%A4%E8%A4%A6%A4%CA%A4%E2%A4%CE%A1%A3for%20Switch"
                        target="_blank"
                        rel="noopener"
                        variant="outline-primary"
                      >
                        <font-awesome-icon :icon="['fas', 'external-link-alt']" />&nbsp;まとめWiki
                      </b-button>
                    </b-card-body>
                  </b-card>
                </b-col>
                <b-col class="my-3" md="6">
                  <b-card
                    title="にゃんこだいせんせぇ"
                    sub-title="問題を『シュッ』と採点する計算ゲーム"
                    img-src="/static/works/game/nyanko_1.webp"
                    img-alt="にゃんこだいせんせぇ"
                    img-top
                  >
                    <b-card-body class="p-0 text-right">
                      <router-link to="/nyanko">
                        <b-button variant="outline-primary">くわしく</b-button>
                      </router-link>
                      <b-button
                        href="https://twitter.com/arrow_2nd/status/1214409406026153984"
                        target="_blank"
                        rel="noopener"
                        variant="outline-primary"
                      >
                        <font-awesome-icon :icon="['fas', 'external-link-alt']" />&nbsp;ツイートを見る
                      </b-button>
                    </b-card-body>
                  </b-card>
                </b-col>
                <b-col class="my-3" md="6">
                  <b-card
                    title="#Syntax"
                    sub-title="プチコンの命令を揃えるパズル"
                    img-src="/static/works/game/syntax_1.webp"
                    img-alt="Syntax"
                    img-top
                  >
                    <b-card-body class="p-0 text-right">
                      <router-link to="/syntax">
                        <b-button variant="outline-primary">くわしく</b-button>
                      </router-link>
                      <b-button
                        href="https://twitter.com/arrow_2nd/status/1297872774577262593"
                        target="_blank"
                        rel="noopener"
                        variant="outline-primary"
                      >
                        <font-awesome-icon :icon="['fas', 'external-link-alt']" />&nbsp;ツイートを見る
                      </b-button>
                    </b-card-body>
                  </b-card>
                </b-col>
              </b-row>
            </b-tab>
            <!--Other-->
            <b-tab class="mt-2" title="Other">
              <b-row>
                <b-col class="my-3" md="6">
                  <b-card
                    title="プロデュースノート！"
                    sub-title="アイドルのプロフィールを検索できるLINEBot"
                    img-src="/static/works/other/produce_1.webp"
                    img-alt="プロデュースノート"
                    img-top
                  >
                    <b-card-body class="p-0 text-right">
                      <router-link to="/produce">
                        <b-button variant="outline-primary">くわしく</b-button>
                      </router-link>
                      <b-button
                        href="https://line.me/R/ti/p/@319rwvnv"
                        target="_blank"
                        rel="noopener"
                        variant="outline-success"
                      >
                        <font-awesome-icon :icon="['fas', 'external-link-alt']" />&nbsp;友だち登録
                      </b-button>
                    </b-card-body>
                  </b-card>
                </b-col>
                <b-col class="my-3" md="6">
                  <b-card
                    title="突然の死ジェネレーター"
                    sub-title="文章をとげとげにするLINEBot"
                    img-src="/static/works/other/totsuzen_1.webp"
                    img-alt="突然の死ジェネレーター"
                    img-top
                  >
                    <b-card-body class="p-0 text-right">
                      <router-link to="/totsuzen">
                        <b-button variant="outline-primary">くわしく</b-button>
                      </router-link>
                      <b-button
                        href="https://line.me/R/ti/p/@996klscq"
                        target="_blank"
                        rel="noopener"
                        variant="outline-success"
                      >
                        <font-awesome-icon :icon="['fas', 'external-link-alt']" />&nbsp;友だち登録
                      </b-button>
                    </b-card-body>
                  </b-card>
                </b-col>
                <b-col class="my-3" md="6">
                  <b-card
                    title="匿名Player"
                    sub-title="Webラジオ「匿名ラジオ」を再生するアプリ"
                    img-src="/static/works/other/tokumei_1.webp"
                    img-alt="匿名Player"
                    img-top
                  >
                    <b-card-body class="p-0 text-right">
                      <router-link to="/tokumei">
                        <b-button variant="outline-primary">くわしく</b-button>
                      </router-link>
                      <b-button
                        href="https://github.com/arrow2nd/tokumeiPlayer"
                        target="_blank"
                        rel="noopener"
                        variant="outline-primary"
                      >
                        <font-awesome-icon :icon="['fas', 'external-link-alt']" />&nbsp;Github
                      </b-button>
                    </b-card-body>
                  </b-card>
                </b-col>
                <b-col class="my-3" md="6">
                  <b-card
                    title="twnyan"
                    sub-title="ターミナルで動くTwitterクライアント"
                    img-src="/static/works/other/twnyan_2.webp"
                    img-alt="twnyan"
                    img-top
                  >
                    <b-card-body class="p-0 text-right">
                      <router-link to="/twnyan">
                        <b-button variant="outline-primary">くわしく</b-button>
                      </router-link>
                      <b-button
                        href="https://github.com/arrow2nd/twnyan"
                        target="_blank"
                        rel="noopener"
                        variant="outline-primary"
                      >
                        <font-awesome-icon :icon="['fas', 'external-link-alt']" />&nbsp;Github
                      </b-button>
                    </b-card-body>
                  </b-card>
                </b-col>
                <b-col class="my-3" md="6">
                  <b-card
                    title="sb4-extension"
                    sub-title="SmileBASICのVSCode拡張"
                    img-src="/static/works/other/sb4_1.webp"
                    img-alt="sb4-extension"
                    img-top
                  >
                    <b-card-body class="p-0 text-right">
                      <router-link to="/sb4">
                        <b-button variant="outline-primary">くわしく</b-button>
                      </router-link>
                      <b-button
                        href="https://marketplace.visualstudio.com/items?itemName=arrow2nd.sb4-extension"
                        target="_blank"
                        rel="noopener"
                        variant="outline-primary"
                      >
                        <font-awesome-icon :icon="['fas', 'external-link-alt']" />&nbsp;配布ページ
                      </b-button>
                    </b-card-body>
                  </b-card>
                </b-col>
              </b-row>
            </b-tab>
            <!--Sticker-->
            <b-tab class="mt-2" title="LINE Sticker">
              <b-row>
                <b-col class="my-3" md="6">
                  <b-card
                    title="ねこのようなもの。"
                    sub-title="使えそうで使い所に困るスタンプ"
                    img-src="/static/works/sticker/neko_1.webp"
                    img-alt="ねこのようなもの。"
                    img-top
                  >
                    <b-card-body class="p-0 text-right">
                      <b-button
                        href="https://line.me/S/sticker/5233786"
                        target="_blank"
                        rel="noopener"
                        variant="outline-success"
                      >
                        <font-awesome-icon :icon="['fas', 'external-link-alt']" />&nbsp;LINE STORE
                      </b-button>
                    </b-card-body>
                  </b-card>
                </b-col>
                <b-col class="my-3" md="6">
                  <b-card
                    title="ねこのようなもの。2"
                    sub-title="5匹のねこの微妙に使えそうなスタンプ"
                    img-src="/static/works/sticker/neko_2.webp"
                    img-alt="ねこのようなもの。2"
                    img-top
                  >
                    <b-card-body class="p-0 text-right">
                      <b-button
                        href="https://line.me/S/sticker/6419151"
                        target="_blank"
                        rel="noopener"
                        variant="outline-success"
                      >
                        <font-awesome-icon :icon="['fas', 'external-link-alt']" />&nbsp;LINE STORE
                      </b-button>
                    </b-card-body>
                  </b-card>
                </b-col>
                <b-col class="my-3" md="6">
                  <b-card
                    title="進捗とたたかうねこ。"
                    sub-title="「進捗」に特化したねこのスタンプ"
                    img-src="/static/works/sticker/neko_3.webp"
                    img-alt="進捗とたたかうねこ。"
                    img-top
                  >
                    <b-card-body class="p-0 text-right">
                      <b-button
                        href="https://line.me/S/sticker/7224768"
                        target="_blank"
                        rel="noopener"
                        variant="outline-success"
                      >
                        <font-awesome-icon :icon="['fas', 'external-link-alt']" />&nbsp;LINE STORE
                      </b-button>
                    </b-card-body>
                  </b-card>
                </b-col>
                <b-col class="my-3" md="6">
                  <b-card
                    title="うごく！ねこのようなもの。"
                    sub-title="わちゃわちゃ動くクレヨン風のスタンプ"
                    img-src="/static/works/sticker/neko_4.webp"
                    img-alt="うごく！ねこのようなもの。"
                    img-top
                  >
                    <b-card-body class="p-0 text-right">
                      <b-button
                        href="https://line.me/S/sticker/7982358"
                        target="_blank"
                        rel="noopener"
                        variant="outline-success"
                      >
                        <font-awesome-icon :icon="['fas', 'external-link-alt']" />&nbsp;LINE STORE
                      </b-button>
                    </b-card-body>
                  </b-card>
                </b-col>
                <b-col class="my-3" md="6">
                  <b-card
                    title="いぬだと思います。"
                    sub-title="いぬっぽい何かのスタンプ"
                    img-src="/static/works/sticker/dog_1.webp"
                    img-alt="いぬだと思います。"
                    img-top
                  >
                    <b-card-body class="p-0 text-right">
                      <b-button
                        href="https://line.me/S/sticker/8527524"
                        target="_blank"
                        rel="noopener"
                        variant="outline-success"
                      >
                        <font-awesome-icon :icon="['fas', 'external-link-alt']" />&nbsp;LINE STORE
                      </b-button>
                    </b-card-body>
                  </b-card>
                </b-col>
                <b-col class="my-3" md="6">
                  <b-card
                    title="だいたいねこのようなもの。"
                    sub-title="ちょっと口が悪いねこのスタンプ"
                    img-src="/static/works/sticker/neko_5.webp"
                    img-alt="だいたいねこのようなもの。"
                    img-top
                  >
                    <b-card-body class="p-0 text-right">
                      <b-button
                        href="https://line.me/S/sticker/10319642"
                        target="_blank"
                        rel="noopener"
                        variant="outline-success"
                      >
                        <font-awesome-icon :icon="['fas', 'external-link-alt']" />&nbsp;LINE STORE
                      </b-button>
                    </b-card-body>
                  </b-card>
                </b-col>
                <b-col class="my-3" md="6">
                  <b-card
                    title="もっと！ねこのようなもの。"
                    sub-title="ちょっと太ったねこのスタンプ"
                    img-src="/static/works/sticker/neko_6.webp"
                    img-alt="もっと！ねこのようなもの。"
                    img-top
                  >
                    <b-card-body class="p-0 text-right">
                      <b-button
                        href="https://line.me/S/sticker/12664864"
                        target="_blank"
                        rel="noopener"
                        variant="outline-success"
                      >
                        <font-awesome-icon :icon="['fas', 'external-link-alt']" />&nbsp;LINE STORE
                      </b-button>
                    </b-card-body>
                  </b-card>
                </b-col>
              </b-row>
            </b-tab>
          </b-tabs>
        </b-container>
      </b-tab>
      <!--About-->
      <b-tab class="mt-4">
        <template v-slot:title>
          <font-awesome-icon :icon="['fas', 'paw']" />&nbsp;About
        </template>
        <b-container class="text-center" fluid="md">
          <b-img
            center
            thumbnail
            src="/static/arrow2nd.webp"
            rounded="circle"
            width="150px"
            alt="あろー。"
          />
          <b-card class="mt-4">
            <b-card-body class="p-0">
              <h6>
                あろーといいます<br />
                ねこと餃子とアイマスが好きです
              </h6>
            </b-card-body>
          </b-card>
          <b-card class="mt-3" title="好きなこと">
            <b-card-body class="p-0">
              <h6>なにかつくること, Twitterみること, 餃子食べること</h6>
            </b-card-body>
          </b-card>
          <b-card class="mt-3" title="好きなアーティスト">
            <b-card-body class="p-0">
              <h6>フレデリック, 平井堅, 中村さんそ</h6>
            </b-card-body>
          </b-card>
          <b-card class="mt-3" title="好きないきもの">
            <b-card-body class="p-0">
              <h6>いぬ, ねこ, サモエド</h6>
            </b-card-body>
          </b-card>
          <b-card class="mt-3" title="ちょっとわかる">
            <b-card-body class="p-0">
              <h6>C, Go, JavaScript, SmileBASIC</h6>
            </b-card-body>
          </b-card>
          <b-card class="mt-3" title="さわったことある">
            <b-card-body class="p-0">
              <h6>Python, C++, HTML, CSS</h6>
            </b-card-body>
          </b-card>
        </b-container>
      </b-tab>
    </b-tabs>
  </section>
</template>

<style>
*:focus {
  outline: none !important;
}

.nav-tabs .nav-link.active {
  color: #1c1c1c;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid !important;
  font-size: 20px;
}

.nav-tabs .nav-link {
  color: #adadad;
  background-color: transparent;
  border: none;
  font-size: 20px;
}

.nav-tabs .nav-link:hover {
  color: #707070;
}

.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #4ba2e9;
}

.nav-pills .nav-link {
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 25px;
}

.btn.btn-outline-primary {
  color: #4ba2e9;
  border-color: #4ba2e9;
  padding-top: 5px;
  padding-bottom: 5px;
}

.btn.btn-outline-primary:hover {
  color: #fff;
  background-color: #4ba2e9;
  padding-top: 5px;
  padding-bottom: 5px;
}

.btn.btn-outline-success {
  color: #53ca48;
  border-color: #53ca48;
  padding-top: 5px;
  padding-bottom: 5px;
}

.btn.btn-outline-success:hover {
  color: #fff;
  background-color: #53ca48;
  padding-top: 5px;
  padding-bottom: 5px;
}

a {
  color: #adadad;
}

a:hover {
  color: #707070;
}

h6 {
  color: #6c757d;
  margin-bottom: 0;
}

.card-title {
  font-weight: bold;
}

.card-subtitle {
  margin-bottom: 15px !important;
}
</style>
