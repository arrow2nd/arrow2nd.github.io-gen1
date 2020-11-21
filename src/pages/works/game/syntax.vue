<template>
  <div>
    <worksDetail link="https://twitter.com/arrow_2nd/status/1297872774577262593">
      <template v-slot:carouselContent>
        <b-carousel-slide img-src="/static/works/game/syntax_1.webp" />
        <b-carousel-slide img-src="/static/works/game/syntax_2.webp" />
        <b-carousel-slide img-src="/static/works/game/syntax_3.webp" />
      </template>
      <template v-slot:name>#syntax</template>
      <template v-slot:badge>
        <b-badge pill variant="dark">プチコン4</b-badge>
      </template>
      <template v-slot:body>
        <h3>公開キー</h3>
        <p>4VKS8XDEF</p>
        <h3>概要</h3>
        <p>パネルを入れ替えてプチコンの命令をつくるパズル。</p>
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
