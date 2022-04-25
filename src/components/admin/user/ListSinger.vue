<template>
    <div>
        <data-table :desserts="singers" :headers="headers"></data-table>
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
            singers: [],
            headers: [
                { text: 'Code người dùng',value: 'user_id' },
                { text: 'Biệt danh', value: 'nickname' },
                { text: 'Actions', value: 'actions' }
            ]
        }
    },
    created(){
        this.getAllSinger()
        this.$store.dispatch('updateShowMenu', false)
    },
    methods: {
        getAllSinger(){
            axios.get('/user/singer/get-all-singer')
            .then((response) => {
                this.singers = response.data.singers
            })
            .catch(() => {
                console.log('fail to get singers')
            })
        }
    }
}
</script>