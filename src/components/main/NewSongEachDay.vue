<template>
  <div style="background-color: #170f23;padding-bottom: 15px;margin-bottom: 20px;">
    <h3 style="padding: 15px 0px">Nhạc Mới Mỗi Ngày</h3>
    <v-row>
      <div style="width: 218.5px;margin: 0px 12px;" v-for="(eachDay, index) in listEachDay" :key="index">
        <v-card flat style="background-color: #170f23;" :href="eachDay.to" class="opa">
          <v-img
            :src="eachDay.img"
            height="218.5px"
            width="218.5px"
            style="object-fit: cover;margin : 0px; position: relative;border-radius: 10px;"
            class="hoverImg"
          ></v-img>
          <Option/>
          <v-card-title style="background-color: #170f23;padding: 0px"><h6>{{ eachDay.title }}</h6></v-card-title>
          <v-card-text style="background-color: #170f23;padding: 0px;color:gray;width:218.5px;">{{eachDay.detail}}</v-card-text>
        </v-card>
      </div>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Option from './Option.vue'
export default {
  components:{
    Option
  },
  computed: {
    ...mapGetters('newSongEachDay',['listEachDay'])
  }
};
</script>

<style scope>


</style>