<template>
  <div>
    <worksDetail link="https://github.com/arrow2nd/tw-nyaan">
      <template v-slot:carouselContent>
        <b-carousel-slide img-src="/static/works/other/nyaan_1.png" />
      </template>
      <template v-slot:name>tw-nyaan</template>
      <template v-slot:badge>
        <b-badge pill variant="dark">コンソールアプリ</b-badge>
      </template>
      <template v-slot:body>
        <h3>概要</h3>
        <p>
            コンソールで動くTwitterクライアントです。
            <br />手軽に「にゃーん」ができます。
        </p>
        <h3>使用した技術など</h3>
        <p>node.js, TwitterAPI</p>
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
