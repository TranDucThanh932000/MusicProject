export default {
    namespaced: true,
    state : () => ({
        listJustNow: [
            { img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', category: 'Nhạc Mới Mỗi Ngày', to: '/album/1'},
            { img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', category: 'Top Hits V-Pop', to: '/album/2'},
            { img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', category: 'Top Hits V-Pop', to: '/album/3'},
            { img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', category: 'Top Hits V-Pop', to: '/album/4'},
            { img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', category: 'Top Hits V-Pop', to: '/album/5'},
        ],
    }),
    getters: {
        listJustNow : state => state.listJustNow,
    }
}