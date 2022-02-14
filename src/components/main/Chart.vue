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
          height: 81%;
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
      <div style="text-align: center;width:100%;margin: 10px auto;">
        <v-btn outlined rounded color="white">
          <router-link to = "/music-chart" style="color: white">Xem thêm</router-link>
        </v-btn>
      </div>
    </div>
    <v-card style="margin-top: 36px" width="calc(65% - 15px)" height="100%">
      <line-chart></line-chart>
    </v-card>
  </div>
</template>

<script>
import LineChart from '../musicchart/LineChart.vue';

export default {
  components: { LineChart },
  data() {
    return {
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
      gradient: [["#FF1744"], ["#1E88E5"], ["#C0CA33"]],
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