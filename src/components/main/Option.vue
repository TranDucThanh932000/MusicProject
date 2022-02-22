<template>
          <div class="moreTools" style="position: absolute; top: calc(50% - 44px); width : 100%;text-align: center;z-index:10000000;">
            <v-btn plain style="color: white">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn  plain outlined style="color: white; border-radius: 50%; padding: 0px !important; height: 48px; min-width: 48px;">
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
                    <v-icon style="color:white">mdi-play-circle</v-icon>
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
                            <v-icon plain style="color:white">mdi-unfold-more-vertical</v-icon>
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
</template>
<script>
export default {
    data() {
        return{
            
        }
    },
}
</script>

