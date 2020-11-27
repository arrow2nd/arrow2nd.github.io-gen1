<template>
  <div>
    <b-container class="mt-3 text-center">
      <div class="carousel">
        <b-carousel id="worksCarousel" v-model="slide" :interval="4000" controls>
          <slot name="carouselContent" />
        </b-carousel>
      </div>
      <div class="mt-4 mb-5">
        <h2 class="mb-1">
          <slot name="name" />
        </h2>
        <slot name="badge" />
      </div>
      <slot name="body" />
    </b-container>
    <b-button class="button-link" v-bind:href="link" target="_blank" rel="noopener" variant="primary" pill>
      <font-awesome-icon :icon="['fas', 'external-link-alt']" />&nbsp;
      <slot name="link-text" />
    </b-button>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String
    }
  }
}
</script>

<style>
.carousel {
  margin: auto;
  max-width: 800px;
}

.button-link {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.btn.btn-primary {
  border-color: #4ba2e9;
  background-color: #4ba2e9;
  padding-top: 5px;
  padding-bottom: 5px;
}

.btn.btn-primary:hover {
  border-color: #3d87c4;
  background-color: #3d87c4;
  padding-top: 5px;
  padding-bottom: 5px;
}

p {
  color: #6c757d;
  margin-bottom: 40px;
}

h3 {
  border-bottom: 1px solid #dddddd;
}
</style>
