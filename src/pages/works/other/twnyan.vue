<template>
  <div>
    <worksDetail link="https://github.com/arrow2nd/twnyan">
      <template v-slot:carouselContent>
        <b-carousel-slide img-src="/static/works/other/twnyan_1.webp" />
        <b-carousel-slide img-src="/static/works/other/twnyan_2.webp" />
      </template>
      <template v-slot:name>twnyan</template>
      <template v-slot:badge>
        <b-badge pill variant="dark">CLIアプリ</b-badge>
      </template>
      <template v-slot:body>
        <h3>概要</h3>
        <p>
          コンソールで動くTwitterクライアント<br />
          作業中でも集中を乱すことなく、手軽にツイートできます
        </p>
        <h3>使用技術</h3>
        <p>Go, Twitter API, CircleCI</p>
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
