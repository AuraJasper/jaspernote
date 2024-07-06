<script setup>
import { ref } from 'vue'
import { inBrowser } from 'vitepress'

import { websites } from './data'
import NavLinks from "../../.vitepress/theme/components/NavLinks.vue";

const M_RECENT_LINKS_KEY = 'mm-notes-recent-links'

const getItems = () => {
  if (!inBrowser) {
    return []
  }
  const value = localStorage.getItem(M_RECENT_LINKS_KEY)
  if (value) {
    try {
      return JSON.parse(value)
    } catch (e) {
      return []
    }
  }
  return []
}

const items = ref(getItems())
console.log(items)
const handleClick = (data) => {
  let newData = items.value.filter((item) => item.link !== data.link)
  newData.unshift(data)
  if (newData.length > 4) {
    newData = newData.slice(0, 4)
  }
  localStorage.setItem(M_RECENT_LINKS_KEY, JSON.stringify(newData))
  items.value = newData
}
</script>

<template>
  <NavLinks v-if="items.length" title="最近使用" @nav-click="handleClick" :items="items" />
  <NavLinks v-for="item in websites" :key="item.title" v-bind="item" @nav-click="handleClick" />
</template>

<!--<style src="./index.scss"></style>-->
