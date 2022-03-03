<template>
  <v-row style="position:sticky;z-index:9999998;top:0;background-color:#170f23;margin: 0px;">
    <v-col md="2" style="padding-left:0px;">
      <v-btn plain class="btn-menu">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-btn plain class="btn-menu">
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </v-col>
    <v-col md="5">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-form>
            <v-text-field
              v-bind="attrs"
              v-on="on"
              class="pa-0"
              placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..."
              prepend-inner-icon="mdi-magnify"
              color="white"
              background-color="#231b2e"
              rounded
            >
            </v-text-field>
          </v-form>
        </template>
        <v-list style="background-color:#432275; color:white;">
          <v-list-item
            v-for="(item, index) in Recommends"
            :key="index"
            @click="chooseRecommended()"
          >
            <v-list-item-icon>
              <v-icon style="color:white">mdi-chart-line-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-col>

    <!-- <v-spacer></v-spacer> -->

    <v-col md="5" class="remove-pdr">
      <div class="float-right">
        <v-btn plain class="btn-menu secondary" >
          <v-icon> mdi-shape </v-icon>
        </v-btn>
        <v-btn plain class="btn-menu secondary" >
          <v-icon> mdi-tray-arrow-up </v-icon>
        </v-btn>
        <v-btn plain class="btn-menu secondary" >
          <v-icon> mdi-cog-outline </v-icon>
        </v-btn>
        <v-btn plain class="btn-menu secondary" >
          <v-icon> mdi-account-circle-outline </v-icon>
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters } from 'vuex';
export default {

  methods:{
    chooseRecommended(){

    }
  },
  computed:{
    ...mapGetters('menu',['Recommends','changeColorForm'])
  }
};
</script>

<style scope>
    .btn-menu{
        min-width: 36px !important; 
        padding: 0px 0px !important;
        margin-left: 10px;
        border-radius: 50% !important;
    }
    .btn-menu:first-child{
      margin-left: 0px;
    }
    .remove-pdr{
      padding-right: 0px;
    }
    .mdi-arrow-left, .mdi-arrow-right{
      color:white !important;
    }
    .mdi-magnify{
      color:white !important;
      opacity: 0.7;
    }
    ::placeholder {
      color: white !important;
      opacity: 0.3; 
    }
    input{
      color:white !important;
      opacity: 0.7;
    }
</style>