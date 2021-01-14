<template>
  <div>
    <worksDetail link="https://marketplace.visualstudio.com/items?itemName=arrow2nd.sb4-extension">
      <template v-slot:carouselContent>
        <b-carousel-slide img-src="/static/works/other/sb4_1.webp" />
        <b-carousel-slide img-src="/static/works/other/sb4_2.webp" />
      </template>
      <template v-slot:name>sb4-extension</template>
      <template v-slot:badge>
        <b-badge pill variant="dark">VSCode拡張機能</b-badge>
      </template>
      <template v-slot:body>
        <h3>概要</h3>
        <p>SmileBASIC4をVSCodeで書くためのちょっとした拡張機能</p>
        <h3>使用技術</h3>
        <p>JavaScript</p>
      </template>
      <template v-slot:link-text>配布ページ</template>
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
