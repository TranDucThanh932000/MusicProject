<template>
    <data-table :desserts="songs" :headers="headers"></data-table>
</template>

<script>
import axios from 'axios'
import DataTable from '../general_component/DataTable.vue'
export default {
    components:{
        DataTable
    },
    data(){
        return{
            songs: [],
            headers: [
                { text: 'Tên',value: 'name' },
                { text: 'Lyrics', value: 'lyrics' },
                { text: 'Thời lượng', value: 'timeDuration' },
                { text: 'Ảnh', value: 'image' },
                { text: 'Link source', value: 'src' },
                { text: 'Ngày ra mắt', value: 'releaseDate'},
                { text: 'Actions', value: 'actions' },
            ],
        }
    },
    created(){
        this.getAllSong(),
        this.$store.dispatch('sideBar/updateItemSideBars', [
            { title: "Bài hát", icon: "mdi-account-music" ,to:'/admin/song'},
            { title: "Album", icon: "mdi-album",to:'/admin/album' },
            { title: "Thể loại", icon: "mdi-format-list-bulleted-type",to:'/admin/genre' },
            { title: "Ca sỹ", icon: "mdi-account-star",to:'/admin/singer' },
        ])
    },
    methods:{
        getAllSong(){
            axios.get('/song/get-all-song')
            .then( (response) => {
                this.songs = response.data.songs
            })
            .catch( () => {
                console.log('fail')
            })
        }
    }
}
</script>