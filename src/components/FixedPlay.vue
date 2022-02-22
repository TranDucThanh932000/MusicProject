<template>
  <v-row style="height: 95px; z-index: 10000000;background-color: #170f23;">
    <div
      style="
        border-top: 1px solid white;
        justify-content: space-between;
        background-color: #170f23;
        display: flex;
        width: 100%;
        position: fixed;
        bottom:0px;
      "
    >
      <div class="d-flex" style="padding: 10px 10px 0px 20px">
        <div>
          <v-img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Xone-logo.jpg/800px-Xone-logo.jpg"
            width="80px"
            height="80px"
            style="object-fit: cover; border-radius: 50%"
            class="d-flex align-center"
          >
          </v-img>
        </div>
        <div class="d-flex" style="align-items: center; margin-left: 10px">
          <div>
            <p style="margin: 0px"><b>XONE Radio</b></p>
            <div style="display: flex">
              <p
                class="text-center px-2"
                style="
                  background: red;
                  border-radius: 6px;
                  font-size: 10px;
                  margin: 0px;
                "
              >
                <b>LIVE RADIO </b>
              </p>
              <p
                style="
                  font-size: 10px;
                  opacity: 0.6;
                  margin: 0px;
                  padding-left: 5px;
                "
              >
                467 đang nghe
              </p>
            </div>
          </div>
        </div>
        <div class="d-flex" style="align-items: center">
          <v-menu offset-x>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                @click.prevent=""
                style="width: 100%; padding: 0px"
                color="#432275"
                text
              >
                <v-icon style="color: white">mdi-dots-horizontal</v-icon>
              </v-btn>
            </template>
            <v-list
              style="background-color: #432275; color: white; width: 250px"
            >
              <v-list-item @click="copy()">
                <v-list-item-icon>
                  <v-icon style="color: white">mdi-content-copy</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Sao chép link</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-menu offset-x>
                  <template v-slot:activator="{ on, links }">
                    <v-btn
                      v-bind="links"
                      v-on="on"
                      @click.prevent=""
                      style="width: 100%; padding: 0px"
                      color="#432275"
                      text
                    >
                      <v-list-item-icon>
                        <v-icon style="color: white">mdi-share</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title
                          style="text-align: left; text-transform: initial"
                          >Chia sẻ</v-list-item-title
                        >
                      </v-list-item-content>
                      <v-icon style="color: white">mdi-unfold-more-vertical</v-icon>
                    </v-btn>
                  </template>
                  <v-list style="background-color: #432275; color: white">
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon style="color: white">mdi-facebook</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Facebook</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon style="color: white">mdi-twitter</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Twitter</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
      <div style="padding-top: 20px;">
        <div class="d-flex" style="align-items: center;">
          <v-btn plain color="white" v-if="loop == true" @click="loopAudio()">
            <v-icon>mdi-repeat</v-icon>
          </v-btn>
          <v-btn plain color="white" v-else @click="loopAudio()">
            <v-icon>mdi-repeat-off</v-icon>
          </v-btn>
          <v-btn plain color="white">
            <v-icon>mdi-skip-previous</v-icon>
          </v-btn>
          <v-btn outlined color="white" v-if="play == true" @click="playAudio(false)" class="btnPlayPause">
            <v-icon>mdi-play</v-icon>
          </v-btn>
          <v-btn outlined color="white" v-else @click="playAudio(true)" class="btnPlayPause">
            <v-icon>mdi-pause</v-icon>
          </v-btn>
          <v-btn plain color="white">
            <v-icon>mdi-skip-next</v-icon>
          </v-btn>
          <v-btn plain color="white">
            <v-icon>mdi-shuffle-variant</v-icon>
          </v-btn>
        </div>
        <div class="d-flex" style="align-items: center;">
          <span style="opacity: 0.5;">{{timeViewDuration}}</span>
          <v-slider
            v-model="timeCurrent"
            :max="timeEnd"
            style="width:100%;"
            class="time-current-slider-2"
            @click="playTimeCurrent()"
          ></v-slider>
          <span>{{duration}}</span>
        </div>
      </div>
      <div class="d-flex" style="align-items: center;">
        <v-btn plain color="white">
          <v-icon>mdi-monitor</v-icon>
        </v-btn>
        <v-btn class="speakers" plain color="white" v-if="vol >= 80 && sing == true" @click="sing = false">
          <v-icon>mdi-volume-high</v-icon>
        </v-btn>
        <v-btn class="speakers" plain color="white" v-if="vol >= 50 && vol < 80 && sing == true" @click="sing = false">
          <v-icon>mdi-volume-medium</v-icon>
        </v-btn>
        <v-btn class="speakers" plain color="white" v-if="vol > 0 && vol < 50 && sing == true" @click="sing = false">
          <v-icon>mdi-volume-low</v-icon>
        </v-btn>
        <v-btn class="speakers" plain color="white" v-if="vol == 0 || sing == false" @click="sing = true">
          <v-icon>mdi-volume-off</v-icon>
        </v-btn>
        <v-slider
          v-model="vol"
          style="width:100px;margin-right: 15px;"
          class="volumns"
          @click="sing = true"
        >
        </v-slider>
        <v-btn style="background-color: #696969">
          <p style="color:white;margin-bottom:0px;">Lịch phát sóng</p>
        </v-btn>
      </div>
    </div>
    
    <audio style="visibility: hidden;" controls ref="player" id="myAudio" preload="metadata">
      <source :src="require('../assets/audio/' + src)" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
    
    <!-- <audio controls id="myAudio"  preload="metadata">
      <source src="../assets/audio/thay-moi-co-gai-yeu-anh.mp3" type="audio/mpeg" />
    </audio> -->
  </v-row>
