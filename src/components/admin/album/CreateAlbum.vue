<template>
  <v-form ref="form_create_song">
    <v-container style="padding-bottom: 100px">
      <v-row id="input-form-create-song">
        <v-col sm="12">
            <v-menu offset-y>
                <template v-slot:activator="{attrs, on}">
                    <v-text-field label="Chọn ca sỹ" v-bind="attrs" v-on="on" v-model="nameSingerChoose" readonly :rules="selectRules"></v-text-field>
                </template>
                <v-list-item-group
                    style="background-color: #231b2e;height: 200px;"
                    class="overflow-y-auto"
                    multiple
                    v-model="choosedSingers"
                >
                    <v-list-item
                    v-for="(singer, i) in singers"
                    :key="i"
                    >
                    <v-list-item-content>
                        <v-list-item-title v-text="singer.nickname"></v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-menu>
        </v-col>

        <v-col sm="12">
          <v-text-field
            v-model="name"
            label="Tên album"
            clearable
            :rules="rules"
            color="white"
          ></v-text-field>
        </v-col>

        <v-col sm="12">
          <v-textarea
            v-model="image"
            label="Ảnh đại diện album"
            clearable
            :rules="rules"
            color="white"
          ></v-textarea>
        </v-col>

        <v-col sm="12">
          <v-text-field
            v-model="releaseDate"
            label="Ngày phát hành album"
            clearable
            :rules="rules"
            color="white"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
                    <v-alert
                      dense
                      type="success"
                      width="50%"
                      style="position: absolute; bottom: 30%; left: 25%;z-index: 1000;"
                      v-model="showUpdated"
                      transition="fab-transition"
                    >
                      Thêm thành công
                    </v-alert>
            <v-btn @click="createAlbum()">Tạo album</v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            name: null,
            releaseDate: null,
            image: null,
            rules: [
                (value) => !!value || "Chưa nhập ký tự",
                (value) => (value && value.length >= 4) || "Ít nhất 4 ký tự",
            ],
            selectRules: [
                (value) => !!value || "Chưa chọn người",
            ],
            singers: null,
            nameSingerChoose: null,
            showUpdated: false,
            choosedSingers: [],
            objectSingers : [],
        }
    },
    created(){
        this.getAllSinger()
    },
    methods: {
        getAllSinger(){
            axios.get('/user/singer/get-all-singer')
            .then( (response) => {
                this.singers = response.data.singers
            })
            .catch(() => {
                console.log('fail')
            })
        },
    },
    watch: {
        choosedSingers(){
            this.nameSingerChoose = ''
            this.objectSingers = []
            for(let i = 0; i < this.choosedSingers.length; i++){
                this.nameSingerChoose += this.singers[this.choosedSingers[i]].nickname + ', '
                this.objectSingers.push(this.singers[this.choosedSingers[i]].id)
            }
        },
    }
}
</script>