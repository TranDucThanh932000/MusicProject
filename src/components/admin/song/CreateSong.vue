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
            <v-menu offset-y>
                <template v-slot:activator="{attrs, on}">
                    <v-text-field label="Chọn người sáng tác" v-bind="attrs" v-on="on" v-model="nameComposerChoose" readonly :rules="selectRules"></v-text-field>
                </template>
                <v-list-item-group
                    style="background-color: #231b2e;height: 200px;"
                    class="overflow-y-auto"
                    multiple
                    v-model="choosedComposers"
                >
                    <v-list-item
                    v-for="(composer, i) in composers"
                    :key="i"
                    >
                    <v-list-item-content>
                        <v-list-item-title v-text="composer.nickname"></v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-menu>
        </v-col>

        <v-col sm="12">
          <v-text-field
            v-model="name"
            label="Tên bài hát"
            clearable
            :rules="rules"
            color="white"
          ></v-text-field>
        </v-col>

        <v-col sm="12">
          <v-textarea
            v-model="lyrics"
            label="Lời bài hát"
            clearable
            :rules="rules"
            color="white"
          ></v-textarea>
        </v-col>

        <v-col sm="12">
          <v-text-field
            v-model="timeDuration"
            label="Thời lượng bài hát"
            clearable
            :rules="rules"
            color="white"
          ></v-text-field>
        </v-col>

        <v-col sm="12">
          <v-text-field
            v-model="image"
            label="Ảnh bìa"
            clearable
            :rules="rules"
            color="white"
          ></v-text-field>
        </v-col>

        <v-col sm="12">
          <v-text-field
            v-model="src"
            label="Link source"
            clearable
            :rules="rules"
            color="white"
          ></v-text-field>
        </v-col>

        <v-col sm="12">
          <v-text-field
            v-model="releaseDate"
            label="Ngày ra mắt"
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
            <v-btn @click="createSong()">Tạo bài hát</v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import axios from 'axios'
  export default {
    data () {
      return {
        name: null,
        lyrics: null,
        releaseDate: null,
        src: null,
        image: null,
        timeDuration: null,
        txtSinger: null,
        txtComposer: null,
        rules: [
            (value) => !!value || "Chưa nhập ký tự",
            (value) => (value && value.length >= 4) || "Ít nhất 4 ký tự",
        ],
        selectRules: [
            (value) => !!value || "Chưa chọn người",
        ],
        singers: null,
        nameSingerChoose: null,
        composers: null,
        nameComposerChoose: null,
        showUpdated: false,
        choosedSingers: [],
        choosedComposers: [],
        objectSingers : [],
        objectComposers : []
      }
    },
    created(){
        this.getAllSinger()
        this.getAllComposer()
    },
    methods:{
        createSong(){
            if(this.$refs.form_create_song.validate()){
                axios.post('/song/store',{
                    singers: this.objectSingers,
                    composers: this.objectComposers,
                    name: this.name,
                    lyrics: this.lyrics,
                    src: this.src,
                    image: this.image,
                    timeDuration: this.timeDuration,
                    releaseDate: this.releaseDate
                })
                .then((response) => {
                    if(response.data.status === 'success'){
                        this.$refs.form_create_song.reset()
                        this.showUpdated = true
                        setTimeout(() => {
                            this.showUpdated = false
                        }, 2000)
                    }else{
                        console.log(response.data.status)
                    }
                })
                .catch(() => {
                    console.log('error')
                })
            }
        },
        getAllSinger(){
            axios.get('/user/singer/get-all-singer')
            .then( (response) => {
                this.singers = response.data.singers
            })
            .catch(() => {
                console.log('fail')
            })
        },
        getAllComposer(){
            axios.get('/user/composer/get-all-composer')
            .then( (response) => {
                this.composers = response.data.composers
            })
            .catch(() => {
                console.log('fail')
            })
        }
    },
    watch:{
        choosedSingers(){
            this.nameSingerChoose = ''
            this.objectSingers = []
            for(let i = 0; i < this.choosedSingers.length; i++){
                this.nameSingerChoose += this.singers[this.choosedSingers[i]].nickname + ', '
                this.objectSingers.push(this.singers[this.choosedSingers[i]].id)
            }
        },
        choosedComposers(){
            this.nameComposerChoose = ''
            this.objectComposers = []
            for(let i = 0; i < this.choosedComposers.length; i++){
                this.nameComposerChoose += this.composers[this.choosedComposers[i]].nickname + ', '
                this.objectComposers.push(this.composers[this.choosedComposers[i]].id)
            }
        }
    }
  }
</script>

<style>
#input-form-create-song .v-label{
    color: white;
}

#input-form-create-song .v-input__slot::before{
    background-color: white;
}

#input-form-create-song textarea{
    color:white;
}
</style>

