<template>
  <div>
    <worksDetail link="http://wiki.hosiken.jp/petc3gou/?Toukou%2F4%BF%CD%C2%C7%A4%C1%CB%E3%BF%FD%A5%B2%A1%BC%A5%E0%A1%D8%A4%DE%A1%BC%A4%B8%A4%E3%A4%F3%A4%CE%A4%E8%A4%A6%A4%CA%A4%E2%A4%CE%A1%A3%A1%D9">
      <template v-slot:carouselContent>
        <b-carousel-slide img-src="/static/works/game/mj_3ds_1.webp" />
        <b-carousel-slide img-src="/static/works/game/mj_3ds_2.webp" />
        <b-carousel-slide img-src="/static/works/game/mj_3ds_3.webp" />
      </template>
      <template v-slot:name>まーじゃんのようなもの。</template>
      <template v-slot:badge>
        <b-badge pill variant="primary">プチコン3号</b-badge>
        <b-badge pill variant="secondary">プチコンBIG</b-badge>
      </template>
      <template v-slot:body>
        <h3>公開キー</h3>
        <p>4BL47E4V</p>
        <h3>概要</h3>
        <p>
          プチコン3号(3DS)・BIG(WiiU)で遊べる4人打ち麻雀ゲームです。
          <br />ゆるーいまーじゃんを目指して制作しました。
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
