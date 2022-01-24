<template>
  <Menubar :model="menu" class="p-menubar">
    <template #start>
      <img alt="logo" src="jen.png" height="40" class="mr-2">
    </template>
  </Menubar>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from 'vue'
import { Menu } from '@/interfaces/App'

export default defineComponent({
  name: "MenuPanel",
  setup () {
  const menu = inject('menu') as Menu[]
  const visibleLeft = ref(true)
    return { menu, visibleLeft }
  }
})
</script>

<style lang="scss" scoped>
//.p-menubar{
//  padding: 0;
//  background: #676865 !important;
//}
</style>