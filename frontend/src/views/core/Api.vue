<template>
  <div class="card">
    <div class="flex justify-content-center flex-wrap card-container yellow-container">
      <div class="flex align-items-center justify-content-center">
        <h1>Api</h1>
      </div>
    </div>
    <Tabs/>
  </div>


</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Tabs from '@/components/Tabs.vue'

export default defineComponent({
  name: 'api',
  components: { Tabs },
  setup () {

    return {  }
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