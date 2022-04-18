<template>
    <div>
        <data-table 
        :desserts="slides" 
        :headers="headers"
        to="/admin/slide/create"
        >
        </data-table>
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
            slides: [],
            headers: [
                { text: 'Link',value: 'link' },
                { text: 'Actions', value: 'actions' },
            ]
        }
    },
    created(){
        this.getAllSlide()
    },
    methods:{
        getAllSlide(){
            axios.get('/slide/get-all-slide')
            .then( (response) => {
                this.slides = response.data.slides
            })
            .catch( () => {
                console.log('fail')
            })
        }
    }
}
</script>