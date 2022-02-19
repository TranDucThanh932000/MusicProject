<template>
    <v-col>
        <Radio/>
        <Schedule/>
    </v-col>
</template>

<script>
import Radio from '../main/Radio.vue'
import Schedule from './Schedule.vue'
export default {
    components:{
        Radio,
        Schedule
    },
    data() {
        return{

        }
    },
}
</script>