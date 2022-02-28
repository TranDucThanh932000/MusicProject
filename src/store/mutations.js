export const mutations = {
    updatePlay(state, payload) {
        state.play = payload
    },
    updateBgImgGlobal(state, payload){
        state.bgImgGlobal = payload
    },
    updateSrcPlay(state, payload){
        state.srcPlay = payload
    },
    updateNavRight(state){
        state.navRight = !state.navRight
    },
}