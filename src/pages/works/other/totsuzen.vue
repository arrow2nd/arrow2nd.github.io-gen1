<template>
  <div>
    <worksDetail link="https://line.me/R/ti/p/@996klscq">
      <template v-slot:carouselContent>
        <b-carousel-slide img-src="/static/works/other/totsuzen_1.png" />
      </template>
      <template v-slot:name>突然の死ジェネレーター</template>
      <template v-slot:badge>
        <b-badge pill variant="success">LINEBot</b-badge>
      </template>
      <template v-slot:body>
        <h3>概要</h3>
        <p>あのとげとげのやつを作るLINEBotです。</p>
        <h3>使用した技術など</h3>
        <p>node.js, vercel</p>
      </template>
      <template v-slot:link-text>友だち登録</template>
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
