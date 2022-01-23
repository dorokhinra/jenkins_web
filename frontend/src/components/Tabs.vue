<template>
  <TabView>
    <TabPanel header="Header I">
      Content I
    </TabPanel>
    <TabPanel header="Header II">
      Content II
    </TabPanel>
    <TabPanel header="Header III">
      Content III
    </TabPanel>
  </TabView>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "Tabs",
  setup () {

    return {  }
  }
})
</script>

<style scoped>

</style>