import { ActionContext, ActionTree } from 'vuex'
import { State } from '@/store/state'
// import { AllFilters, CountYear } from '@/Interfaces'
import { Mutations, MutationType } from '@/store/mutations'
import axios from 'axios'


export enum ActionsTypes {
    GetAllBranch = 'GET_ALL_BRANCH'
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>
}

export type Actions = {
    [ActionsTypes.GetAllBranch](context: ActionAugments, value: string): void,
}

export const actions: ActionTree<State, State> & Actions = {
    async [ActionsTypes.GetAllBranch] ({ commit }, value) {
        const username = 'administrator';
        const password = '11347d965aae359a7de7ba9f9388cb5d29'
        // const token = `${username}:${password}`;
        const { data } = await axios.post('/scriptText', value, { auth: {
            username: username,
                password: password
            }}
        )
        commit(MutationType.CreateListBranch, data)
    }
}