</template>

<script>
let firstInteval;
let secondIntevel;
export default {
  data() {
    return {
      vol: 50,
      sing: true,
      play: true,
      loop: true,
      ended: false,
      duration: '00:00',
      timeEnd: 0,
      timeCurrent: 0,
      timeViewDuration : '0:00',
      songs : [
        { src:'em-bo-hut-thuoc-chua-liu-riu-Bich-Phuong.mp3' },
        { src:'em-bo-hut-thuoc-chua-liu-riu-Bich-Phuong.mp3' },
        { src:'thay-moi-co-gai-yeu-anh.mp3' },
        { src:'em-bo-hut-thuoc-chua-liu-riu-Bich-Phuong.mp3' },
        { src:'thay-moi-co-gai-yeu-anh.mp3' }
      ],
      src: ''
    };
  },
  created(){
    this.src = this.songs[0].src
  },
  mounted() {
    var aud = document.getElementById("myAudio")
    aud.volume = '0.5'
    aud.loop = true
    
    // this.ended = aud.ended    
    aud.onloadedmetadata =  () => {
      this.duration =  (aud.duration / 60) - (aud.duration % 60)/60 +':'+ Math.floor(aud.duration % 60)
      this.timeEnd = Math.floor(aud.duration) - 1
    }
    setInterval(() => {
      this.ended = aud.ended
    }, 1000)
  },
  methods: {
    playAudio(data){
      var aud = document.getElementById("myAudio");
      if(data == true){
        this.play = true
        aud.pause()
        clearInterval(firstInteval)
        clearInterval(secondIntevel)
      }else{
        this.play = false
        aud.play()
        //calculate to time to display
        this.timeCurrent = aud.currentTime
        firstInteval = setInterval(() => {
          if(this.timeCurrent == this.timeEnd){
            this.timeCurrent = 0;
            this.timeViewDuration = '0:00'
            return
          }
          this.timeCurrent++
          var minute = (this.timeCurrent / 60) - (this.timeCurrent % 60)/60
          var second = Math.floor(this.timeCurrent % 60)
          if(second < 10){
            second = '0' + second
          }
          this.timeViewDuration = minute +':'+ second
        }, 1000)
      }
    },
    loopAudio(){
      this.loop = !this.loop
      if(this.loop){
        document.getElementById("myAudio").loop = true;

      }else{
        document.getElementById("myAudio").loop = false;
      }
    },
    playTimeCurrent(){
      var aud = document.getElementById("myAudio");
      aud.currentTime = this.timeCurrent
      clearInterval(firstInteval)
      clearInterval(secondIntevel)
      secondIntevel = setInterval(() => {
        if(this.timeCurrent == this.timeEnd){
          this.timeCurrent = 0;
          this.timeViewDuration = '0:00'
          return
        }
        this.timeCurrent++
        var minute = (this.timeCurrent / 60) - (this.timeCurrent % 60)/60
        var second = Math.floor(this.timeCurrent % 60)
        if(second < 10){
          second = '0' + second
        }
        this.timeViewDuration = minute +':'+ second
      }, 1000)
    }
  },
  watch: {
    vol(){
      var aud = document.getElementById("myAudio");
      aud.volume = this.vol / 100
    },
    sing(){
      var aud = document.getElementById("myAudio");
      if(this.sing == false){
        aud.muted = true;
      }else{
        aud.muted = false;
      }
    },
    ended(){
      if(this.ended){
        this.play = true
        clearInterval(firstInteval)
        clearInterval(secondIntevel)
        this.timeCurrent = 0;
        this.timeViewDuration = '0:00'
      }else{
        this.play = false
      }
    }
  }
};
</script>

<style>
  .speakers{
    padding-right: 0px !important;
    padding-left: 0px !important;
    min-width: 0px !important;
  }
  .volumns{
    margin-top: 20px;
  }
  .btnPlayPause{
    border-radius: 50%;
    padding: 0px !important; 
    height: 48px !important; 
    min-width: 48px !important;
  }
  .time-current-slider-2  .v-messages{
    min-height: 0px !important;
  }
  .time-current-slider-2{
    margin-top: 0px;
  }
  .time-current-slider-2 .v-input__slot{
    margin: 0px;
  }
</style>