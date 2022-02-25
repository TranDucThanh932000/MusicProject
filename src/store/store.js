import Vue from "vue";
import Vuex from 'vuex'


import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'

import FixedPlay from './modules/FixedPlay'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        play: true
    },
    getters,
    mutations,
    actions,
    modules: {
        fixedplay: FixedPlay
    }
})