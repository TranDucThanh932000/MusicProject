<template>
    <v-sheet color="#BA68C8" height="380px" style="position: relative">
      <v-sparkline
        :labels="time"
        :value="value1"
        line-width="3"
        padding="16"
        auto-draw
        smooth="4"
        :gradient="gradient[0]"
        class="chart-line"
      ></v-sparkline>
      <v-sparkline
        :labels="time"
        :value="value2"
        line-width="3"
        padding="16"
        auto-draw
        smooth="4"
        :gradient="gradient[1]"
        class="chart-line"
      ></v-sparkline>
      <v-sparkline
        :labels="time"
        :value="value3"
        line-width="3"
        padding="16"
        auto-draw
        smooth="4"
        :gradient="gradient[2]"
        class="chart-line"
      ></v-sparkline>
    </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      time: ["0:00", "3:00", "6:00", "9:00", "12:00", "15:00", "18:00", "21:00"],
      value1: [229, 675, 410, 390, 310, 460, 250, 240],
      value2: [300, 125, 500, 390, 300, 456, 250, 240],
      value3: [100, 321, 456, 222, 333, 231, 777, 555],
      gradient: [["#FF1744"], ["#1E88E5"], ["#C0CA33"]],
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
</style>