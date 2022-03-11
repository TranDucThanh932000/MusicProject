import axios from "axios";

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
    updateLoadingAlbum({commit}, payload){
        commit('updateLoadingAlbum', payload)
    },
    updateShowSidebarLeft({commit}, payload){
        commit('updateShowSidebarLeft', payload)
    },
    updateShowMenu({commit}, payload){
        commit('updateShowMenu', payload)
    },
    updateShowFixedPlay({commit}, payload){
        commit('updateShowFixedPlay', payload)
    },
    updateUser({commit}, payload){
        commit('updateUser', payload)
    },
    getUser({commit}){
        axios.get("http://127.0.0.1:8000/api/v1/user/current")
        .then( res => {
            commit("updateUser", res.data)
        })
    }
}