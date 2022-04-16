<template>
  <div style="background-color: #170f23;padding-bottom: 15px">
    <h3 style="padding: 15px 0px">Lựa Chọn Hôm Nay</h3>
    <v-row>
      <div style="width: 218.5;margin: 0px 12px;" v-for="(selected, index) in listSelectedToday" :key="index">
        <v-card flat style="background-color: #170f23;" class="opa"> 
          <v-img
            :src="selected.img"
            height="218.5px"
            width="218.5px"
            style="object-fit: cover;margin : 0px;border-radius: 10px;"
            class="hoverImg"
          ></v-img>
          <Option :to="selected.to"/>
        </v-card>
        <v-card flat style="background-color: #170f23;">
          <v-card-title style="background-color: #170f23;padding: 0px"><h6>{{ selected.category }}</h6></v-card-title>
          <v-card-text style="color: gray;padding: 0px;width:218.5px;">{{ selected.detail }}</v-card-text>
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
  created(){
    this.getFiveSelectedToday()
  },
  computed:{
    ...mapGetters('selectedToday',['listSelectedToday'])
  },
  methods:{
    getFiveSelectedToday(){
      axios.get('/playlist/get-top-five-selected-today')
      .then( (response) => {
        var res = response.data.playlist
        var listSelectedToday = []
        for(let i = 0; i < res.length; i++){
          var data = {
            img: 'https://docs.google.com/uc?id=' + res[i].image,
            category: res[i].name,
            to: '/album/' + res[i].id,
            detail: 'Trong thơ có nhạc, trong nhạc có thơ'
          }
          listSelectedToday[i] = data
        }
        this.$store.dispatch('selectedToday/updateListSelectedToday', listSelectedToday)
      })
      .catch(() => {
        console.log('fail to get five selected today')
      })
    }
  }
};
</script>
