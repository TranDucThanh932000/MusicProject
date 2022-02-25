export default {
    namespaced: true,
    state : () => ({
        listJustNow: [
            { img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', category: 'Nhạc Mới Mỗi Ngày', to: '...', detail:'Trong thơ có nhạc, trong nhạc có thơ'},
            { img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', category: 'Top Hits V-Pop', to: '...', detail:'Trong thơ có nhạc, trong nhạc có thơ'},
            { img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', category: 'Top Hits V-Pop', to: '...', detail:'Trong thơ có nhạc, trong nhạc có thơ'},
            { img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', category: 'Top Hits V-Pop', to: '...', detail:'Trong thơ có nhạc, trong nhạc có thơ'},
            { img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', category: 'Top Hits V-Pop', to: '...', detail:'Trong thơ có nhạc, trong nhạc có thơ'},
        ]
    }),
    getters: {
        listJustNow : state => state.listJustNow,
    }
}