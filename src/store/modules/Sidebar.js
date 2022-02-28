export default {
    namespaced: true,
    state : () => ({
        itemSideBars: [
            { title: "Cá Nhân", icon: "mdi-account-music" ,to:'/'},
            { title: "Khám Phá", icon: "mdi-sort-alphabetical-variant",to:'/' },
            { title: "#musicchart", icon: "mdi-music",to:'/music-chart' },
            { title: "#Radio", icon: "mdi-radio",to:'/radio' },
            { title: "Theo Dõi", icon: "mdi-bell",to:'/' },
          ],
          itemBelowSideBars: [
            { title: "Nhạc Mới", icon: "mdi-new-box" },
            { title: "Thể Loại", icon: "mdi-shape" },
            { title: "Top 100", icon: "mdi-star" },
            { title: "MV", icon: "mdi-shopping-music" },
          ],
          logo:'logo-coc-mountain.png',
    }),
    getters: {
        itemSideBars : state => state.itemSideBars,
        itemBelowSideBars : state => state.itemBelowSideBars,
        logo : state => state.logo
    }
}