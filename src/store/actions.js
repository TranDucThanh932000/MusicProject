export const actions = {
    updatePlay ({ commit }, payload) {
        commit('updatePlay', payload);
    },
    updateBgImgGlobal({commit}, payload){
        commit('updateBgImgGlobal', payload)
    },
    updateSrcPlay({commit}, payload){
        commit('updateSrcPlay', payload)
    },
    updateNavRight({commit}){
        commit('updateNavRight')
    },
}