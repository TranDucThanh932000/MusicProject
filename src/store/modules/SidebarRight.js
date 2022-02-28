export default {
    namespaced: true,
    state: () => ({
        items: [
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
        height: 0,
        songPlayed: []
    }),
    getters: {
        items: state => state.items,
        height: state => state.height,
        songPlayed: state => state.songPlayed,
    },
    actions: {
        updateHeight( {commit}, payload){
            commit('updateHeight', payload)
        },
        updateItems({commit}, payload){
            commit('updateItems', payload)
        },
        updateSongPlayed({commit}, payload){
            commit('updateSongPlayed', payload)
        },
        firstUpdateSongPlayed({commit}, payload){
            commit('updateSongPlayed', [payload])
        }
    },
    mutations: {
        updateHeight(state, payload){
            state.height = payload
        },
        updateItems(state, payload){
            state.items = payload
        },
        updateSongPlayed(state, payload){
            state.songPlayed = payload
        }
    }
}