<template>
    <div>
        <data-table :desserts="composers" :headers="headers"></data-table>
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
            composers: [],
            headers: [
                { text: 'Code người dùng',value: 'user_id' },
                { text: 'Biệt danh', value: 'nickname' },
                { text: 'Actions', value: 'actions' }
            ]
        }
    },
    created(){
        this.getAllComposer()
        this.$store.dispatch('updateShowMenu', false)
    },
    methods: {
        getAllComposer(){
            axios.get('/user/composer/get-all-composer')
            .then((response) => {
                this.composers = response.data.composers
            })
            .catch(() => {
                console.log('fail to get composers')
            })
        }
    }
}
</script>