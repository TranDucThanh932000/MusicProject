<template>
  <div class="d-flex pa-3" style="background-color:#BA68C8;margin-right:18px;">
    <div style="width: 35%;">
        <v-btn text>
            #zingchart 
            <v-icon>mdi-play-circle</v-icon>
        </v-btn>
        <v-card>
            <v-icon>mdi-play-circle</v-icon>
            <v-btn text>
                <v-img src=""></v-img>
                <v-icon>mdi-play</v-icon>
            </v-btn>
        </v-card>
    </div>
    <v-card class="mt-4" width="calc(65% - 15px)" height="100%">
      <v-sheet color="#BA68C8" height="350px" style="position: relative">
        <v-sparkline
          :labels="time"
          :value="value1"
          line-width="1"
          padding="16"
          auto-draw
          smooth="4"
          :gradient="gradient1"
          class="chart-line"
        ></v-sparkline>
        <v-sparkline
          :labels="time"
          :value="value2"
          line-width="1"
          padding="16"
          auto-draw
          smooth="4"
          :gradient="gradient2"
          class="chart-line"
        ></v-sparkline>
        <v-sparkline
          :labels="time"
          :value="value3"
          line-width="1"
          padding="16"
          auto-draw
          smooth="4"
          :gradient="gradient3"
          class="chart-line"
        ></v-sparkline>
      </v-sheet>
    </v-card>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
      value1: [229, 675, 410, 390, 310, 460, 250, 240],
      value2: [300, 125, 500, 390, 300, 456, 250, 240],
      value3: [100, 321, 456, 222, 333, 231, 777, 555],
      gradient1: ["#FF1744"],
      gradient2: ["#1E88E5"],
      gradient3: ["#C0CA33"],
    };
  },
};
</script>

<style scope>
.chart-line {
  width: 100%;
  position: absolute;
  top: 0px;
  max-height: 350px;
}
</style>