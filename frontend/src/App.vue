<template>
    <MenuPanel/>
  <router-view/>
</template>

<script lang="ts">
import MenuPanel from '@/components/MenuPanel.vue'
import { defineComponent, provide, reactive } from 'vue'
import { Menu } from '@/interfaces/common'

export default defineComponent({
  components: { MenuPanel },
  setup () {
    const menu: Menu[] = reactive(
        [
          { id: '1', label: 'Core', icon: 'pi pi-cog',
            items: [
              { id: '1.1', label: 'Api', icon: 'pi pi-sliders-h',
                items:[
                  { label: 'Service1', icon: 'pi pi-sliders-h', to: { name: 'Api' }},
                  { label: 'Service2', icon: 'pi pi-sliders-h', to: { name: 'Api' }},
                  { label: 'Service3', icon: 'pi pi-sliders-h', to: { name: 'Api' }},
                  { label: 'Service4', icon: 'pi pi-sliders-h', to: { name: 'Api' }},
                  { label: 'Service...', icon: 'pi pi-sliders-h', to: { name: 'Api' }}
                ]},
              { id: '1.2', label: 'Common', icon: 'pi pi-sliders-h', to: { name: 'Common' }}
            ] },
          { id: '2', label: 'Adapters', icon: 'pi pi-cog',
            items: [
              { id: '2.1', label: 'Ascn', icon: 'pi pi-sliders-h', to: { name: 'Ascn' }},
              { id: '2.2', label: 'Mnis', icon: 'pi pi-sliders-h', to: { name: 'Mnis' }}
            ] },
        ])
    provide('menu', menu)
  }
})
</script>

<style scoped>

</style>
