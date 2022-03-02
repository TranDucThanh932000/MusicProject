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
                title: "Chart",
                singer: "Soobin",
                album: "Playah (Album)",
                time: "03:44",
                src: 'thay-moi-co-gai-yeu-anh.mp3'
            },
            {
                img: "https://images.genius.com/cfb3f64ab2fc08506b2365b1d8ab959b.600x600x1.webp",
                title: "Thay mọi cô gái yêu anh",
                singer: "AMEE",
                album: "Playah (Album)",
                time: "03:44",
                src: 'em-bo-hut-thuoc-chua-liu-riu-Bich-Phuong.mp3'
            },
            {
                img: "https://i.ytimg.com/vi/EBpp2VTSI2Q/maxresdefault.jpg",
                title: "Chạy Về Khóc Với Anh",
                singer: "Erik",
                album: "Chạy Về Khóc Với Anh (Single)",
                time: "03:44",
                src: 'thay-moi-co-gai-yeu-anh.mp3'
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
        checkPause({ commit, getters, dispatch, rootGetters }, index) {
            dispatch('fixedplay/updateSongs', getters.listTop3, { root: true })
            if (getters.songs[index] == true) {
                commit('updatePause', [false, false, false])

                commit('updatePlay', true,  { root: true })
                dispatch('fixedplay/playAudio', true, { root: true })
                // if (index == 0) {
                //     dispatch('fixedplay/updateIndexSong', 0, { root: true })
                // } else if (index == 1) {
                //     dispatch('fixedplay/updateIndexSong', 1, { root: true })
                // } else {
                //     dispatch('fixedplay/updateIndexSong', 2, { root: true })
                // }
                return;
            }
            if (index == 0) {
                commit('updatePause', [true, false, false])
                dispatch('fixedplay/updateIndexSong', 0, { root: true })
            } else if (index == 1) {
                commit('updatePause', [false, true, false])
                dispatch('fixedplay/updateIndexSong', 1, { root: true })
            } else {
                commit('updatePause', [false, false, true])
                dispatch('fixedplay/updateIndexSong', 2, { root: true })
            }

            commit('updatePause', new Array(getters.songs.length).fill(false))
            getters.songs[index] = true;
            if(getters.listTop3[index].src != rootGetters.srcPlay){
                //sau khi update src moi thi load() lai audio
                var aud = document.getElementById("myAudio")
                aud.load()
            }
            
            var temp = []
            for(let i = index; i < getters.songs.length; i++){
                temp.push(getters.listTop3[i])
            }
            dispatch('sidebarRight/updateItems', temp, { root: true })

            //get list played
            temp = []
            for(let i = 0; i <= index; i++){
                temp.push(getters.listTop3[i])
            }
            dispatch('sidebarRight/updateSongPlayed', temp, { root: true })

            // dispatch('sidebarRight/updateItems', getters.listTop3, { root: true })
            commit('updateSrcPlay', getters.listTop3[index].src, {root: true})
            commit('fixedplay/src', getters.listTop3[index].src, {root: true})

            
            commit('updatePlay', false,  { root: true })
            dispatch('fixedplay/playAudio', false, { root: true })
            commit('fixedplay/updateLiveSong', getters.listTop3[index], { root: true })
        },
        updateFill({ commit }, payload) {
            commit('lineChart/updateFill', payload, { root: true })
        }
    },
    mutations: {
        updatePause(state, payload) {
            state.songs = payload
        },
        updateFill(state, payload) {
            state.fill = payload
        }
    }
}