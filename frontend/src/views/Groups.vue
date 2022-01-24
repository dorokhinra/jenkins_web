<template>
  <div class="card">
    <div class="flex justify-content-center flex-wrap card-container yellow-container">
      <div class="flex align-items-center justify-content-center">
        <h1>{{groupName}}</h1>
      </div>
    </div>
    <div class="grid">
      <div class="md:col-7 sm:col-12">
        <h3>Настройки группы</h3>
        <Tabs/>
      </div>
      <div class="col-1"></div>
      <div class="md:col-4 sm:col-12">
        <h3>Сервисы группы</h3>
        <TableServices/>
      </div>
    </div>
  </div>


</template>

<script lang="ts">
import {defineComponent, provide, ref, computed} from 'vue'
import Tabs from '@/components/Tabs.vue'
import TableServices from '@/components/TableServices.vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Groups',
  components: { TableServices, Tabs },
  setup () {
    const store = useStore()
    const groupName = computed(()=> store.state.nameGroup)
    const infoService = ref()
    provide('infoService', infoService)
    return { groupName }
  }
})
</script>
<style lang="scss" scoped>
.MyCard{
  height: 500px;
}
.card{
  margin-left: 40px;
  margin-right: 45px;
}
.field-data{
  height: 450px;
  margin: 20px;
  border: #bbb9b9 solid 3px;
}
</style>