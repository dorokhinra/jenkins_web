<template>
  <div>
    <DataTable :value="services"
               responsiveLayout="scroll"
               class="p-datatable-sm"
               scrollHeight="300px"
               selectionMode="single"
               v-model:selection="infoService"
               @row-click="setService()"
               stateStorage="session" stateKey="dt-state-demo-session">
      <Column field="id" header="id"></Column>
      <Column field="name" header="Service"></Column>
    </DataTable>
    <Dialog v-model:visible="displayModal"  :style="{width: '600px'}"  :modal="true" :closeOnEscape="true" :showHeader="false" :dismissableMask="true" >
      <Fieldset legend='Настройки сервиса' style="margin-top: 40px">
        <template #legend>
          Настройки сервиса {{infoService.name}}
        </template>
        <div class="grid p-fluid">
          <div class="col-12 md:col-12">
            <div class="p-inputgroup">
                    <span class="p-inputgroup-addon">
                        <i class="pi pi-cog"></i>
                    </span>
              <Dropdown v-model="branch" :options="dataApi" optionLabel="name" placeholder="Выберите ветку" />
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

      </Fieldset>
      <div class="flex justify-content-center flex-wrap card-container" style="margin-top: 10px; margin-bottom: 10px">
        <div class="flex align-items-center justify-content-center">
          <Button label="Отмена" icon="pi pi-times" @click="closeDialog" class="p-button-primary"/>
        </div>
        <div class="flex align-items-center justify-content-center m-2">
          <Button label="Пименить" icon="pi pi-check"   class="p-button-success"/>
        </div>
      </div>

    </Dialog>

  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from 'vue'
import { ItemsDinamic } from '@/interfaces/App'

export default defineComponent({
  name: "TableServices",
  setup () {
    const branch = ref()
    const dataApi = ref([{name: 'Master'}, {name: 'dev'}, {name: 'и т.д.'}])
    const checkedDocker = ref(false)
    const checkedService = ref(false)
    const displayModal = ref(false)
    const infoService = inject('infoService') as { value: ItemsDinamic }
    const setService = () => { displayModal.value = true }
    const services = [
      {id: '2.1.1', name: 'api'},
      {id: '2.1.2', name: 'commons'}
    ]
    const closeDialog = () => { displayModal.value = false }
    return { services, setService, infoService, displayModal, closeDialog, checkedService, checkedDocker, dataApi, branch }
  }
})
</script>

<style scoped>

</style>