<template>
  <TabView>
    <TabPanel header="Параметры сборки 2">
    <div class="grid p-fluid">
      <div class="col-12 md:col-4">
        <div class="p-inputgroup">
                    <span class="p-inputgroup-addon">
                        <i class="pi pi-cog"></i>
                    </span>
          <InputText placeholder="Название ветки" />
        </div>
      </div>

      <div class="col-12 md:col-12">
        <div class="p-inputgroup">
          <Checkbox v-model="checkedDocker" :binary="true" /> <span style="margin-left: 10px"> <b> Собирать docker образ</b></span>
        </div>
      </div>

      <div class="col-12 md:col-12">
        <div class="p-inputgroup">
          <Checkbox v-model="checkedService" :binary="true" /> <span style="margin-left: 10px"> <b> Собирать  сервис</b></span>
        </div>
      </div>
    </div>

    </TabPanel>
    <TabPanel header="Параметры сборки 2">
      <h1>Хз че здесь??!!</h1>
    </TabPanel>
    <TabPanel header="Параметры сборки 3">
      <h1>Хз че здесь??!!</h1>
    </TabPanel>
  </TabView>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: "Tabs",
  setup () {
    const checkedDocker = ref(false)
    const checkedService = ref(false)
    return { checkedDocker, checkedService }
  }
})
</script>

<style scoped>

</style>