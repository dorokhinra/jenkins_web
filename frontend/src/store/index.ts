import { createStore } from 'vuex'
import { State, state } from '@/store/state'
// import { mutations } from '@/store/mutations'
// import { actions } from '@/store/actions'
// import { getters } from '@/store/getters'

// import { State } from '@/Interfaces'

export const store = createStore<State>({
  state
})

