<template>
  <div style="background-color: #170f23;padding-bottom: 15px">
    <h3 style="padding: 15px 0px">XONE's CORNER</h3>
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
          <v-card-title style="background-color: #170f23;padding: 0px"><h6>{{ justNow.category }}</h6></v-card-title>
          <v-card-text style="color: gray;padding: 0px;width:218.5px;">{{ justNow.detail }}</v-card-text>
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
  computed:{
    ...mapGetters('xonerConer',['listJustNow'])
  }
};
</script>

<style scoped>

</style>