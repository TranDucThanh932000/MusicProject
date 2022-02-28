<template>
<div>
    <v-row style="position: relative;">
        <v-col md="3" style="position: sticky; top: 0px;">
            <div class="text-center">
                <v-img :src="srcImg" height="300px" width="300px" :style="{borderRadius : borderRadius}"></v-img>
                <h3 style="margin-top: 10px;">Pop Việt Ngày Nay</h3>
                <h5 style="opacity: 0.5;">Cập nhật: 21/02/2022</h5>
                <h5 style="opacity: 0.5;">Hoàng Dũng, ERIK, Đức Phúc, AMEE</h5>
                <h5 style="opacity: 0.5;margin-bottom: 10px;">49K người yêu thích</h5>
                <v-btn rounded color="#7200a1" style="margin-bottom:10px;" class="py-5" v-if="playing == false" @click="clickPlaying(!playing)">
                    <v-icon color="white">mdi-play</v-icon>
                    <span style="color:white">TIẾP TỤC PHÁT</span>
                </v-btn>
                <v-btn rounded color="#7200a1" style="margin-bottom:10px;" class="py-5" v-else @click="clickPlaying(!playing)">
                    <v-icon color="white">mdi-stop</v-icon>
                    <span style="color:white">TẠM DỪNG</span>
                </v-btn>
                <div class="text-center">
                    <v-btn fab style="margin-right: 5px;background-color: rgb(35 27 46);">
                        <v-icon color="white">mdi-heart</v-icon>
                    </v-btn>
                    <v-btn fab style="margin-left: 5px;background-color: rgb(35 27 46);">
                        <v-icon color="white">mdi-dots-horizontal</v-icon>
                    </v-btn>
                </div>
            </div>
        </v-col>
        <v-col md="9" style="overflow: auto;" :style="{height : height - 95 + 'px'}">
            <div style="padding: 12px">
                <v-row
                style="background-color: transparent"
                class="py-2"
                align="center"
                align-content="center"
                v-for="(top100, index) in listTop100"
                :key="index"
                >
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
                <v-col md="5">
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
            </div>
        </v-col>
    </v-row>
    <h3 class="my-4">Nghệ Sĩ Tham Gia</h3>
    <v-row style="margin-top: 0px;">
        <div class="col-xs-5ths" v-for="(singer, index) in singers" :key="index">
            <div style="position: relative;top:0px;" >
                <v-img :src="singer.img" style="border-radius: 50%;position: absolute;top:0;"></v-img>
                <div class="img-5ths">
                    <div style="height:100%;display: flex;justify-content:center;align-items:center;">
                        <v-btn fab plain class="btn-play-album" color="white">
                            <v-icon>mdi-play</v-icon>
                        </v-btn>
                    </div>
                </div>
            </div>

            <div class="text-center pt-2">
                <h5>{{singer.name}}</h5>
                <h6 style="opacity: 0.5;">{{singer.follow}} quan tâm</h6>
                <v-btn color="#2f2739" rounded>
                    <v-icon color="white">mdi-account-plus-outline</v-icon>
                    <span>QUAN TÂM</span>
                </v-btn>
            </div>
        </div>
    </v-row>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import {mapGetters} from 'vuex'
export default {
    mounted(){
      this.$store.dispatch('album/updateHeight', window.innerHeight)
    },
    computed:{
        ...mapGetters('album',['srcImg','listTop100','songs','playing','borderRadius','height','singers'])
    },
    methods: {
        ...mapActions('album',['checkPause','updateHeight','playingAction']),
        clickPlaying(payload){
            this.$store.dispatch('album/updatePlaying', payload)
        }
    },
    watch: {
        playing(){
            this.$store.dispatch('album/playingAction')
        }
    }
}
</script>

<style scoped>
.btn-name-singer {
  min-width: 0px !important;
  padding: 0px !important;
  height: 0px !important;
}
::-webkit-scrollbar {
    display: none;
}
.col-xs-5ths{
  padding-right: 10px;
  padding-left: 10px;
  width: 20%;
}
.img-5ths{
  height: 200px;
}
.btn-play-album{
    display: none;
}
.col-xs-5ths:hover .btn-play-album{
    display: flex !important;
}
</style>