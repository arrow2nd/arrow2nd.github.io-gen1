<template>
  <div>
    <worksDetail link="https://github.com/arrow2nd/twnyan">
      <template v-slot:carouselContent>
        <b-carousel-slide img-src="/static/works/other/twnyan_1.webp" />
      </template>
      <template v-slot:name>twnyan</template>
      <template v-slot:badge>
        <b-badge pill variant="dark">CLIアプリ</b-badge>
      </template>
      <template v-slot:body>
        <h3>概要</h3>
        <p>
          コンソールで動くマルチプラットフォームのTwitterクライアント。
          <br />手軽に「にゃーん」できるのが特徴です。
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
