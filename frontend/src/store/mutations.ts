import { MutationTree } from 'vuex'
import { State } from './state'

export enum MutationType {
    CreateListBranch = 'CREATE_LIST_BRANCH',
}

export type Mutations = {
    [MutationType.CreateListBranch](state: State, request: string): void
}

export const mutations: MutationTree<State> & Mutations = {
    [MutationType.CreateListBranch] (state, request) {
        console.log(request)
        state.requestScript = request
    }
}
