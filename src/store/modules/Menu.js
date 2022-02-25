export default {
    namespaced: true,
    state : () => ({
        Recommends: [{ title: "123" }, { title: "234" }, { title: "345" }],
        changeColorForm: true
    }),
    getters: {
        Recommends : state => state.Recommends,
        changeColorForm : state => state.changeColorForm
    }
}