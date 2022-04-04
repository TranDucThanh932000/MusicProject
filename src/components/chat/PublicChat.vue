<template>
  <div style="width: 50%;margin: 0px auto;background-color:white;">
    <div style="height: 62vh;overflow-x:hidden; overflow-y: scroll;width: 100%;" ref="chatbox">
      <v-layout row>
        <v-flex>
          <v-card class="chat-card" color="white">
            <v-list>
              <v-subheader> Nhóm chat {{ numberOfUser }}</v-subheader>
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
                        <span class="small font-italic" style="color: black">{{
                          item.fullname
                        }}</span>
                      </v-flex>
                      <v-flex>
                        <v-chip
                          :color="userId === item.user_id ? 'green' : 'red'"
                          text-color="white"
                        >
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                            <v-list-item-content
                            v-bind="attrs"
                            v-on="on">
                              {{ item.message }}
                            </v-list-item-content>
                            </template>
                            <span>{{ item.created_at }}</span>
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
    <div style="border-top: 2px black solid">
        <v-row class="txt-message">
          <v-text-field 
              class="color-border-bottom"
              rows="2"
              v-model="message"
              label="Nhập tin nhắn"
              single-line
              color="black"
              @keyup="onTyping"
              @keyup.enter="sendMessage">
          </v-text-field>
            <v-btn
              @click="sendMessage"
              dark
              class="mt-3 ml-2 white--text"
              small
              color="green"
              >Gửi</v-btn
            >
        </v-row>
      </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      message: null,
      allMessages: [],
      username: '',
      userId: null,
      numberOfUser: 0,
      typingUserId: null,
      deleteMessage: false,
      statusAfterSend: false
    };
  },
  methods: {
    sendMessage() {
      if (!this.message) {
        return alert("Please enter message");
      }
      axios
        .post("/public-chat/messages", {
          message: this.message,
        })
      this.message = ''
    },
    fetchMessage() {
      axios
        .get("/public-chat/messages", this.message)
        .then((response) => {
          this.allMessages = response.data.message
          setTimeout(this.scrollToEnd, 0)
        });
    },
    async getUserCurrent() {
      await axios
        .get("http://127.0.0.1:8000/api/v1/user/current")
        .then((response) => {
          this.userId = response.data.user.id;
        });
    },
    scrollToEnd() {
      var chatbox = this.$refs.chatbox;
      chatbox.scrollTop = chatbox.scrollHeight;
    },
    onTyping(){
      this.$echo.private('lchat').whisper('typing', {
        user: this.userId
      })
    }
  },
  created() {
    this.getUserCurrent();
    this.fetchMessage();
  },
  mounted() {
    this.$echo.private("lchat")
    .listenForWhisper('typing', (e) => {
      if(this.deleteMessage){
        this.typingUserId = null
        this.deleteMessage = false
      }else{
        this.typingUserId = e.user
      }
    })
    .listenForWhisper('untyping', (e) => {
      this.typingUserId = e.user
      this.deleteMessage = true
    })
    .listen("MessageSent", (e) => {
        this.allMessages.unshift(e.message)
        setTimeout(this.scrollToEnd, 0)
        this.deleteMessage = false
    })
  },
  watch:{
    message(){
      if(this.message === ''){
        this.$echo.private('lchat').whisper('untyping', {
          user: null
        })
      }
    }
  }
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
.color-border-bottom .v-label{
  color:black !important;
}
.color-border-bottom input{
  color: black !important;
}
.txt-message{
  margin: 0px;
}
</style>