<template>
    <v-sheet :color="color" height="380px" style="position: relative;">
      <div :style="bg_img == ''? '' : bgImg"></div>
      <div class="blur_bg" style="background-image: linear-gradient( 0deg,hsla(0,0%,100%,0) 37%,#170f23);"></div>
      <div class="blur_bg" style="background-image: linear-gradient( 90deg,hsla(0,0%,100%,0) 95%,#170f23);"></div>
      <div class="blur_bg" style="background-image: linear-gradient( 180deg,hsla(0,0%,100%,0) 37%,#170f23);"></div>
      <div class="blur_bg" style="background-image: linear-gradient( 270deg,hsla(0,0%,100%,0) 95%,#170f23);"></div>
      <div class="blur_bg" style="background-image: linear-gradient( 180deg,#170f23,#170f23); opacity: 0.3;"></div>
      <v-sparkline
        :labels="time"
        :value="value1"
        line-width="2"
        padding="16"
        auto-draw
        smooth="4"
        :fill="fill === 1"
        :gradient="gradient[0]"
        :style="fill === 1?'z-index: 99999':''"
        class="chart-line chart-line-1"
      ></v-sparkline>
      <v-sparkline
        :labels="time"
        :value="value2"
        line-width="2"
        padding="16"
        auto-draw
        smooth="4"
        :fill="fill === 2"
        :gradient="gradient[1]"
        :style="fill === 2?'z-index: 99999':''"
        class="chart-line chart-line-2"
      ></v-sparkline>
      <v-sparkline
        :labels="time"
        :value="value3"
        line-width="2"
        padding="16"
        auto-draw
        smooth="4"
        :fill="fill === 3"
        :gradient="gradient[2]"
        :style="fill === 3?'z-index: 99999':''"
        class="chart-line chart-line-3"
      ></v-sparkline>
    </v-sheet>
</template>

<script>
export default {
  props:{
    color: {
      type: String,
      default: '#BA68C8',
    },
    bg_img: {
      type: String,
      default: ''
    },
    fill: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      time: ["0:00", "3:00", "6:00", "9:00", "12:00", "15:00", "18:00", "21:00"],
      value1: [229, 675, 410, 390, 310, 460, 250, 555],
      value2: [300, 125, 500, 390, 300, 456, 250, 240],
      value3: [100, 321, 456, 222, 333, 231, 777, 100],
      gradient: [["#FF1744"], ["#1E88E5"], ["#C0CA33"]],
      bgImg : {
        backgroundImage: this.bg_img,
        'background-position' : 'center center',
        'background-size': 'cover',
        'height' : '100%',
      },
    };
  },
};
</script>

<style scoped>
    .chart-line {
      width: 100%;
      position: absolute;
      bottom: 0px;
      max-height: 380px;
    }
    .blur_bg{
      position:absolute;
      top: 0px ; 
      width: 100%;
      height: 100%; 
    }

</style>