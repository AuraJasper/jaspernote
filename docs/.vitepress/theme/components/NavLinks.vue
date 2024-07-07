<script setup>
import { computed } from 'vue'
import slugify  from 'slugify'

import NavLink from "./NavLink.vue";

const props = defineProps({
  tag: String,
  title: {
    type: String,
    required: true
  },
  noIcon: Boolean,
  items: {
    type: Array,
    required: true
  }
})

const component = computed(() => props.tag ?? 'h2')

const formatTitle = computed(() => {
  return slugify(props.title)
})
</script>

<template>
<!--  <div :id="title.toLowerCase().replace(/\s+/g, '-')">-->
  <component :is="component" v-if="title" id="recent" tabindex="-1">
    <h1>{{ title }}</h1>
    <hr>
    <a class="header-anchor" :href="`#${formatTitle}`" aria-hidden="true"></a>
  </component>
  <div class="m-nav-links">
    <NavLink
        :id="title.toLowerCase().replace(/\s+/g, '-')"
        v-for="item in items"
        :key="item.link"
        :noIcon="noIcon"
        v-bind="{ ...item, ...$attrs }"
    />
  </div>
<!--  </div>-->
</template>

<style lang="scss" scoped>
.m-nav-links {
  --m-nav-gap: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-row-gap: var(--m-nav-gap);
  grid-column-gap: var(--m-nav-gap);
  grid-auto-flow: row dense;
  justify-content: center;
  margin-top: var(--m-nav-gap);
}

@each $media, $size in (500px: 140px, 640px: 155px, 768px: 175px, 960px: 200px, 1440px: 240px) {
  @media (min-width: $media) {
    .m-nav-links {
      grid-template-columns: repeat(auto-fill, minmax($size, 1fr));
    }
  }
}

@media (min-width: 960px) {
  .m-nav-links {
    --m-nav-gap: 20px;
  }
}
</style>
