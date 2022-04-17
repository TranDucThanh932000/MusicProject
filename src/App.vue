<template>
  <v-app style="background-color: #170f23">
    <v-row class="pa-4" style="background-color: #170f23">
      <v-navigation-drawer app v-if="showSidebarLeft">
        <sidebar />
      </v-navigation-drawer>

      <v-main>
        <v-container fluid style="height: 100%;">
          <Menu v-if="showMenu"/>
          <keep-alive>
            <router-view />
          </keep-alive>
        </v-container>
      </v-main>

      <transition name="fade">
        <div v-show="navRight">
          {{ currentUser }}
          <SidebarRight />
        </div>
      </transition>
    </v-row>
    <fixed-play v-if="showFixedPlay"></fixed-play>
  </v-app>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import SidebarRight from "./components/SidebarRight.vue";
import FixedPlay from "./components/FixedPlay.vue";
import Menu from "./components/Menu.vue";
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  components: {
    Sidebar,
    SidebarRight,
    Menu,
    FixedPlay,
  },
  computed: {
    ...mapGetters(["navRight","itemSideBars","itemBelowSideBars","right","nameCom","showSidebarLeft","showMenu","showFixedPlay","user"]),
      currentUser: {
        get(){
          return this.$store.state.user;
        }
      }
  },
  created() {
    // axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1'
    axios.defaults.baseURL = 'https://backend-coc-music.herokuapp.com/api/v1'
    let songWhenCreate = []
    if(localStorage.getItem("music_token")){
      axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("music_token")
      this.$store.dispatch("getUser", {root: true})
      console.log('call api favorite playlist')
      songWhenCreate = [
        {
          img: "https://i.ytimg.com/vi/HK31DrqpztM/maxresdefault.jpg",
          title: "Nếu ngày ấy",
          singer: "Soobin",
          album: "Playah (Album)",
          time: "03:44",
          src: "https://docs.google.com/uc?id=1dQzoVIgyQe6SYYduJm6o0OhFm0on_nWL",
        },
        {
          img: "https://images.genius.com/cfb3f64ab2fc08506b2365b1d8ab959b.600x600x1.webp",
          title: "Thay mọi cô gái yêu anh",
          singer: "AMEE",
          album: "Chạy Về Khóc Với Anh (Single)",
          time: "03:44",
          src: "https://docs.google.com/uc?id=1_ds2_IIEpt_bhzBO9Sxtl6_xdZIbia69",
        },
        {
          img: "https://i.ytimg.com/vi/DYdMUzHwAMY/hqdefault.jpg",
          title: "Em bỏ hút thuốc chưa",
          singer: "Erik",
          album: "Chạy Về Khóc Với Anh (Single)",
          time: "03:44",
          src: "https://docs.google.com/uc?id=1a_dgCSHWj_AFd1-Gto6ogEByva5v-AMR",
        },
        {
          img: "https://avatar-nct.nixcdn.com/mv/2020/03/16/7/c/6/a/1584345171871_640.jpg",
          title: "Như anh mơ",
          singer: "PC",
          album: "Playah (Album)",
          time: "03:44",
          src: "https://docs.google.com/uc?id=13pxiViqy3jLIArC29Oufuf8FIMN38F1a",
        },
        {
          img: "https://zmp3-photo-fbcrawler.zadn.vn/thumb_video/4/3/9/f/439f8b9d834adfe6b2b3cfa01bdb5355.jpg",
          title: "24h",
          singer: "Lyly",
          album: "Playah (Album)",
          time: "03:44",
          src: "https://docs.google.com/uc?id=1Mmxg-UXH0KwlFEMQxOzi2pKWRkU17rsS",
        },
        {
          img: "https://i.ytimg.com/vi/zEWSSod0zTY/mqdefault.jpg",
          title: "Ghé qua",
          singer: "PC",
          album: "Chạy Về Khóc Với Anh (Single)",
          time: "03:44",
          src: "https://docs.google.com/uc?id=1W5bKTaMUi2BbYQCaS7EcDgtSRZWVgrzL",
        },
      ];
    }else{
      console.log('Chua dang nhap')
      songWhenCreate = [
        {
          img: "https://i.ytimg.com/vi/HK31DrqpztM/maxresdefault.jpg",
          title: "Nếu ngày ấy",
          singer: "Soobin",
          album: "Playah (Album)",
          time: "03:44",
          src: "https://docs.google.com/uc?id=1dQzoVIgyQe6SYYduJm6o0OhFm0on_nWL",
        },
        {
          img: "https://images.genius.com/cfb3f64ab2fc08506b2365b1d8ab959b.600x600x1.webp",
          title: "Thay mọi cô gái yêu anh",
          singer: "AMEE",
          album: "Chạy Về Khóc Với Anh (Single)",
          time: "03:44",
          src: "https://docs.google.com/uc?id=1_ds2_IIEpt_bhzBO9Sxtl6_xdZIbia69",
        },
        {
          img: "https://i.ytimg.com/vi/DYdMUzHwAMY/hqdefault.jpg",
          title: "Em bỏ hút thuốc chưa",
          singer: "Erik",
          album: "Chạy Về Khóc Với Anh (Single)",
          time: "03:44",
          src: "https://docs.google.com/uc?id=1a_dgCSHWj_AFd1-Gto6ogEByva5v-AMR",
        },
        {
          img: "https://avatar-nct.nixcdn.com/mv/2020/03/16/7/c/6/a/1584345171871_640.jpg",
          title: "Như anh mơ",
          singer: "PC",
          album: "Playah (Album)",
          time: "03:44",
          src: "https://docs.google.com/uc?id=13pxiViqy3jLIArC29Oufuf8FIMN38F1a",
        },
        {
          img: "https://zmp3-photo-fbcrawler.zadn.vn/thumb_video/4/3/9/f/439f8b9d834adfe6b2b3cfa01bdb5355.jpg",
          title: "24h",
          singer: "Lyly",
          album: "Playah (Album)",
          time: "03:44",
          src: "https://docs.google.com/uc?id=1Mmxg-UXH0KwlFEMQxOzi2pKWRkU17rsS",
        },
        {
          img: "https://i.ytimg.com/vi/zEWSSod0zTY/mqdefault.jpg",
          title: "Ghé qua",
          singer: "PC",
          album: "Chạy Về Khóc Với Anh (Single)",
          time: "03:44",
          src: "https://docs.google.com/uc?id=1W5bKTaMUi2BbYQCaS7EcDgtSRZWVgrzL",
        },
      ];
    }
    this.$store.dispatch("fixedplay/updateSongs", songWhenCreate, {
      root: true,
    });

    var temp = [];
    for (let i = 0; i < songWhenCreate.length; i++) {
      temp.push(songWhenCreate[i]);
    }
    this.$store.dispatch("sidebarRight/updateItems", temp, { root: true });

    //get list played
    temp = [];
    for (let i = 0; i <= 0; i++) {
      temp.push(songWhenCreate[i]);
    }
    this.$store.dispatch("sidebarRight/updateSongPlayed", temp, { root: true });
  },
  methods:{

  },
  watch:{
    '$route.name': function() {
      if(this.$route.name === 'login' || this.$route.name === 'register'){
        this.$store.dispatch('updateShowSidebarLeft', false)
        this.$store.dispatch('updateShowMenu', false)
        this.$store.dispatch('updateShowFixedPlay', false)
      }else{
        this.$store.dispatch('updateShowSidebarLeft', true)
        this.$store.dispatch('updateShowMenu', true)
        this.$store.dispatch('updateShowFixedPlay', true)
      }
      if(this.$route.name === 'login' && localStorage.getItem("music_token")){
        this.$router.push("/");
      }
    }
  }
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

.fade-active {
  transform: translate(0, 100%);
}

.fade-enter-active {
  /* transition: all 0.3s ease-out; */
  transform: translate(-100%, 100%);
}

.fade-leave {
  transform: translate(-100%, 100%);
}

.fade-leave-active {
  /* transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1); */
  transform: translate(0, 100%);
}
.fade-enter-from,
.fade-leave-to {
  transform: translateX(-300px);
  opacity: 0;
}
</style>
