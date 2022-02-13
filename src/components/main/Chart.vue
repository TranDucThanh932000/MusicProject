<template>
  <div
    class="d-flex pa-3"
    style="background-color: #ba68c8; margin-right: 18px"
  >
    <div style="width: 33%; margin-right: 2%">
      <v-btn text color="white" class="btn-musicchart">
        #musicchart
        <v-icon>mdi-play-circle</v-icon>
      </v-btn>
      <div
        style="
          width: 100%;
          height: 90.5%;
          display: flex;
          flex-wrap: wrap;
          align-content: space-between;
        "
      >
        <div v-for="(top3, index) in listTop3" :key="index" style="width: 100%">
          <v-card
            class="d-flex px-1"
            :style="{ backgroundColor: gradient[index] }"
          >
            <div style="display: flex; align-items: center">
              <v-icon color="white">{{ icons[index] }}</v-icon>
              <v-btn text class="btn-play">
                <v-img
                  :src="top3.img"
                  height="65px"
                  width="65px"
                  style="object-fit: cover;border-radius: 3px;"
                ></v-img>
                <div
                  style="position: absolute"
                  v-if="songs[index] === true"
                  @click="checkPause(index)"
                >
                  <v-icon>mdi-pause</v-icon>
                </div>
                <div
                  style="position: absolute"
                  v-else
                  @click="checkPause(index)"
                >
                  <v-icon>mdi-play</v-icon>
                </div>
              </v-btn>
            </div>
            <div>
              <v-card-title>{{ top3.title }}</v-card-title>
              <v-card-text>{{ top3.singer }}</v-card-text>
            </div>
          </v-card>
        </div>
      </div>
    </div>
    <v-card style="margin-top: 36px" width="calc(65% - 15px)" height="100%">
      <v-sheet color="#BA68C8" height="350px" style="position: relative">
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
      gradient: [["#FF1744"], ["#1E88E5"], ["#C0CA33"]],
      icons: [
        "mdi-numeric-1-circle-outline",
        "mdi-numeric-2-circle-outline",
        "mdi-numeric-3-circle-outline",
      ],
      listTop3: [
        {
          img: "https://i.ytimg.com/vi/EBpp2VTSI2Q/maxresdefault.jpg",
          title: "Chạy Về Khóc Với Anh",
          singer: "Erik",
        },
        {
          img: "https://images.genius.com/cfb3f64ab2fc08506b2365b1d8ab959b.600x600x1.webp",
          title: "Thay mọi cô gái yêu anh",
          singer: "AMEE",
        },
        {
          img: "https://i.ytimg.com/vi/EBpp2VTSI2Q/maxresdefault.jpg",
          title: "Chạy Về Khóc Với Anh",
          singer: "Erik",
        },
      ],
      songs: [false, false, false],
    };
  },
  methods: {
    checkPause(index) {
      if (this.songs[index] == true) {
        this.songs = [false,false,false]
        return;
      }
      if (index == 0) {
        this.songs = [true, false, false];
      } else if (index == 1) {
        this.songs = [false, true, false];
      } else {
        this.songs = [false, false, true];
      }
    },
  },
};
</script>

<style scope>
.chart-line {
  width: 100%;
  position: absolute;
  bottom: 0px;
  max-height: 350px;
}
.btn-play:before {
  opacity: 0 !important;
}
.v-ripple__container {
  display: none;
}
.btn-musicchart:before{
    opacity: 0 !important;
}
</style>