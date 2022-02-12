<template>
  <div style="background-color: #170f23;padding-bottom: 15px">
    <h3 style="padding: 15px 0px">Gần Đây</h3>
    <v-row>
      <div style="width: 227px;margin: 0px 12px;" v-for="(justNow, index) in listJustNow" :key="index">
        <v-card flat style="background-color: #170f23;" :href="justNow.to" class="opa">
          <v-img
            :src="justNow.img"
            height="227px"
            width="227px"
            style="object-fit: cover;margin : 0px; position: relative;"
            class="hoverImg"
          ></v-img>
          <div class="moreTools" style="position: absolute; top: calc(50% - 44px); width : 100%;text-align: center;">
            <v-btn plain style="color: white">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn plain outlined style="color: white; border-radius: 50%; padding: 0px !important; height: 48px; min-width: 48px;">
              <v-icon>mdi-play</v-icon>
            </v-btn>
            <v-menu offset-x>
              <template v-slot:activator="{ on, attrs }">
                <v-btn 
                  v-bind="attrs"
                  v-on="on"
                  @click.prevent=""
                  plain
                  style="color: white">
                  <v-icon plain>mdi-dots-horizontal</v-icon>
                </v-btn>
              </template>
              <v-list style="background-color:#432275; color:white;">
                <v-list-item @click="addToList()">
                  <v-list-item-icon>
                    <v-icon style="color:white">mdi-play</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Thêm vào danh sách phát</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item @click="addComment()">
                  <v-list-item-icon>
                    <v-icon style="color:white">mdi-comment</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Bình luận</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item @click="download()">
                  <v-list-item-icon>
                    <v-icon style="color:white">mdi-download</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Tải xuống</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item @click="copy()">
                  <v-list-item-icon>
                    <v-icon style="color:white">mdi-content-copy</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>Sao chép link</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-menu offset-x>
                        <template v-slot:activator="{ on, links }" >
                          <v-btn 
                            v-bind="links"
                            v-on="on"
                            @click.prevent=""
                            style="width: 100%;padding: 0px;"
                            color="#432275"
                            text
                            >
                            <v-list-item-icon>
                              <v-icon style="color:white">mdi-share</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                              <v-list-item-title style="text-align: left;text-transform: initial;">Chia sẻ</v-list-item-title>
                            </v-list-item-content>
                            <v-icon plain style="color:white">mdi-chevron-right</v-icon>
                          </v-btn>
                        </template>
                        <v-list style="background-color:#432275; color:white;" >
                          <v-list-item>
                            <v-list-item-icon>
                              <v-icon style="color:white">mdi-facebook</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                              <v-list-item-title>Facebook</v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-icon>
                              <v-icon style="color:white">mdi-twitter</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                              <v-list-item-title>Twitter</v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item>
                            <v-list-item-icon>
                              <v-icon style="color:white">mdi-ember</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                              <v-list-item-title>Link nhúng</v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                    </v-menu>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
          <v-card-title style="background-color: #170f23;padding: 6px 0px"><h6>{{ justNow.category }}</h6></v-card-title>
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
            { img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', category: 'Nhạc Mới Mỗi Ngày', to: '...'},
            { img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', category: 'Top Hits V-Pop', to: '...'},
            { img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', category: 'Top Hits V-Pop', to: '...'},
            { img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', category: 'Top Hits V-Pop', to: '...'},
            { img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', category: 'Top Hits V-Pop', to: '...'},
        ],
    };
  },
};
</script>

<style scope>
    .opa:hover > .hoverImg{
      opacity: 0.6;
    }

    .moreTools{
      display: none;
    }

    .opa:hover > .moreTools{
      display: block;
    }

</style>