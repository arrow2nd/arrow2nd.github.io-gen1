<template>
  <div>
    <worksDetail link="https://twitter.com/arrow_2nd/status/1214409406026153984">
      <template v-slot:carouselContent>
        <b-carousel-slide img-src="/static/works/game/nyanko_1.webp" />
        <b-carousel-slide img-src="/static/works/game/nyanko_2.webp" />
        <b-carousel-slide img-src="/static/works/game/nyanko_3.webp" />
      </template>
      <template v-slot:name>にゃんこだいせんせぇ</template>
      <template v-slot:badge>
        <b-badge pill variant="dark">プチコン4</b-badge>
        <b-badge pill variant="danger">第五回プチコン大喜利 TSUKUMO賞</b-badge>
      </template>
      <template v-slot:body>
        <h3>公開キー</h3>
        <p>4NKEKN4XS</p>
        <h3>概要</h3>
        <p>次々に出てくる問題をすばやく『シュッ』と採点する計算ゲーム</p>
      </template>
      <template v-slot:link-text>ツイート</template>
    </worksDetail>
  </div>
</template>

<script>
import worksDetail from '@/components/worksDetail'

export default {
  components: {
    worksDetail
  }
}
</script>
