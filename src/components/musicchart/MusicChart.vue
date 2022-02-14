<template>
  <v-col>
    <v-card height="100%" style="background-color: #170f23;">
      <line-chart />
      <div style="padding: 12px;">
        <v-row
          style="background-color: transparent"
          class="py-2"
          align="center"
          align-content="center"
          v-for="(top100, index) in listTop100"
          :key="index"
        >
          <v-col md="1">
            <v-icon color="white">mdi-numeric-{{ index + 1 }}-circle-outline</v-icon>
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
            <p class="my-0">{{ top100.ablum }}</p>
          </v-col>
          <v-col md="1">
            <p class="my-0">{{ top100.time }}</p>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </v-col>
</template>

<script>
import LineChart from "./LineChart.vue";
export default {
  components: {
    LineChart,
  },
  data() {
    return {
      listTop100: [
        {
          img: "https://i.ytimg.com/vi/EBpp2VTSI2Q/maxresdefault.jpg",
          title: "Chạy Về Khóc Với Anh",
          singer: "Erik",
          album: "Chạy Về Khóc Với Anh (Single)",
          time: "03:44",
        },
        {
          img: "https://images.genius.com/cfb3f64ab2fc08506b2365b1d8ab959b.600x600x1.webp",
          title: "Thay mọi cô gái yêu anh",
          singer: "AMEE",
          album: "Chạy Về Khóc Với Anh (Single)",
          time: "03:44",
        },
        {
          img: "https://i.ytimg.com/vi/EBpp2VTSI2Q/maxresdefault.jpg",
          title: "Chạy Về Khóc Với Anh",
          singer: "Erik",
          album: "Chạy Về Khóc Với Anh (Single)",
          time: "03:44",
        },
        {
          img: "https://i.ytimg.com/vi/EBpp2VTSI2Q/maxresdefault.jpg",
          title: "Chạy Về Khóc Với Anh",
          singer: "Erik",
          album: "Chạy Về Khóc Với Anh (Single)",
          time: "03:44",
        },
        {
          img: "https://i.ytimg.com/vi/EBpp2VTSI2Q/maxresdefault.jpg",
          title: "Chạy Về Khóc Với Anh",
          singer: "Erik",
          album: "Chạy Về Khóc Với Anh (Single)",
          time: "03:44",
        },
        {
          img: "https://i.ytimg.com/vi/EBpp2VTSI2Q/maxresdefault.jpg",
          title: "Chạy Về Khóc Với Anh",
          singer: "Erik",
          album: "Chạy Về Khóc Với Anh (Single)",
          time: "03:44",
        },
        {
          img: "https://i.ytimg.com/vi/EBpp2VTSI2Q/maxresdefault.jpg",
          title: "Chạy Về Khóc Với Anh",
          singer: "Erik",
          album: "Chạy Về Khóc Với Anh (Single)",
          time: "03:44",
        },
        {
          img: "https://i.ytimg.com/vi/EBpp2VTSI2Q/maxresdefault.jpg",
          title: "Chạy Về Khóc Với Anh",
          singer: "Erik",
          album: "Chạy Về Khóc Với Anh (Single)",
          time: "03:44",
        },
        {
          img: "https://i.ytimg.com/vi/EBpp2VTSI2Q/maxresdefault.jpg",
          title: "Chạy Về Khóc Với Anh",
          singer: "Erik",
          album: "Chạy Về Khóc Với Anh (Single)",
          time: "03:44",
        },
        {
          img: "https://i.ytimg.com/vi/EBpp2VTSI2Q/maxresdefault.jpg",
          title: "Chạy Về Khóc Với Anh",
          singer: "Erik",
          album: "Chạy Về Khóc Với Anh (Single)",
          time: "03:44",
        },
        {
          img: "https://i.ytimg.com/vi/EBpp2VTSI2Q/maxresdefault.jpg",
          title: "Chạy Về Khóc Với Anh",
          singer: "Erik",
          album: "Chạy Về Khóc Với Anh (Single)",
          time: "03:44",
        },
        {
          img: "https://i.ytimg.com/vi/EBpp2VTSI2Q/maxresdefault.jpg",
          title: "Chạy Về Khóc Với Anh",
          singer: "Erik",
          album: "Chạy Về Khóc Với Anh (Single)",
          time: "03:44",
        },
        {
          img: "https://i.ytimg.com/vi/EBpp2VTSI2Q/maxresdefault.jpg",
          title: "Chạy Về Khóc Với Anh",
          singer: "Erik",
          album: "Chạy Về Khóc Với Anh (Single)",
          time: "03:44",
        },
        {
          img: "https://i.ytimg.com/vi/EBpp2VTSI2Q/maxresdefault.jpg",
          title: "Chạy Về Khóc Với Anh",
          singer: "Erik",
          album: "Chạy Về Khóc Với Anh (Single)",
          time: "03:44",
        },
        {
          img: "https://i.ytimg.com/vi/EBpp2VTSI2Q/maxresdefault.jpg",
          title: "Chạy Về Khóc Với Anh",
          singer: "Erik",
          album: "Chạy Về Khóc Với Anh (Single)",
          time: "03:44",
        },
      ],
      songs: [],
    };
  },
  methods: {
    checkPause(index) {
      if (this.songs[index] == true) {
        this.songs = new Array(this.songs.length).fill(false);
        return;
      }
      this.songs = new Array(this.songs.length).fill(false);
      this.songs[index] = true;
    },
  },
};
</script>

<style scoped>
.btn-name-singer {
  min-width: 0px !important;
  padding: 0px !important;
  height: 0px !important;
}
    .bg-music-chart{
        background-image: url('http://hanoimoi.com.vn/Uploads/lequyen/2019/1/16/1(3).jpg');
    }
</style>