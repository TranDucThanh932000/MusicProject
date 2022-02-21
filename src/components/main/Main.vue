<template>
    <v-col>
        <Menu/>
        <slider-top></slider-top>
        <just-now></just-now>
        <selected-today></selected-today>
        <xoner-coner></xoner-coner>
        <Radio></Radio>
        <NewSongEachDay/>
        <Chart/>
    </v-col>
</template>

<script>
import Menu from '../Menu.vue'
import SliderTop from './SliderTop.vue'
import JustNow from './JustNow.vue'
import SelectedToday from './SelectedToday.vue'
import XonerConer from './XonerConer.vue'
import Radio from './Radio.vue'
import NewSongEachDay from './NewSongEachDay.vue'
import Chart from './Chart.vue'

export default {
    components:{
        Menu,
        SliderTop,
        JustNow,
        SelectedToday,
        XonerConer,
        Radio,
        NewSongEachDay,
        Chart
    },
    data() {
        return{
          
        }
    },
}
</script>

<style>
    .opa:hover > .hoverImg{
      opacity: 0.6;
    }

    .moreTools{
      display: none;
    }

    .opa:hover > .moreTools{
      display: block;
    }
</style>