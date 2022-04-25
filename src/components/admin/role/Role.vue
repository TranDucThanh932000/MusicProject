<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
export default { 
    mounted(){
        this.$store.dispatch('updateShowMenu', false)
        this.$store.dispatch('sideBar/updateItemSideBars', [
            { title: "Bài hát", icon: "mdi-account-music" ,to:'/admin/song'},
            { title: "Album", icon: "mdi-album",to:'/admin/album' },
            { title: "Thể loại", icon: "mdi-format-list-bulleted-type",to:'/admin/genre' },
            { title: "Người dùng", icon: "mdi-account-settings",to:'/admin/user' },
            { title: "Ca sỹ", icon: "mdi-account-star",to:'/admin/user/singer' },
            { title: "Người sáng tác", icon: "mdi-account-star",to:'/admin/user/composer' },
            { title: "Vai trò", icon: "mdi-account-star", to: "/admin/role"},
            { title: "Thiết lập quyền", icon: "mdi-account-star", to: "/admin/setup-role"},
            { title: "Định dạng tài khoản", icon: "mdi-account-cog-outline",to:'/admin/setup-account' },
        ])
    },
    // watch:{
    //     "$route.name": function () {
    //         if(this.$route.path.includes('admin')){
    //             this.$store.dispatch('updateShowFixedPlay', false)
    //         }
    //     },
    // }
}
</script>