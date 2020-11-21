<template>
  <div>
    <worksDetail link="https://line.me/R/ti/p/@996klscq">
      <template v-slot:carouselContent>
        <b-carousel-slide img-src="/static/works/other/totsuzen_1.webp" />
      </template>
      <template v-slot:name>突然の死ジェネレーター</template>
      <template v-slot:badge>
        <b-badge pill variant="success">LINEBot</b-badge>
      </template>
      <template v-slot:body>
        <h3>概要</h3>
        <p>あのとげとげのやつを作るLINEBot。</p>
        <h3>使用技術</h3>
        <p>Node.js, Vercel, LINE Messaging API</p>
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
