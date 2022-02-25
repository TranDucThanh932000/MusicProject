export default  {
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
        { src: 'em-bo-hut-thuoc-chua-liu-riu-Bich-Phuong.mp3' },
        { src: 'em-bo-hut-thuoc-chua-liu-riu-Bich-Phuong.mp3' },
        { src: 'thay-moi-co-gai-yeu-anh.mp3' },
        { src: 'em-bo-hut-thuoc-chua-liu-riu-Bich-Phuong.mp3' },
        { src: 'thay-moi-co-gai-yeu-anh.mp3' }
    ],
    src: '',
    firstInteval: null,
    secondIntevel: null
}),

 getters : {
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
    }
},

 mutations : {
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
    updateSing(state, value){
        state.sing = value
    },
    updateVol(state, value){
        state.vol = value
    }
},

actions : {
    playAudio({ commit, getters}, data) {
        var aud = document.getElementById("myAudio");
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
                        commit('updatePlay', true, { root: true })
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
    updateSrc({ commit , getters}) {
        commit('src', getters.songs[0].src)
    },
    mounted({ commit,getters }) {
        var aud = document.getElementById("myAudio")
        aud.volume = getters.vol / 100
        aud.loop = true

        commit('ended', aud.ended)
        aud.onloadedmetadata = () => {
            commit('duration', Math.floor(aud.duration / 60) + ':' + Math.floor(aud.duration % 60))
            commit('timeEnd', Math.floor(aud.duration))
        }
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
    playTimeCurrent({ commit, getters }) {
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
                    commit('updatePlay', true, { root: true })
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
    updateSing({commit , getters}, payload){
        var aud = document.getElementById("myAudio");
        if(getters.sing == false){
            aud.muted = true;
        }else{
            aud.muted = false;
        }
        commit('updateSing', payload)
    },
    updateVol({commit}, payload){
        var aud = document.getElementById("myAudio")
        aud.volume = payload / 100
        commit('updateVol', payload)
    }
}
}

// export default {
//     state, getters, mutations, actions
// }