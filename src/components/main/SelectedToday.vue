<template>
  <div style="background-color: #170f23;padding-bottom: 15px">
    <h3 style="padding: 15px 0px">Lựa Chọn Hôm Nay</h3>
    <v-row>
      <div style="width: 218.5;margin: 0px 12px;" v-for="(selected, index) in listSelectedToday" :key="index">
        <v-card flat style="background-color: #170f23;" :href="selected.to" class="opa"> 
          <v-img
            :src="selected.img"
            height="218.5px"
            width="218.5px"
            style="object-fit: cover;margin : 0px;border-radius: 10px;"
            class="hoverImg"
          ></v-img>
          <Option/>
          <v-card-title style="background-color: #170f23;padding: 0px"><h6>{{ selected.category }}</h6></v-card-title>
          <v-card-text style="color: gray;padding: 0px;width:218.5px;">{{ selected.detail }}</v-card-text>
        </v-card>
      </div>

    </v-row>
  </div>
</template>

<script>
import Option from './Option.vue'

export default {
  components:{
    Option
  },
  data() {
    return {
        listSelectedToday: [
            { img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', category: 'Nhạc Mới Mỗi Ngày', to: '...', detail:'Trong thơ có nhạc, trong nhạc có thơ'},
            { img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', category: 'Top Hits V-Pop', to: '...', detail:'Trong thơ có nhạc, trong nhạc có thơ'},
            { img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', category: 'Top Hits V-Pop', to: '...', detail:'Trong thơ có nhạc, trong nhạc có thơ'},
            { img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', category: 'Top Hits V-Pop', to: '...', detail:'Trong thơ có nhạc, trong nhạc có thơ'},
            { img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', category: 'Top Hits V-Pop', to: '...', detail:'Trong thơ có nhạc, trong nhạc có thơ'},
        ]
    };
  },
};
</script>

<style scoped>

</style>