<template>
  <div>
    <worksDetail link="https://github.com/arrow2nd/tokumeiPlayer">
      <template v-slot:carouselContent>
        <b-carousel-slide img-src="/static/works/other/tokumei_1.webp" />
        <b-carousel-slide img-src="/static/works/other/tokumei_2.webp" />
      </template>
      <template v-slot:name>匿名Player</template>
      <template v-slot:badge>
        <b-badge pill variant="dark">デスクトップアプリ</b-badge>
      </template>
      <template v-slot:body>
        <h3>概要</h3>
        <p>Webラジオ「匿名ラジオ」を再生するアプリケーション</p>
        <h3>使用技術</h3>
        <p>electron, HTML, CSS, Node.js, jQuery</p>
      </template>
      <template v-slot:link-text>Github</template>
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
