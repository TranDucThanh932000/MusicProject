export default {
    namespaced: true,
    state: () => ({
        vol: 50,
        sing: true,
        loop: true,
        ended: false,
        duration: '00:00',
        timeEnd: 0,
        timeCurrent: 0,
        timeViewDuration: '0:00',
        songs: [
            {
                img: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/c/b/2/5cb27fd4c536a2274d267a53ac417b01.jpg",
                title: "Nếu ngày ấy",
                singer: "Soobin",
                album: "Playah (Album)",
                time: "03:44",
                src: 'em-bo-hut-thuoc-chua-liu-riu-Bich-Phuong.mp3'
            },
            {
                img: "https://images.genius.com/cfb3f64ab2fc08506b2365b1d8ab959b.600x600x1.webp",
                title: "Thay mọi cô gái yêu anh",
                singer: "AMEE",
                album: "Chạy Về Khóc Với Anh (Single)",
                time: "03:44",
                src: 'thay-moi-co-gai-yeu-anh.mp3'
            },
            {
                img: "https://i.ytimg.com/vi/EBpp2VTSI2Q/maxresdefault.jpg",
                title: "Chạy Về Khóc Với Anh",
                singer: "Erik",
                album: "Chạy Về Khóc Với Anh (Single)",
                time: "03:44",
                src: 'em-bo-hut-thuoc-chua-liu-riu-Bich-Phuong.mp3'
            },
            {
                img: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/c/b/2/5cb27fd4c536a2274d267a53ac417b01.jpg",
                title: "Nếu ngày ấy",
                singer: "Soobin",
                album: "Playah (Album)",
                time: "03:44",
                src: 'em-bo-hut-thuoc-chua-liu-riu-Bich-Phuong.mp3'
            },
            {
                img: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/c/b/2/5cb27fd4c536a2274d267a53ac417b01.jpg",
                title: "Nếu ngày ấy",
                singer: "Soobin",
                album: "Playah (Album)",
                time: "03:44",
                src: 'em-bo-hut-thuoc-chua-liu-riu-Bich-Phuong.mp3'
            },
            {
                img: "https://images.genius.com/cfb3f64ab2fc08506b2365b1d8ab959b.600x600x1.webp",
                title: "Thay mọi cô gái yêu anh",
                singer: "AMEE",
                album: "Chạy Về Khóc Với Anh (Single)",
                time: "03:44",
                src: 'thay-moi-co-gai-yeu-anh.mp3'
            },
            {
                img: "https://images.genius.com/cfb3f64ab2fc08506b2365b1d8ab959b.600x600x1.webp",
                title: "Thay mọi cô gái yêu anh",
                singer: "AMEE",
                album: "Chạy Về Khóc Với Anh (Single)",
                time: "03:44",
                src: 'thay-moi-co-gai-yeu-anh.mp3'
            },
            {
                img: "https://images.genius.com/cfb3f64ab2fc08506b2365b1d8ab959b.600x600x1.webp",
                title: "Thay mọi cô gái yêu anh",
                singer: "AMEE",
                album: "Chạy Về Khóc Với Anh (Single)",
                time: "03:44",
                src: 'thay-moi-co-gai-yeu-anh.mp3'
            },
            {
                img: "https://images.genius.com/cfb3f64ab2fc08506b2365b1d8ab959b.600x600x1.webp",
                title: "Thay mọi cô gái yêu anh",
                singer: "AMEE",
                album: "Chạy Về Khóc Với Anh (Single)",
                time: "03:44",
                src: 'thay-moi-co-gai-yeu-anh.mp3'
            },
            {
                img: "https://images.genius.com/cfb3f64ab2fc08506b2365b1d8ab959b.600x600x1.webp",
                title: "Thay mọi cô gái yêu anh",
                singer: "AMEE",
                album: "Chạy Về Khóc Với Anh (Single)",
                time: "03:44",
                src: 'thay-moi-co-gai-yeu-anh.mp3'
            },
            
        ],
        src: '',
        firstInteval: null,
        secondIntevel: null,
        live_song: {},
        index_song: 0

    }),

    getters: {
        vol: state => {
            return state.vol
        },
        sing: state => {
            return state.sing
        },
        loop: state => {
            return state.loop
        },
        ended: state => {
            return state.ended
        },
        duration: state => {
            return state.duration
        },
        timeEnd: state => {
            return state.timeEnd
        },
        timeCurrent: state => {
            return state.timeCurrent
        },
        timeViewDuration: state => {
            return state.timeViewDuration
        },
        songs: state => {
            return state.songs
        },
        src: state => {
            return state.src
        },
        firstInteval: state => {
            return state.firstInteval
        },
        secondIntevel: state => {
            return state.secondIntevel
        },
        live_song: state => {
            return state.live_song
        },
        index_song: state => {
            return state.index_song
        }
    },

    mutations: {
        sing(state, value) {
            state.sing = value
        },
        vol(state, value) {
            state.vol = value
        },
        loop(state, value) {
            state.loop = value
        },
        ended(state, value) {
            state.ended = value
        },
        duration(state, value) {
            state.duration = value
        },
        timeEnd(state, value) {
            state.timeEnd = value
        },
        timeCurrent(state, value) {
            state.timeCurrent = value
        },
        timeViewDuration(state, value) {
            state.timeViewDuration = value
        },
        songs(state, value) {
            state.songs = value
        },
        src(state, value) {
            state.src = value
        },
        firstInteval(state, value) {
            state.firstInteval = value
        },
        secondIntevel(state, value) {
            state.secondIntevel = value
        },
        updateTimeCurrent(state, value) {
            state.timeCurrent = value
        },
        updateSing(state, value) {
            state.sing = value
        },
        updateVol(state, value) {
            state.vol = value
        },
        updateLiveSong(state, value) {
            state.live_song = value
        },
        updateIndexSong(state, value) {
            state.index_song = value
        },
    },

    actions: {
        playAudio({ commit, getters, dispatch }, data) {
            var aud = document.getElementById("myAudio");
            clearInterval(getters.firstInteval)
            commit('firstInteval', null)
            clearInterval(getters.secondIntevel)
            commit('secondIntevel', null)
            if (data == true) {
                commit('updatePlay', true, { root: true })
                aud.pause()
                clearInterval(getters.firstInteval)
                clearInterval(getters.secondIntevel)
                commit('firstInteval', null)
                commit('secondIntevel', null)
            } else {
                commit('updatePlay', false, { root: true })
                aud.play()
                //calculate to time to display
                commit('timeCurrent', aud.currentTime)
                commit('firstInteval', setInterval(() => {
                    commit('timeCurrent', getters.timeCurrent + 1)

                    if (getters.timeCurrent == getters.timeEnd) {
                        commit('timeCurrent', 0)
                        commit('timeViewDuration', '0:00')
                        if (!getters.loop) {
                            clearInterval(getters.firstInteval)
                            if (getters.songs.length - 1 === getters.index_song) {
                                commit('updatePlay', true, { root: true })
                            } else {
                                dispatch('nextSong')
                            }
                        } else {
                            dispatch('nextSong')
                        }
                    }

                    var minute = Math.floor(getters.timeCurrent / 60)
                    var second = Math.floor(getters.timeCurrent % 60)
                    if (second < 10) {
                        second = '0' + second
                    }
                    commit('timeViewDuration', minute + ':' + second)
                }, 1000))
            }
        },
        updateSrc({ commit, getters }, payload) {
            if (payload) {
                commit('src', payload)
            } else {
                commit('src', getters.songs[0].src)
            }
        },
        mounted({ commit, getters }) {
            var aud = document.getElementById("myAudio")
            aud.volume = getters.vol / 100
            aud.loop = true

            commit('ended', aud.ended)
            aud.onloadedmetadata = () => {
                commit('duration', Math.floor(aud.duration / 60) + ':' + Math.floor(aud.duration % 60))
                commit('timeEnd', Math.floor(aud.duration))
            }
            commit('updateLiveSong', getters.songs[0])
            setInterval(() => {
                commit('ended', aud.ended)
            }, 1000)
        },
        loopAudio({ commit, getters }) {
            commit('loop', !getters.loop)
            if (getters.loop) {
                document.getElementById("myAudio").loop = true;
            } else {
                document.getElementById("myAudio").loop = false;
            }
        },
        playTimeCurrent({ commit, getters, dispatch }) {
            var aud = document.getElementById("myAudio");
            aud.currentTime = getters.timeCurrent
            clearInterval(getters.firstInteval)
            clearInterval(getters.secondIntevel)
            commit('firstInteval', null)
            commit('secondIntevel', null)
            commit('secondIntevel', setInterval(() => {
                commit('timeCurrent', getters.timeCurrent + 1)
                if (getters.timeCurrent == getters.timeEnd) {
                    commit('timeCurrent', 0)
                    commit('timeViewDuration', '0:00')
                    if (!getters.loop) {
                        clearInterval(getters.secondIntevel)
                        if (getters.songs.length - 1 === getters.index_song) {
                            commit('updatePlay', true, { root: true })
                        } else {
                            dispatch('nextSong')
                        }
                    } else {
                        dispatch('nextSong')
                    }
                }

                var minute = Math.floor(getters.timeCurrent / 60)
                var second = Math.floor(getters.timeCurrent % 60)
                if (second < 10) {
                    second = '0' + second
                }
                commit('timeViewDuration', minute + ':' + second)
            }, 1000)
            )
        },
        updateTimeCurrent({ commit }, payload) {
            commit('updateTimeCurrent', payload)
        },
        updateSing({ commit, getters }, payload) {
            var aud = document.getElementById("myAudio");
            if (getters.sing == false) {
                aud.muted = true;
            } else {
                aud.muted = false;
            }
            commit('updateSing', payload)
        },
        updateVol({ commit }, payload) {
            var aud = document.getElementById("myAudio")
            aud.volume = payload / 100
            commit('updateVol', payload)
        },
        updateLiveSong({ commit }, payload) {
            commit('updateLiveSong', payload)
        },
        prevSong({ commit, getters, dispatch }) {
            if (getters.index_song  >= 1) {
                var payload = getters.songs[getters.index_song - 1]
                commit('updateLiveSong', payload)
                commit('updateIndexSong', getters.index_song - 1)
                dispatch('updateSrc', getters.songs[getters.index_song].src)

                //get list haven't been played
                var temp = []
                for(let i = getters.index_song; i < getters.songs.length; i++){
                    temp.push(getters.songs[i])
                }
                dispatch('sidebarRight/updateItems', temp, { root: true })

                //get list played
                temp = []
                for(let i = 0; i <= getters.index_song; i++){
                    temp.push(getters.songs[i])
                }
                dispatch('sidebarRight/updateSongPlayed', temp, { root: true })

                var aud = document.getElementById("myAudio")
                aud.load()
                dispatch('playAudio', false)
            }

        },
        nextSong({ commit, getters, dispatch }) {
            var temp = []

            if (getters.index_song + 1 <= getters.songs.length - 1) {
                commit('updateLiveSong', getters.songs[getters.index_song + 1])
                commit('updateIndexSong', getters.index_song + 1)
                dispatch('updateSrc', getters.songs[getters.index_song].src)
            } else {
                commit('updateLiveSong', getters.songs[0])
                commit('updateIndexSong', 0)
                dispatch('updateSrc', getters.songs[0].src)
            }
            for(let i = getters.index_song; i < getters.songs.length; i++){
                temp.push(getters.songs[i])
            }
            dispatch('sidebarRight/updateItems', temp, { root: true })

            temp = []
            for(let i = 0; i <= getters.index_song; i++){
                temp.push(getters.songs[i])
            }
            dispatch('sidebarRight/updateSongPlayed', temp, { root: true })

            var aud = document.getElementById("myAudio")
            aud.load()
            dispatch('playAudio', false)
        },
        updateIndexSong({ commit }, payload) {
            commit('updateIndexSong', payload)
        },
        showNavRight({ commit }) {
            commit('updateNavRight', null, { root: true })
        }
    }
}

// export default {
//     state, getters, mutations, actions
// }