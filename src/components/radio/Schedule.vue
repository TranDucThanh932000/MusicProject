<template>
  <div
    class="pa-4"
    style="
      background-image: linear-gradient(#12c2e9, #c471ed, #f64f59);
      border-radius: 5px;
    "
  >
    <v-row>
      <v-col md="1">
        <div style="height: 78.5px; width: 100%"></div>
        <v-row v-for="(show, index) in listShow" :key="index + 1000">
          <v-col>
            <v-card style="background-color: transparent" flat>
              <v-card style="background-color: transparent" flat>
                <v-img
                  height="58px"
                  width="58px"
                  :src="show.imgChannel"
                  style="
                    object-fit: cover;
                    background-color: transparent;
                    border-radius: 50%;
                    border: 2px solid #dc143c;
                  "
                ></v-img>
              </v-card>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col md="11" style="position: relative;z-index: 0;">
        <v-sheet max-width="100%" color="transparent" height="100%">
          <v-btn plain style="position: absolute;z-index: 1;top: 45%;left:-20px;" @click="display_range(1)">
            <v-icon>mdi-arrow-left-bold</v-icon>
          </v-btn>
          <v-slide-group show-arrows class="dpbl" style="height: 100%" ref="auto_scroll" next-icon="" prev-icon="">
            <div>
              <div
                style="display: flex; margin-left: 6px"
                class="time-schedule"
              >
                <div
                  v-for="(n, index) in 24"
                  :key="n"
                  style="margin-left: 12px"
                >
                  <v-card
                    width="240px"
                    style="background-color: transparent"
                    flat
                  >
                    <v-card-text style="color: white"
                      >{{ index }}:00</v-card-text
                    >
                  </v-card>
                </div>
              </div>
            </div>
            <div class="time-current" :style="{left: -4 + current_time_location +'px'}"><v-card :loading="loading_time" flat >{{current_time}}</v-card></div>
            <div class="line-hozi-time-current" :style="{left: 16 + current_time_location +'px'}"></div>
            <div class="triangle-time-current" :style="{left: 8 + current_time_location +'px'}"></div>
            <div
              v-for="(show, index) in listShow"
              :key="index"
              style="display: flex; width: 100%;margin-left: 12px;"
            >
              <v-slide-item v-for="item in show.shows" :key="item.key">
                <div
                  :style="{
                    width: item.type * 80 + 12 * (item.type / 3 - 1) + 'px',
                  }"
                  style="margin: auto 6px"
                >
                  <div class="d-flex">
                    <div>
                      <v-card flat>
                        <v-img
                          :src="item.img"
                          height="58px"
                          width="58px"
                          style="object-fit: cover"
                        ></v-img>
                      </v-card>
                    </div>
                    <v-card width="100%">
                      <v-card-text style="padding: 0px 5px">{{
                        item.title
                      }}</v-card-text>
                      <v-card-text style="padding: 0px 5px">{{
                        item.duration
                      }}</v-card-text>
                    </v-card>
                  </div>
                </div>
              </v-slide-item>
            </div>
          </v-slide-group>
          <v-btn plain style="position: absolute;z-index: 1;top: 45%;right:-20px;" @click="display_range(2)">
            <v-icon>mdi-arrow-right-bold</v-icon>
          </v-btn>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listShow: [
        {
          imgChannel: "https://i.ytimg.com/vi/BMtaUb-E5Uc/maxresdefault.jpg",
          shows: [
            {
              img: "https://znews-photo.zadn.vn/w660/Uploaded/izhqv/2018_10_14/thang_dien_0.jpg",
              title: "VIETNAM'S HOT HITS1",
              duration: "20:00 - 21:00",
              type: 3,
              key: 1,
            },
            {
              img: "https://znews-photo.zadn.vn/w660/Uploaded/izhqv/2018_10_14/thang_dien_0.jpg",
              title: "VIETNAM'S HOT HITS2",
              duration: "20:00 - 21:00",
              type: 6,
              key: 2,
            },
            {
              img: "https://znews-photo.zadn.vn/w660/Uploaded/izhqv/2018_10_14/thang_dien_0.jpg",
              title: "VIETNAM'S HOT HITS3",
              duration: "20:00 - 21:00",
              type: 3,
              key: 3,
            },
            {
              img: "https://znews-photo.zadn.vn/w660/Uploaded/izhqv/2018_10_14/thang_dien_0.jpg",
              title: "VIETNAM'S HOT HITS4",
              duration: "20:00 - 21:00",
              type: 3,
              key: 4,
            },
            {
              img: "https://znews-photo.zadn.vn/w660/Uploaded/izhqv/2018_10_14/thang_dien_0.jpg",
              title: "VIETNAM'S HOT HITS5",
              duration: "20:00 - 21:00",
              type: 9,
              key: 5,
            },
          ],
        },
        {
          imgChannel:
            "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/c/2/4/7/c2475264a30999a45a3c8bcf0e5f090d.jpg",
          shows: [
            {
              img: "https://znews-photo.zadn.vn/w660/Uploaded/izhqv/2018_10_14/thang_dien_0.jpg",
              title: "TRAN DUC THANH",
              duration: "20:00 - 21:00",
              type: 6,
              key: 6,
            },
            {
              img: "https://znews-photo.zadn.vn/w660/Uploaded/izhqv/2018_10_14/thang_dien_0.jpg",
              title: "VIETNAM'S HOT HITS",
              duration: "20:00 - 21:00",
              type: 6,
              key: 7,
            },
            {
              img: "https://znews-photo.zadn.vn/w660/Uploaded/izhqv/2018_10_14/thang_dien_0.jpg",
              title: "VIETNAM'S HOT HITS",
              duration: "20:00 - 21:00",
              type: 3,
              key: 8,
            },
            {
              img: "https://znews-photo.zadn.vn/w660/Uploaded/izhqv/2018_10_14/thang_dien_0.jpg",
              title: "VIETNAM'S HOT HITS",
              duration: "20:00 - 21:00",
              type: 9,
              key: 9,
            },
            {
              img: "https://znews-photo.zadn.vn/w660/Uploaded/izhqv/2018_10_14/thang_dien_0.jpg",
              title: "VIETNAM'S HOT HITS",
              duration: "20:00 - 21:00",
              type: 3,
              key: 13,
            },
            {
              img: "https://znews-photo.zadn.vn/w660/Uploaded/izhqv/2018_10_14/thang_dien_0.jpg",
              title: "VIETNAM'S HOT HITS",
              duration: "20:00 - 21:00",
              type: 3,
              key: 14,
            },
          ],
        },
        {
          imgChannel: "https://i.ytimg.com/vi/HXkh7EOqcQ4/maxresdefault.jpg",
          shows: [
            {
              img: "https://znews-photo.zadn.vn/w660/Uploaded/izhqv/2018_10_14/thang_dien_0.jpg",
              title: "THE LA SAO",
              duration: "20:00 - 21:00",
              type: 6,
              key: 10,
            },
            {
              img: "https://znews-photo.zadn.vn/w660/Uploaded/izhqv/2018_10_14/thang_dien_0.jpg",
              title: "VIETNAM'S HOT HITS",
              duration: "20:00 - 21:00",
              type: 6,
              key: 11,
            },
            {
              img: "https://znews-photo.zadn.vn/w660/Uploaded/izhqv/2018_10_14/thang_dien_0.jpg",
              title: "VIETNAM'S HOT HITS",
              duration: "20:00 - 21:00",
              type: 6,
              key: 15,
            },
            {
              img: "https://znews-photo.zadn.vn/w660/Uploaded/izhqv/2018_10_14/thang_dien_0.jpg",
              title: "VIETNAM'S HOT HITS",
              duration: "20:00 - 21:00",
              type: 3,
              key: 16,
            },
            {
              img: "https://znews-photo.zadn.vn/w660/Uploaded/izhqv/2018_10_14/thang_dien_0.jpg",
              title: "VIETNAM'S HOT HITS",
              duration: "20:00 - 21:00",
              type: 3,
              key: 17,
            },
          ],
        },
      ],
      current_time: '00:00',
      current_time_location: 0,
      loading_time: true,
      display_schedule_range: 0,
      width: 0
    };
  },
  created() {
    // setInterval(this.getCurrentTime, 1000)
    // setTimeout(this.getCurrentLocation, 0)
    // setInterval(this.getCurrentLocation, 360000)
  },
  mounted() {
    setInterval(this.getCurrentTime, 1000)
    setTimeout(this.getCurrentLocation, 0)
    setInterval(this.getLocationLine, 60000)
    // setInterval(this.nextToPage, 360000)
  },
  methods: {
    async getCurrentTime(){
      const today = new Date()
      this.current_time_location = await today.getHours() * 252 + 4.2 * today.getMinutes()
      this.current_time = await today.getHours() + ':' + today.getMinutes()
      if(today.getHours() < 10){
        this.current_time = '0' + today.getHours() + ':' + today.getMinutes()
      }
      if(today.getMinutes() < 10){
        this.current_time = today.getHours() + ':0' + today.getMinutes()
      }
      if(today.getHours() < 10 && today.getMinutes() < 10){
        this.current_time = '0' + today.getHours() + ':0' + today.getMinutes()
      }
      this.loading_time = false
    },
    // async getCurrentLocation() {
    //     var element = this.$refs['auto_scroll']
    //     const today = new Date()
    //     this.current_time_location = await today.getHours() * 252 + 4.2 * today.getMinutes()
    //     var hour = today.getHours()
    //     if(hour <= 4){
    //       hour = today.getHours()
    //     }else if(hour <= 8){
    //       element.scrollTo(1 , 0)
    //     }else if(hour <= 12){
    //       element.scrollTo(1 , 0)
    //       element.scrollTo(1 , 0)
    //     }else if(hour <= 16){
    //       element.scrollTo(1 , 0)
    //       element.scrollTo(1 , 0)
    //       element.scrollTo(1 , 0)
    //     }else if(hour <= 20){
    //       element.scrollTo(1 , 0)
    //       element.scrollTo(1 , 0)
    //       element.scrollTo(1 , 0)
    //       element.scrollTo(1 , 0)
    //     }else{
    //       element.scrollTo(1 , 0)
    //       element.scrollTo(1 , 0)
    //       element.scrollTo(1 , 0)
    //       element.scrollTo(1 , 0)
    //       element.scrollTo(1 , 0)
    //     }
    // },
    async getCurrentLocation() {
      var element = document.getElementsByClassName('v-slide-group__content')
      const today = new Date()
      this.current_time_location = await today.getHours() * 252 + 4.2 * today.getMinutes()
      if(today.getHours() >  0){
        element[1].style.transform = "translateX(-" + (this.current_time_location - 250 ) + "px)"
      }else{
        element[1].style.transform = "translateX(-" + (this.current_time_location) + "px)"
      }
      this.display_schedule_range = this.current_time_location
      this.width = element[1].getBoundingClientRect().width;
    },
    async getLocationLine(){
      const today = new Date()
      this.current_time_location = await today.getHours() * 252 + 4.2 * today.getMinutes()
    },
    display_range(flag){
      var element = document.getElementsByClassName('v-slide-group__content')
      if(flag == 1){
        if(this.display_schedule_range < 700){
          element[1].style.transform = "translateX(-" + 0 + "px)"
          this.display_schedule_range = 0
        }else{
          element[1].style.transform = "translateX(-" + (this.display_schedule_range - 700 ) + "px)"
          this.display_schedule_range = this.display_schedule_range - 700 
        }
      }else{
        if(this.display_schedule_range > this.width * 0.85){
          element[1].style.transform = "translateX(-" + 0 + "px)"
          this.display_schedule_range = 0
        }else{
          element[1].style.transform = "translateX(-" + (this.display_schedule_range + 700 ) + "px)"
          this.display_schedule_range = this.display_schedule_range + 700 
        }
      }
    }
  }
};
</script>

<style>
.dpbl .v-slide-group__content {
  flex-direction: column !important;
  justify-content: space-between !important;
}
.time-schedule > div:first-child {
  margin-left: 0px !important;
}
.line-hozi-time-current{
  position: absolute;
  background-color: #FF1493;
  top: 70px;
  left: 16px;
  width: 4px;
  height: 100%;
  z-index: 1;
}
.triangle-time-current{
  position: absolute;
  left: 8px;
  bottom: 0px;
  width: 0; 
  height: 0; 
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #FF1493;
  z-index: 1;
}
.time-current{
  position: absolute;
  left: -4px;
  top: 47px;
  background-color: #FF1493;
  z-index: 1;
  padding: 2px;
  border-radius: 10%;
}
.time-current .v-card{
  background-color: #FF1493;
  color: white;
}
</style>