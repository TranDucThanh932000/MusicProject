<template>
  <v-row style="height: 95px; z-index: 100000">
    <v-card
      width="100%"
      style="border-top: 1px solid white; background-color: #170f23"
    >
      <div class="d-flex" style="padding: 10px 10px 0px 20px">
        <div>
          <v-img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Xone-logo.jpg/800px-Xone-logo.jpg"
            width="80px"
            height="80px"
            style="object-fit: cover; border-radius: 50%"
            class="d-flex align-center"
          >
          </v-img>
        </div>
        <div class="d-flex" style="align-items: center; margin-left: 10px">
          <div>
            <p style="margin: 0px"><b>XONE Radio</b></p>
            <div style="display: flex">
              <p
                class="text-center px-2"
                style="
                  background: red;
                  border-radius: 6px;
                  font-size: 10px;
                  margin: 0px;
                "
              >
                <b>LIVE RADIO </b>
              </p>
              <p
                style="
                  font-size: 10px;
                  opacity: 0.6;
                  margin: 0px;
                  padding-left: 5px;
                "
              >
                467 đang nghe
              </p>
            </div>
          </div>
        </div>
        <div class="d-flex" style="align-items: center">
          <v-menu offset-x>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                @click.prevent=""
                style="width: 100%; padding: 0px"
                color="#432275"
                text
              >
                <v-icon style="color: white">mdi-dots-horizontal</v-icon>
              </v-btn>
            </template>
            <v-list style="background-color: #432275; color: white">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon style="color: white">mdi-content-copy</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Sao chép link</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-menu offset-x>
                  <template v-slot:activator="{ on, links }">
                    <v-btn
                      v-bind="links"
                      v-on="on"
                      @click.prevent=""
                      style="width: 100%; padding: 0px"
                      color="#432275"
                      text
                    >
                      <v-list-item-icon>
                        <v-icon style="color: white">mdi-share</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Chia sẻ</v-list-item-title>
                      </v-list-item-content>
                      <v-icon style="color: white">mdi-chevron-right</v-icon>
                    </v-btn>
                  </template>
                  <v-list style="background-color: #432275; color: white">
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon style="color: white">mdi-facebook</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Facebook</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-icon>
                        <v-icon style="color: white">mdi-twitter</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Twitter</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
      <div></div>
      <div></div>
    </v-card>
  </v-row>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>