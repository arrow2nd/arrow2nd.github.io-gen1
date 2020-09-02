<template>
  <div>
    <nav class="navbar navbar-light">
      <router-link class="navbar-brand" to="/">
        <img class="rounded-circle border" src="/static/arrow2nd.webp" width="32px" />
      </router-link>
      <div class="navbar-nav d-flex flex-row">
        <a
          class="nav-item nav-link link"
          href="https://twitter.com/arrow_2nd"
          target="_blank"
          onclick="gtag('event', 'click', {event_category: 'link_click', 'event_label': 'Twitter'});"
        >
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
        <a
          class="nav-item nav-link link"
          rel="me"
          href="https://imastodon.net/@arrow2nd"
          target="_blank"
          onclick="gtag('event', 'click', {event_category: 'link_click', 'event_label': 'Mastodon'});"
        >
          <font-awesome-icon :icon="['fab', 'mastodon']" />
        </a>
        <a
          class="nav-item nav-link link"
          href="https://github.com/arrow2nd"
          target="_blank"
          onclick="gtag('event', 'click', {event_category: 'link_click', 'event_label': 'Github'});"
        >
          <font-awesome-icon :icon="['fab', 'github-alt']" />
        </a>
      </div>
    </nav>
  </div>
</template>

<style>
.link {
  margin-left: 10px;
  font-size: 18px;
}
</style>
