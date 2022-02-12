<template>
  <div style="background-color: #170f23;padding-bottom: 15px">
    <h3 style="padding: 15px 0px">XONE's CORNER</h3>
    <v-row>
      <div style="width: 227px;margin: 0px 12px;" v-for="(justNow, index) in listJustNow" :key="index">
        <v-card flat style="background-color: #170f23;" :href="justNow.to">
          <v-img
            :src="justNow.img"
            height="227px"
            width="227px"
            style="object-fit: cover;margin : 0px"
            class="hoverImg"
          ></v-img>
          <v-card-title style="background-color: #170f23;padding: 0px"><h6>{{ justNow.category }}</h6></v-card-title>
          <v-card-text style="color: gray;padding: 0px">{{ justNow.detail }}</v-card-text>
        </v-card>
      </div>

    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
        listJustNow: [
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
    .hoverImg:hover{
        transform: scale(1.05)
    }
</style>