<template>
  <div>
    <worksDetail link="https://line.me/R/ti/p/@319rwvnv">
      <template v-slot:carouselContent>
        <b-carousel-slide img-src="/static/works/other/produce_1.webp" />
        <b-carousel-slide img-src="/static/works/other/produce_2.webp" />
      </template>
      <template v-slot:name>プロデュースノート！</template>
      <template v-slot:badge>
        <b-badge pill variant="success">LINEBot</b-badge>
      </template>
      <template v-slot:body>
        <h3>概要</h3>
        <p>
          アイドルマスターシリーズに登場するアイドルのプロフィールを検索できるLINEBot<br />
          名前の一部や、よみがな、誕生日からの検索にも対応しています
        </p>
        <h3>使用技術</h3>
        <p>Node.js, LINE Messaging API, im@sparql(SPARQL), Vercel, CircleCI</p>
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
