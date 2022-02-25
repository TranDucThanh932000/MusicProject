import Vue from "vue";
import Vuex from 'vuex'


import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

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
        FixedPlay
    }
})