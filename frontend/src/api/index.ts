import axios from 'axios'

import { Store } from 'vuex'
import { State } from '@/store/state'

export const listOfroutes = ['request_runo']

export function checkRoute (route: string | undefined): boolean {
    for (const i in listOfroutes) {
        if (route?.indexOf(listOfroutes[i]) !== -1) { return true }
    }
    return false
}

export function initValidationInterceptor (store: Store<State>): void {
    axios.interceptors.response.use((resp) => {
        if (store.state.krutilka) store.state.krutilka = false
        return resp
    }, (error) => Promise.reject(error))

    axios.interceptors.request.use((cfg) => {
        // if(cfg.url?.indexOf('/super_admin/get_super_admins') !== -1){
        cfg.baseURL = process.env.NODE_ENV === 'development' ? process.env.VUE_APP_BASE_URL_DEV : process.env.VUE_APP_BASE_URL_PROD
        if (checkRoute(cfg.url)) {
            store.state.krutilka = true
        }
        return cfg
    })
}
