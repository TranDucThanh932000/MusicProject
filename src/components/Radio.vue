<template>
  <div style="background-color: #170f23; padding-bottom: 15px">
    <h3>Radio Nổi Bật</h3>
    <v-row>
      <v-sheet
        class="mx-auto"
        style="
          background-color: #170f23;
          margin: 0px !important;
          width: 100%;
          margin-top: 20px;
        "
      >
        <v-slide-group active-class="success" show-arrows>
          <v-slide-item v-for="(radio, index) in radios" :key="index">
            <div class="">
              <v-card
                class="ma-4 imgContainBtnPlay"
                height="166px"
                width="166px"
                style="border-radius: 50%"
              >
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                  style="height: 166px; width: 166px; margin: 0px"
                >
                  <v-scale-transition>
                    <v-img
                      :src="radio.img"
                      style="
                        object-fit: cover;
                        height: 166px;
                        width: 166px;
                        border-radius: 50%;
                        position: relative;"
                    >
                      <div class="mask-play" style="position: relative;height: 100%;opacity: 0.5; background-color: black;"></div>
                      <div class="btnPlay" style="position: absolute;justify-content: center;height: 100%;width:100%;align-items: center;top:0px;">
                        <v-btn plain outlined style="color:white;min-width: 0px;height: 50px;width: 50px;border-radius:50px;">
                          <v-icon>mdi-play</v-icon>
                        </v-btn>
                      </div>
                    </v-img>
                  </v-scale-transition>
                  <p class="live">LIVE</p>
                </v-row>
              </v-card>
              <div style="text-align: center">
                <h4>{{ radio.channel }}</h4>
                <h5>{{ radio.view }}</h5>
              </div>
            </div>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radios: [
        {
          img: "https://i.ytimg.com/vi/HXkh7EOqcQ4/maxresdefault.jpg",
          link: "",
          channel: "XONE Radio",
          view: "1k đang nghe",
        },
        {
          img: "https://i.ytimg.com/vi/HXkh7EOqcQ4/maxresdefault.jpg",
          link: "",
          channel: "On Air",
          view: "2k đang nghe",
        },
        {
          img: "https://i.ytimg.com/vi/HXkh7EOqcQ4/maxresdefault.jpg",
          link: "",
          channel: "Chạm",
          view: "56 đang nghe",
        },
        {
          img: "https://i.ytimg.com/vi/HXkh7EOqcQ4/maxresdefault.jpg",
          link: "",
          channel: "V-POP",
          view: "123 đang nghe",
        },
        {
          img: "https://i.ytimg.com/vi/HXkh7EOqcQ4/maxresdefault.jpg",
          link: "",
          channel: "Bolero",
          view: "56 đang nghe",
        },
        {
          img: "https://i.ytimg.com/vi/HXkh7EOqcQ4/maxresdefault.jpg",
          link: "",
          channel: "US-UK",
          view: "56 đang nghe",
        },
        {
          img: "https://i.ytimg.com/vi/HXkh7EOqcQ4/maxresdefault.jpg",
          link: "",
          channel: "K-POP",
          view: "56 đang nghe",
        },
        {
          img: "https://znews-photo.zadn.vn/w660/Uploaded/izhqv/2018_10_14/thang_dien_0.jpg",
          link: "",
          channel: "Bolero",
          view: "56 đang nghe",
        },
        {
          img: "https://znews-photo.zadn.vn/w660/Uploaded/izhqv/2018_10_14/thang_dien_0.jpg",
          link: "",
          channel: "Bolero",
          view: "56 đang nghe",
        },
        {
          img: "https://znews-photo.zadn.vn/w660/Uploaded/izhqv/2018_10_14/thang_dien_0.jpg",
          link: "",
          channel: "Bolero",
          view: "56 đang nghe",
        },
      ],
    };
  },
};
</script>

<style>
.mdi-chevron-left {
  color: white !important;
  font-size: 40px !important;
}
.mdi-chevron-right {
  color: white !important;
  font-size: 40px !important;
}

.v-slide-group__prev {
  min-width: 0px !important;
}
.v-slide-group__next {
  min-width: 0px !important;
}
.live {
  background-color: red;
  color: white;
  font-size: 10px;
  padding: 0px 5px;
  border-radius: 3px;
  position: absolute;
  bottom: -8px;
  margin-bottom: 0px !important;
}
.mdi-play{
  font-size: 40px !important;
}
.mask-play{
  display: none;
}
.btnPlay{
  display: none;
}
.imgContainBtnPlay:hover .mask-play{
  display: block;
}
.mask-play:hover + .btnPlay{
  display: flex;
}
.btnPlay:hover{
  display: flex;
}
</style>