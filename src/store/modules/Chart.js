export default {
    namespaced: true,
    state: () => ({
        icons: [
            "mdi-numeric-1-circle-outline",
            "mdi-numeric-2-circle-outline",
            "mdi-numeric-3-circle-outline",
        ],
        listTop3: [
            {
                img: "https://i.ytimg.com/vi/EBpp2VTSI2Q/maxresdefault.jpg",
                title: "Nếu ngày ấy",
                singer: "Soobin",
            },
            {
                img: "https://images.genius.com/cfb3f64ab2fc08506b2365b1d8ab959b.600x600x1.webp",
                title: "Thay mọi cô gái yêu anh",
                singer: "AMEE",
            },
            {
                img: "https://i.ytimg.com/vi/EBpp2VTSI2Q/maxresdefault.jpg",
                title: "Chạy Về Khóc Với Anh",
                singer: "Erik",
            },
        ],
        songs: [false, false, false],
        gradient: [["#FF1744"], ["#1E88E5"], ["#C0CA33"]],
        color: "#BA68C8",
        fill: 0,
        bg_img: ""
    }),
    getters: {
        icons: state => state.icons,
        listTop3: state => state.listTop3,
        songs: state => state.songs,
        gradient: state => state.gradient,
        color: state => state.color,
        fill: state => state.fill,
        bg_img: state => state.bg_img
    },
    actions: {
        checkPause({commit, getters}, index) {
            if (getters.songs[index] == true) {
                commit('updatePause', [false, false, false])
              return;
            }
            if (index == 0) {
                commit('updatePause', [true, false, false])
            } else if (index == 1) {
                commit('updatePause', [false, true, false])
            } else {
                commit('updatePause', [false, false, true])
            }
          },
    },
    mutations: {
        updatePause(state, payload){
            state.songs = payload
        }
    }
}