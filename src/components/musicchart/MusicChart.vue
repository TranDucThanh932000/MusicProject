<template>
  <v-col>
    <v-card height="100%" style="background-color: #170f23">
      <line-chart
      />
      <div class="style-top-3" style="padding: 12px">
        <v-row
          style="background-color: transparent"
          class="py-2"
          align="center"
          align-content="center"
          v-for="(top100, index) in listTop100"
          :key="index"
          :class="{'appear-top-100': index > 9}"
          :style="appear_top100?'display: flex' : ''"
        >
          <v-col md="1">
            <v-icon color="white" v-if="index < 10">mdi-numeric-{{ index + 1 }}</v-icon>
            <div v-else-if="index >= 10 && index < 99">
              <v-icon color="white" style="margin-left: -6px;">mdi-numeric-{{ ((index + 1) - (index + 1) % 10) / 10 }}</v-icon>
              <v-icon color="white" style="margin-left: -25px;">mdi-numeric-{{ (index + 1) % 10 }}</v-icon>
            </div>
            <div v-else>
              <v-icon color="white">mdi-numeric-10</v-icon>
              <v-icon color="white" style="margin-left: -19.5px;">mdi-numeric-0</v-icon>
            </div>
          </v-col>
          <v-col md="1">
            <v-icon color="white">mdi-minus</v-icon>
          </v-col>
          <v-col md="1">
            <v-btn text class="btn-play">
              <v-img
                :src="top100.img"
                height="50px"
                width="50px"
                style="object-fit: cover; border-radius: 3px"
              ></v-img>
              <div
                style="position: absolute"
                v-if="songs[index] === true"
                @click="checkPause(index)"
              >
                <v-icon>mdi-pause</v-icon>
              </div>
              <div style="position: absolute" v-else @click="checkPause(index)">
                <v-icon>mdi-play</v-icon>
              </div>
            </v-btn>
          </v-col>
          <v-col md="3">
            <p class="my-0">{{ top100.title }}</p>
            <v-btn text class="btn-name-singer" color="white">
              {{ top100.singer }}
            </v-btn>
          </v-col>
          <v-col md="5">
            <p class="my-0">{{ top100.album }}</p>
          </v-col>
          <v-col md="1">
            <p class="my-0">{{ top100.time }}</p>
          </v-col>
        </v-row>
        <v-row align="center" justify="center" class="py-3" v-if="appear_top100 == false">
          <div>
            <v-btn rounded outlined color="white" @click="updateAppearTop100">Xem top 100</v-btn>
          </div>
        </v-row>
      </div>
    </v-card>
  </v-col>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import LineChart from "./LineChart.vue";
export default {
  components: {
    LineChart,
  },
  created(){
    this.$store.dispatch('updateBgImgGlobal', "url('https://vnmedia.vn/file/8a10a0d36ccebc89016ce0c6fa3e1b83/old_image/201809/original/images2228470_le.jpg')")
  },
  methods: {
    ...mapActions('musicChart', ['checkPause','updateAppearTop100']),
  },
  computed: {
    ...mapGetters('musicChart', ['listTop100','color','songs','appear_top100'])
  }
};
</script>

<style scoped>
.btn-name-singer {
  min-width: 0px !important;
  padding: 0px !important;
  height: 0px !important;
}
.bg-music-chart {
  background-image: url("http://hanoimoi.com.vn/Uploads/lequyen/2019/1/16/1(3).jpg");
}

.style-top-3 > div:first-child > div:first-child > i {
  color: #FF1744 !important;
}

.style-top-3 div:nth-child(2) div:first-child i {
  color: #1E88E5 !important;
}

.style-top-3 div:nth-child(3) div:first-child i {
  color: #C0CA33 !important;
}

.style-top-3 i{
  font-size: 35px;
}
.appear-top-100{
  display: none;
}
</style>