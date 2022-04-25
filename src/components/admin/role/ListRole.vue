<template>
    <div>
        <data-table :desserts="roles" :headers="headers" to="/admin/role/create"></data-table>
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
            roles: [],
            headers: [
                { text: 'Tên vai trò',value: 'name' },
                { text: 'Mô tả', value: 'display_name'},
                { text: 'Actions', value: 'actions' },
            ]
        }
    },
    created(){
        this.getAllRole()
    },
    methods:{
        getAllRole(){
            axios.get('/user/role/get-all-role')
            .then( (response) => {
                this.roles = response.data.roles
            })
            .catch( () => {
                console.log('fail')
            })
        }
    }
}
</script>