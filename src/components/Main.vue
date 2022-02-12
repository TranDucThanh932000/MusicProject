<template>
    <v-col md="10">
        <Menu/>
        <slider-top></slider-top>
        <just-now></just-now>
        <selected-today></selected-today>
        <xoner-coner></xoner-coner>
        <Radio></Radio>
    </v-col>
</template>

<script>
import Menu from './Menu.vue'
import SliderTop from './SliderTop.vue'
import JustNow from './JustNow.vue'
import SelectedToday from './SelectedToday.vue'
import XonerConer from './XonerConer.vue'
import Radio from './Radio.vue'

export default {
    components:{
        Menu,
        SliderTop,
        JustNow,
        SelectedToday,
        XonerConer,
        Radio
    },
    data() {
        return{

        }
    },
}
</script>