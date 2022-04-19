<template>
    <div style="height: 100vh">
        <router-view></router-view>
    </div>
</template>

<script>
import axios from 'axios'
export default { 
    beforeCreate(){
        if(localStorage.getItem('music_token')){
            axios.get('/user/checkRole')
            .then( (response) => {
                if(!response.data.checkRole){
                    this.$router.push('/');
                }
            })
            .catch(() => {
                console.log('Fail to go admin')
            })
        }else{
            this.$router.push('/');
        }
    },
    mounted(){
        this.$store.dispatch('updateShowMenu', false)
        this.$store.dispatch('updateShowFixedPlay', false)
        this.$store.dispatch('sideBar/updateItemBelowSideBars', [
            { title: "Slide", icon: "mdi-image-area" ,to:'/admin/slide'},
        ])
        this.$store.dispatch('sideBar/updateItemSideBars', [
            { title: "Bài hát", icon: "mdi-account-music" ,to:'/admin/song'},
            { title: "Album", icon: "mdi-album",to:'/admin/album' },
            { title: "Thể loại", icon: "mdi-format-list-bulleted-type",to:'/admin/genre' },
            { title: "Người dùng", icon: "mdi-account-settings",to:'/admin/user' },
            { title: "Ca sỹ", icon: "mdi-account-star",to:'/admin/user/singer' },
            { title: "Người sáng tác", icon: "mdi-account-star",to:'/admin/user/composer' },
            { title: "Thiết lập tài khoản", icon: "mdi-account-cog-outline",to:'/admin/setup-account' },
        ])
    }
}
</script>