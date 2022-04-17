<template>
    <div>
        <data-table :desserts="albums" :headers="headers" to="/admin/album/create"></data-table>
    </div>
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
            albums: [],
            headers: [
                { text: 'Tên album',value: 'name' },
                { text: 'Ảnh', value: 'image' },
                { text: 'Ngày ra mắt', value: 'releaseDate'},
                { text: 'Actions', value: 'actions' },
            ]
        }
    },
    created(){
        this.getAllSong()
    },
    methods:{
        getAllSong(){
            axios.get('/album/get-all-album')
            .then( (response) => {
                this.albums = response.data.albums
            })
            .catch( () => {
                console.log('fail')
            })
        }
    }
}
</script>