<template>
  <div style="background-color: #170f23;padding-bottom: 15px">
    <h3 style="padding: 15px 0px">COC's CORNER</h3>
    <v-row>
      <div style="width: 218.5px;margin: 0px 12px;" v-for="(justNow, index) in listJustNow" :key="index">
        <v-card flat style="background-color: #170f23;" :href="justNow.to" class="opa">
          <v-img
            :src="justNow.img"
            height="218.5px"
            width="218.5px"
            style="object-fit: cover;margin : 0px;border-radius: 10px;"
            class="hoverImg"
          ></v-img>
          <Option/>
        </v-card>
        <v-card flat style="background-color: #170f23;">
          <v-card-title style="background-color: #170f23;padding: 0px"><h6>{{ justNow.category }}</h6></v-card-title>
          <v-card-text style="color: gray;padding: 0px;width:218.5px;">{{ justNow.detail }}</v-card-text>
        </v-card>
      </div>

    </v-row>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import Option from './Option.vue'
export default {
  components:{
    Option
  },
  computed:{
    ...mapGetters('xonerConer',['listJustNow'])
  },
  created(){
    this.getCornerPlaylist()
  },
  methods:{
    getCornerPlaylist(){
      axios.get('/playlist/get-corner')
      .then((response) => {
        var res = response.data.playlistCorner
        var listJustNow = []
        for(let i = 0; i < res.length; i++){
          var data = {
            img: 'https://docs.google.com/uc?id=' + res[i].image,
            category: res[i].name,
            to: '/playlist/' + res[i].id,
            detail: 'Mãi sau này anh mới biết'
          }
          listJustNow[i] = data
        }
        this.$store.dispatch('xonerConer/updateListJustNow', listJustNow)
      })
      .catch(() => {
        console.log('fail to get corner')
      })
    }
  }
};
</script>
