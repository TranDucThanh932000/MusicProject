<template>
    <div>
        <v-row>
            <v-col>
                <h2>Tâm Trạng Và Hoạt Động</h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col md="3" sm="4" @click="goToPlayList(0)">
                <v-card color="transparent" class="position-relative card-hub" height="218.5px">
                    <div class="bg-image-hub">
                        <v-img class="rounded" style="object-fit: cover;" height="218.5px" width="100%" src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg"></v-img>
                    </div>
                    <span class="txt-hub px-2">Tình yêu</span>
                    <div class="position-absolute d-flex px-2 card-hub-sub" style="z-index: 2">
                        <div class="pr-1">
                            <v-img style="top: 130px;border-radius: 5px;" height="50px" width="50px" src="https://img.etimg.com/photo/msid-68721421,quality-100/nature.jpg"></v-img>
                        </div>
                        <div class="pr-1">
                            <v-img style="top: 130px;border-radius: 5px;" height="50px" width="50px" src="https://img.etimg.com/photo/msid-68721421,quality-100/nature.jpg"></v-img>
                        </div>
                        <div class="pr-1">
                            <v-img style="top: 130px;border-radius: 5px;" height="50px" width="50px" src="https://img.etimg.com/photo/msid-68721421,quality-100/nature.jpg"></v-img>
                        </div>
                    </div>
                </v-card>
            </v-col>
        </v-row>
        <v-row v-for="(category, index) in listCategory" :key="index">
            <v-col sm="12" class="py-0">
                <h3 style="text-transform: capitalize;">{{ category.name }}</h3>
            </v-col>
            <v-col sm="6" md="3" v-for="(playlist, idx) in category.listPlaylist" :key="idx + '-pl'">
                <div style="margin: 0px auto;">
                    <v-card flat style="background-color: #170f23;" :style="{width: width+'px'}" class="opa"> 
                        <v-img
                            :src="playlist.img"
                            :height="width + 'px'"
                            :width="width + 'px'"
                            style="object-fit: cover;margin : 0px;border-radius: 10px;"
                            class="hoverImg"
                        ></v-img>
                        <Option :to="playlist.to"/>
                    </v-card>
                    <v-card flat style="background-color: #170f23;">
                    <v-card-title style="background-color: #170f23;padding: 0px"><h6>{{ playlist.name }}</h6></v-card-title>
                    <v-card-text :style="'width:' + width + 'px'" style="color: gray;padding: 0px;">{{ playlist.detail }}</v-card-text>
                    </v-card>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Option from '@/components/main/Option'

export default {
    components:{
        Option
    },
    data() {
        return {
            width: 218.5,
            listCategory: [
                {
                    name: 'Nhạc trữ tình',
                    listPlaylist: [
                        {
                            name: 'Test1',
                            detail: 'Test2 1 222',
                            img: 'https://img.etimg.com/photo/msid-68721421,quality-100/nature.jpg'
                        },
                        {
                            name: 'Test1',
                            detail: 'Test2 1 222',
                            img: 'https://img.etimg.com/photo/msid-68721421,quality-100/nature.jpg'
                        }
                    ]
                },
                {
                    name: 'Nhạc trữ tình',
                    listPlaylist: [
                        {
                            name: 'Test1',
                            detail: 'Test2 1 222',
                            img: 'https://img.etimg.com/photo/msid-68721421,quality-100/nature.jpg'
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        firstLoad(){
            if(this.$vuetify.breakpoint.width >= 1536){
                this.$store.dispatch("updateShowSidebarLeft", true);
                this.width = 218.5
            }
            else if(this.$vuetify.breakpoint.width > 1264 && this.$vuetify.breakpoint.width < 1536){
                this.$store.dispatch("updateShowSidebarLeft", true);
                this.width = 198
            }else if(this.$vuetify.breakpoint.width > 960 && this.$vuetify.breakpoint.width <= 1264){
                this.width = 176
                 this.$store.dispatch("updateShowSidebarLeft", false);
            }else if(this.$vuetify.breakpoint.width >= 759 && this.$vuetify.breakpoint.width <= 960){
                this.width = 250
                this.$store.dispatch("updateShowSidebarLeft", false);
            }else{
                this.width = 200
                this.$store.dispatch("updateShowSidebarLeft", false);
            }
        },
        goToPlayList(id){
            console.log(id)
        }
    },
  watch:{
    "$vuetify.breakpoint.width"(){
      this.firstLoad()
    }
  }
}
</script>

<style>
.bg-image-hub{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.card-hub .bg-image-hub:hover .v-image__image{
    animation: zoomIn 1s ease forwards;
}
.txt-hub{
    text-transform: uppercase;
    position: relative;
    top: 50%;
    font-weight: bolder;
}
.card-hub{
    cursor: pointer;
}
</style>