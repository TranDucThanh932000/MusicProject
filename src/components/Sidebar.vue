<template>
  <v-col style="padding-top: 10px;" md="2" offset-md="0">
    <v-card flat height="100%">
      <v-navigation-drawer permanent fixed style="background-color:#231b2e;padding: 16px 5px 0px 0px">
        <v-row class="pl-2">
          <v-list-item>
            <v-list-item-content>
              <div style="width: 100%">
              <!-- <v-list-item-title class="text-h6"> <span style="font-size: 30px;"><b style="color:red;">C</b></span><span style="font-size: 30px"><b style="color: yellow;">O</b></span><span style="font-size: 30px"><b style="color: green;">C</b></span> MOUNTAIN </v-list-item-title> -->
                <v-img class="logo-web" style="height: 100px; object-fit: cover;background-color: transparent" :src="require('../assets/' + logo)">
                </v-img>
              </div>
            </v-list-item-content>
          </v-list-item>

          <v-list dense nav>
            <v-list-item v-for="item in itemSideBars" :key="item.title" link>
              <v-list-item-icon>
                <v-icon style="color: white;">{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <router-link :to="item.to" >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </router-link>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-row>

        <v-divider class="pl-2" style="background-color:#FFFAF0;margin: 15px 10px 15px 0px;box-shadow: 0px 3px 5px white;"></v-divider>

        <v-row class="overflow-y-auto pl-2" id="scroll-target">
          <v-list dense nav style="height: 300px;">
            <v-list-item
              v-for="item in itemBelowSideBars"
              :key="item.title"
              link
            >
              <v-list-item-icon>
                <v-icon style="color: white;">{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-card class="rounded-pill" color="#7200a1" style="padding-bottom: 15px;">
              <v-card-text style="color:white;text-align:center;padding-bottom: 5px;">Đăng nhập để khám phá playlist riêng của bạn</v-card-text>
              <v-btn plain outlined rounded color="white" class="d-flex justify-center" style="margin: 0px auto;" >ĐĂNG NHẬP</v-btn>
            </v-card>
            <v-card class="rounded-pill" style="margin-top: 10px;padding-bottom: 15px;background-image: linear-gradient(117deg,#5a4be7,#c86dd7 102%);">
              <v-card-text style="color:white;text-align:center;padding-bottom: 5px;">Nghe nhạc không quảng cáo cùng kho nhạc VIP</v-card-text>
              <v-btn plain outlined rounded color="black" class="d-flex justify-center" style="margin: 0px auto;background-color:#ffdb00;" >NÂNG CẤP VIP</v-btn>
            </v-card>
          </v-list>
        </v-row>
        <v-row style="margin-top: 25px;">
          <!-- Tao playlist moi -->
          <v-card color="#231b2e"  width="100%">
            <v-btn plain color="white" width="100%" style="padding: 0px">
              <v-icon>mdi-plus</v-icon>
              Tạo playlist mới
            </v-btn>
          </v-card>
        </v-row>
      </v-navigation-drawer>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      itemSideBars: [
        { title: "Cá Nhân", icon: "mdi-account-music" ,to:'/'},
        { title: "Khám Phá", icon: "mdi-sort-alphabetical-variant",to:'/' },
        { title: "#musicchart", icon: "mdi-music",to:'/music-chart' },
        { title: "#Radio", icon: "mdi-radio",to:'/radio' },
        { title: "Theo Dõi", icon: "mdi-bell",to:'/' },
      ],
      itemBelowSideBars: [
        { title: "Nhạc Mới", icon: "mdi-new-box" },
        { title: "Thể Loại", icon: "mdi-shape" },
        { title: "Top 100", icon: "mdi-star" },
        { title: "MV", icon: "mdi-shopping-music" },
      ],
      logo:'logo-COCMOUNTAIN.png',
    };
  },
};
</script>

<style scope>
.v-list-item{
  margin-bottom: 0px !important;
}
a{
  text-decoration: none;
}
.logo-web .v-responsive__content{
  width: 0px !important;
}
</style>