<template>
  <div>
    <worksDetail link="http://wiki.hosiken.jp/petc4/?Toukou%2F%A4%DE%A1%BC%A4%B8%A4%E3%A4%F3%A4%CE%A4%E8%A4%A6%A4%CA%A4%E2%A4%CE%A1%A3for%20Switch">
      <template v-slot:carouselContent>
        <b-carousel-slide img-src="/static/works/game/mj_sw_1.webp" />
        <b-carousel-slide img-src="/static/works/game/mj_sw_2.webp" />
        <b-carousel-slide img-src="/static/works/game/mj_sw_3.webp" />
        <b-carousel-slide img-src="/static/works/game/mj_sw_4.webp" />
      </template>
      <template v-slot:name>まーじゃんのようなもの。for Switch</template>
      <template v-slot:badge>
        <b-badge pill variant="dark">プチコン4</b-badge>
      </template>
      <template v-slot:body>
        <h3>公開キー</h3>
        <p>4NZS5D323</p>
        <h3>概要</h3>
        <p>
          プチコン4(Switch)で遊べる4人打ち麻雀ゲームです。
          <br />だれでも遊べるやさしい麻雀をコンセプトに制作しました。
        </p>
      </template>
      <template v-slot:link-text>まとめWiki</template>
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
