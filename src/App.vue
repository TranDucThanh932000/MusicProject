<template>
  <v-app style="background-color: #170f23">
    <v-row class="pa-4">
      <v-navigation-drawer app>
        <sidebar />
      </v-navigation-drawer>
      <v-main>
        <v-container fluid>
          <Menu />
          <router-view />
        </v-container>
      </v-main>
      <transition name="fade">
        <div v-show="navRight">
          <SidebarRight />
        </div>
      </transition>
    </v-row>
    <fixed-play></fixed-play>
  </v-app>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import SidebarRight from "./components/SidebarRight.vue";
import FixedPlay from "./components/FixedPlay.vue";
import Menu from "./components/Menu.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Sidebar,
    SidebarRight,
    Menu,
    FixedPlay,
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
      nameCom: "SidebarRight",
    };
  },
  computed: {
    ...mapGetters(["navRight"]),
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  color: white;
}
::-webkit-scrollbar {
  width: 10px;
  background-color: #170f23;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: grey;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: grey;
}

.fade-active{
  transform: translate(0,100%);
}

.fade-enter-active {
  /* transition: all 0.3s ease-out; */
  transform: translate(-100%,100%);
}

.fade-leave {
  transform: translate(-100%,100%);
}

.fade-leave-active {
  /* transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1); */
  transform: translate(0,100%);
}
.fade-enter-from,
.fade-leave-to {
  transform: translateX(-300px);
  opacity: 0;
}
</style>
