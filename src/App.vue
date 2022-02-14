<template>
  <v-app style="background-color:#170f23;">
    <v-row class="pa-4">
      <v-navigation-drawer app>
        <sidebar/>
      </v-navigation-drawer>
      <v-main>
        <v-container fluid>
          <router-view/>
        </v-container>
      </v-main>
    </v-row>
    <fixed-play></fixed-play>
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
// import MainContent from './components/main/Main.vue'
import FixedPlay from './components/FixedPlay.vue'

export default {
  components: {
    Sidebar,
    // MainContent,
    FixedPlay
  },
  data() {
    return {
      itemSideBars: [
        { title: "Cá Nhân", icon: "mdi-view-dashboard" },
        { title: "Khám Phá", icon: "mdi-image" },
        { title: "#musicchart", icon: "mdi-help-box" },
        { title: "#Radio", icon: "mdi-help-box" },
        { title: "Theo Dõi", icon: "mdi-help-box" },
      ],
      itemBelowSideBars: [
        { title: "Cá Nhân", icon: "mdi-view-dashboard" },
        { title: "Khám Phá", icon: "mdi-image" },
        { title: "#zingchart", icon: "mdi-help-box" },
        { title: "#Radio", icon: "mdi-help-box" },
        { title: "Theo Dõi", icon: "mdi-help-box" },
        { title: "Theo Dõi", icon: "mdi-help-box" },
      ],
      right: null,
    };
  },
};
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
    color: white;
  };


</style>
