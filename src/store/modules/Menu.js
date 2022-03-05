export default {
    namespaced: true,
    state : () => ({
        txtSearch: '',
        Recommends: [{ title: "123" }, { title: "234" }, { title: "345" }],
        changeColorForm: true
    }),
    getters: {
        txtSearch : state => state.txtSearch,
        Recommends : state => state.Recommends,
        changeColorForm : state => state.changeColorForm
    },
    actions: {
        updateTxtSearch({commit}, payload){
            commit('updateTxtSearch', payload)
        }
    },
    mutations: {
        updateTxtSearch(state, payload){
            state.txtSearch = payload
        }
    }
}