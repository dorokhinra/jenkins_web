<template>
    <MenuPanel/>
  <router-view/>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import MenuPanel from '@/components/MenuPanel.vue'
import { defineComponent, provide, reactive } from 'vue'
import { ItemsDinamic, Menu } from '@/interfaces/App'

export default defineComponent({
  components: { MenuPanel },
  setup () {
    const store = useStore()
    const menu: Menu[] = reactive(
        [
          { id: '1', label: 'Home', icon: 'pi pi-home', to: {name: 'Home'}},
          {id: '2', label: 'Groups', icon: 'pi pi-cog', items: [
              {id: '2.1', label: 'BASE', icon: 'pi pi-cog', to: {name: 'Groups'}, command: (event) => {detectGroup(event)}},
              {id: '2.2', label: 'CORE', icon: 'pi pi-cog', to: {name: 'Groups'}, command: (event) => {detectGroup(event)}},
              {id: '2.1', label: '... и т.д., что придет с api', icon: 'pi pi-cog', to: {name: 'Groups'}, command: (event) => {detectGroup(event)}},
            ]}
        ])
    const detectGroup = (e: { item: ItemsDinamic }) => {store.state.nameGroup = e.item.label}
    provide('menu', menu)
  }
})
</script>

<style scoped>

</style>
