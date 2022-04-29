<template>
  <transition name="goTop">
    <div class="pa-8 show-mv">
        <v-row class="pb-2">
            <div class="d-flex">
            <v-img
                height="48px"
                width="48px"
                :src='"https://docs.google.com/uc?id=" + mvPlaying.image'
                style="border-radius: 100%"
            >
            </v-img>
            <v-card
                color="transparent"
                class="d-flex px-3"
                style="flex-direction: column; justify-content: space-between"
                flat
            >
                <v-card-title class="pa-0"> {{ mvPlaying.songName }} </v-card-title>
                <v-card-subtitle style="color: white" class="pa-0">
                <span v-for="singer in mvPlaying.singers" :key="singer.id"> 
                    <router-link class="link-singer" :to='"/singer/" + singer.id'>
                        {{ singer.nickname }}
                    </router-link> 
                </span>
                </v-card-subtitle>
            </v-card>
            <v-card color="transparent" flat>
                <v-toolbar dense dark flat color="transparent">
                <v-btn icon>
                    <v-icon>mdi-heart-outline</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-music</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-dots-horizontal</v-icon>
                </v-btn>
                </v-toolbar>
            </v-card>
            </div>
            <v-spacer></v-spacer>
            <v-btn icon dark @click="close">
            <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-row>
        <v-row>
            <v-col md="9" class="pa-0 pr-2">
            <video width="100%" height="100%" controls id="myVideo">
                <source :src="link" type="video/mp4" />
            </video>
            </v-col>
            <v-col
            md="3"
            class="pa-0"
            style="border-radius: 5px; position: relative"
            >
            <div class="bg-image"></div>
            <div class="d-flex flex-column pa-3 bg-text">
                <v-card
                class="d-flex pb-2"
                dark
                flat
                style="background: transparent"
                v-for="mv in listMV"
                :key="mv.id"
                >
                <div>
                    <v-img
                    height="80px"
                    width="120px"
                    :src='"https://docs.google.com/uc?id=" + mv.image'
                    style="border-radius: 5px"
                    >
                    </v-img>
                </div>
                <div>
                    <v-card-title class="pt-0">{{ mv.songName }}</v-card-title>
                    <v-card-subtitle>
                      <span v-for="singer in mv.singers" :key="singer.id"> 
                          <router-link class="link-singer" :to='"/singer/" + singer.id'>
                              {{ singer.nickname }}
                          </router-link> 
                      </span>
                    </v-card-subtitle>
                </div>
                </v-card>
            </div>
            </v-col>
        </v-row>
    </div>
  </transition>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      link: null,
      listMV: [],
      indexPlayingMV: 0,
      mvPlaying: {}
    };
  },
  created() {
    this.getInforMv()
    this.getListMVofSinger()
    this.$store.dispatch("updateShowSidebarLeft", false)
    this.$store.dispatch("updateShowFixedPlay", false)
    this.$store.dispatch("updateIsHiddenSideBarLeft", true)
  },
  methods: {
    close() {
      this.$router.push("/")
      this.$store.dispatch("updateIsHiddenSideBarLeft", false)
    },
    getInforMv(){
        axios.get('/mv/get-full-infor-mv/' + this.$route.params.id)
        .then( (response) => {
            this.mvPlaying = response.data.mv
            this.link = 'https://docs.google.com/uc?id=' + this.mvPlaying.src
            var myVideo = document.getElementById("myVideo")
            myVideo.load()
        })
        .catch( () => {
            this.$router.push('/')
        })
    },
    getListMVofSinger(){
      axios.get('/mv/get-list-mv/' + this.$route.params.id)
      .then( (response) => {
        this.listMV = response.data.mvs 
        this.listMV = this.listMV.filter((value, index, self) =>
          index === self.findIndex((t) => (
            t.id === value.id
          ))
        )
      })
      .catch( () => {
        console.log('fail to get list mv')
      })
    }
  },
  watch: {
      '$route.params.id'(){
          if(this.$route.name === 'show-mv'){
            this.getInforMv()
          }
      }
  }
};
</script>

<style>
.bg-image {
  background: linear-gradient(45deg, red, blue);
  opacity: 0.4;
  filter: blur(8px);
  -webkit-filter: blur(8px);
  height: 100%;
}

.bg-text {
  position: absolute;
  top: 4px;
  overflow-y: scroll;
  max-height: 100vh;
  width: 100%;
  z-index: 2;
}

.goTop-enter-active {
  animation: goTop-in 2s;
}
.goTop-leave-active {
  animation: goTop-in 2s reverse;
}
@keyframes goTop-in {
  0% {
    top: 100%;
  }
  100% {
    top: 10px;
  }
}

.show-mv {
  background: linear-gradient(#e66465, #9198e5);
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 10px;
  bottom: 0;
  right: 0;
  z-index: 999999999999;
}

.link-singer{
    color: white !important;
}
.link-singer:hover{
    color: #9198e5 !important;
    text-decoration: underline;
}
</style>