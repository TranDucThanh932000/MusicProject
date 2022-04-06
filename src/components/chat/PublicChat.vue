<template>
  <div class="header-box-chat">
    <v-subheader style="border-bottom: 2px solid black">
      <h2 style="color: white">{{ roomName }}</h2>
      <v-divider></v-divider>
      <h3 style="color: white" v-if="userId">{{ numberOfUser }} thành viên</h3>
      <v-icon v-if="userId" color="green">mdi-circle</v-icon>
    </v-subheader>
    <div
    v-if="userId"
      style="
        height: 56vh;
        overflow-x: hidden;
        overflow-y: scroll;
        width: 100%;
        background-color: #242526;
      "
      ref="chatbox"
    >
      <v-layout row>
        <v-flex>
          <v-card class="chat-card">
            <v-list>
              <v-divider></v-divider>
              <v-list-item
                class="p-3"
                v-for="(item, index) in allMessages.slice().reverse()"
                :key="index"
              >
                <v-layout :align-end="userId === item.user_id" column>
                  <v-flex>
                    <v-layout column>
                      <v-flex>
                        <span
                          v-if="userId !== item.user_id"
                          class="small"
                          style="color: black"
                          >{{ item.fullname }}</span
                        >
                      </v-flex>
                      <v-flex>
                        <v-img
                          v-if="userId !== item.user_id"
                          class="avatar-public-chat"
                          :src="'https://docs.google.com/uc?id=' + item.avatar"
                          width="32px"
                          height="32px"
                        >
                        </v-img>
                        <v-chip
                          :color="userId === item.user_id ? 'primary' : 'gray'"
                        >
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                              <v-list-item-content
                                v-bind="attrs"
                                v-on="on"
                                :style="
                                  userId === item.user_id
                                    ? 'color:white'
                                    : 'color:black'
                                "
                              >
                                {{ item.message }}
                              </v-list-item-content>
                            </template>
                            <span>{{
                              new Date(item.created_at).toLocaleString()
                            }}</span>
                          </v-tooltip>
                        </v-chip>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-list-item>
              <v-list-item v-if="typingUserId !== null">
                {{ typingUserId }} đang nhập...
              </v-list-item>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
    <div class="d-flex py-2" style="border-top: 2px black solid;justify-content: center;height: 50vh;align-items:center;" v-else>
      <v-btn to="/login" color="primary">Đăng nhập để chat cùng mọi người nàoooo</v-btn>
    </div>
    <div style="border-top: 2px black solid" v-if="userId">
      <v-row class="txt-message">
        <v-text-field
          class="color-border-bottom"
          style="margin: 0px; padding: 0px"
          v-model="message"
          label="Nhập tin nhắn"
          single-line
          @keyup="onTyping"
          @keyup.enter="sendMessage"
        >
        </v-text-field>
        <v-menu bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" text style="margin: auto 0px">
              <v-icon>mdi-emoticon-excited-outline</v-icon>
            </v-btn>
          </template>
          <picker set="facebook" title="Chọn biểu cảm" @select="onInputEmoji">
          </picker>
        </v-menu>
        <v-btn
          @click="sendMessage"
          dark
          class="white--text"
          small
          style="margin: auto 0px"
          color="primary"
          >Gửi
        </v-btn>
      </v-row>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { Picker } from "emoji-mart-vue";

export default {
  data() {
    return {
      message: null,
      allMessages: [],
      username: "",
      userId: null,
      numberOfUser: 0,
      typingUserId: null,
      deleteMessage: false,
      roomName: "Tâm sự tuổi hồng",
    };
  },
  components: {
    Picker,
  },
  methods: {
    sendMessage() {
      if (!this.message) {
        return alert("Please enter message");
      }
      axios.post("/public-chat/messages", {
        message: this.message,
      });
      this.message = "";
    },
    fetchMessage() {
      axios.get("/public-chat/messages", this.message).then((response) => {
        this.allMessages = response.data.message;
        setTimeout(this.scrollToEnd, 0);
      });
    },
    getUserCurrent() {
      axios.get("/user/current").then((response) => {
        this.userId = response.data.user.id;
      });
    },
    scrollToEnd() {
      var chatbox = this.$refs.chatbox;
      chatbox.scrollTop = chatbox.scrollHeight;
    },
    onTyping() {
      this.$echo.private("lchat").whisper("typing", {
        user: this.userId,
      });
    },
    onInputEmoji(e) {
      if (!e) {
        return false;
      }
      if (this.message === null || this.message === "") {
        this.message = e.native;
      } else {
        this.message += e.native;
      }
    },
    async firstLoad(){
      if(localStorage.getItem("music_token")){
        await this.getUserCurrent()
        await this.fetchMessage()
        this.$echo
          .join("join-chat")
          .here((users) => {
            this.numberOfUser = users.length;
          })
          .joining((user) => {
            this.numberOfUser += 1
            var defaultMessage = {
              avatar: user.avatar,
              fullname: user.fullname,
              created_at: new Date(),
              id: -1,
              message: user.fullname + " đã tham gia phòng",
              updated_at: null,
              user: user,
              user_id: user.id,
            };
            this.allMessages.unshift(defaultMessage);
          })
          .leaving((user) => {
            this.numberOfUser -= 1;
            var defaultMessage = {
              avatar: user.avatar,
              fullname: user.fullname,
              created_at: new Date(),
              id: -1,
              message: user.fullname + " đã rời phòng",
              updated_at: null,
              user: user,
              user_id: user.id,
            };
            this.allMessages.unshift(defaultMessage);
          })
      }
    },
    userEvent(){
      if(localStorage.getItem('music_token')){
        this.$echo
          .private("lchat")
          .listenForWhisper("typing", (e) => {
            if (this.deleteMessage) {
              this.typingUserId = null;
              this.deleteMessage = false;
            } else {
              this.typingUserId = e.user;
            }
          })
          .listenForWhisper("untyping", (e) => {
            this.typingUserId = e.user;
            this.deleteMessage = true;
          })
          .listen("MessageSent", (e) => {
            var info = e.message;
            info.avatar = e.user.avatar;
            info.fullname = e.user.fullname;
            this.allMessages.unshift(info);
            setTimeout(this.scrollToEnd, 0);
            this.deleteMessage = false;
          });
      }
    }
  },
  created() {
    this.firstLoad()
  },
  mounted() {
    this.userEvent()
  },
  watch: {
    message() {
      if (this.message === "") {
        this.$echo.private("lchat").whisper("untyping", {
          user: null,
        });
      }
    },
  },
};
</script>

<style>
.floating-div {
  position: fixed;
}
.chat-card img {
  max-width: 300px;
  max-height: 200px;
}
.color-border-bottom .v-label {
  color: black !important;
}
.color-border-bottom input {
  color: black !important;
}
.txt-message {
  margin: 0px;
  padding: 10px 12px;
}
.color-border-bottom .v-text-field__details {
  display: none;
}
.color-border-bottom .v-input__slot {
  margin: 0px;
}
.avatar-public-chat {
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
}
.header-box-chat {
  width: 50%;
  margin: 0px auto;
  background: linear-gradient(to left, #dd3e54, #6be585);
  border-radius: 10px;
}
</style>