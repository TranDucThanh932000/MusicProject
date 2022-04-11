<template>
    <router-view></router-view>
</template>

<script>
export default { 
    created(){
        this.$store.dispatch('updateShowMenu', false)
        this.$store.dispatch('updateShowFixedPlay', false)
        this.$store.dispatch('sideBar/updateItemSideBars', [
            { title: "Bài hát", icon: "mdi-account-music" ,to:'/admin/song'},
            { title: "Album", icon: "mdi-album",to:'/admin/album' },
            { title: "Thể loại", icon: "mdi-format-list-bulleted-type",to:'/admin/genre' },
            { title: "Ca sỹ", icon: "mdi-account-star",to:'/admin/singer' },
            { title: "Người sáng tác", icon: "mdi-account-star",to:'/admin/composer' },
            { title: "Thiết lập tài khoản", icon: "mdi-account-cog-outline",to:'/admin/setup-account' },
        ])
    }
}
</script>