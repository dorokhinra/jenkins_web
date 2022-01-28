<template>
  <h1>Добро пожаловать!</h1>
  <h3>Запрос</h3>
  <h1>{{testString}}</h1>

  <h3>Ответ</h3>
  <h1>{{testVal}}</h1>

  <Button label="Тест" @click="test"/>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from 'vue'
import { useStore } from 'vuex'

export default defineComponent ({
  name: "Home",
  setup () {
    const store = useStore()
    const testVal = ref(computed(() => store.state.requestScript))
    const testString = 'script=println("hello")'
    const test = () => { store.dispatch('GET_ALL_BRANCH', testString) }

    return { test, testVal, testString }
  }
})
</script>

<style scoped>

</style>