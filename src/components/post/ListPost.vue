<template>
    <div class="py-8">
        <v-row>
            <v-col style="height: fit-content;" md="4" v-for="post in listPost" :key="post.id + '-post'">
                <v-card class="pa-2" color="#231b2e">
                    <v-card-title class="pa-0">
                        {{ post.user.fullname }}
                        <v-spacer></v-spacer> 
                        <div v-if="post.user.id != currentUser.id">
                            <v-btn @click="unfollowing(post.user)" v-if="followings.some(x => x.user_id == post.user.id)" color="transparent">
                                <v-icon color="white">mdi-bell-minus</v-icon>
                                <span style="color:white">Bỏ quan tâm</span>
                            </v-btn>
                            <v-btn @click="following(post.user)" v-else color="transparent">
                                <v-icon color="white">mdi-bell-plus-outline</v-icon>
                                <span style="color:white">Quan tâm</span>
                            </v-btn>
                        </div>
                    </v-card-title>
                    <v-card-title class="pa-0" style="font-size: 12px; opacity: 0.6;">{{ new Date(post.created_at).toLocaleString() }}</v-card-title>
                    <v-card-title class="pa-0">{{ post.description }}</v-card-title>
                    <v-row class="py-1" @click="openDialog(post)">
                        <v-col 
                        :md="post.contents.length == 1? 12 : 6" 
                        v-for="content in post.contents" 
                        :key="content.id+ '-content'"
                        >
                            <v-img width="100%" height="100%" v-if="content.type == 'image'" :src="'https://docs.google.com/uc?id=' + content.link"></v-img>
                            <video v-else width="100%" height="100%" controls id="myVideo">
                                <source :src="'https://docs.google.com/uc?id=' + content.link" type="video/mp4" />
                            </video>
                        </v-col>
                    </v-row>
                    <v-btn @click="like(post)" v-if="!(post.likes.some(x => x.user_id == currentUser.id))" icon color="white">
                        <v-icon>mdi-heart-multiple-outline</v-icon>
                    </v-btn>
                    <v-btn @click="unlike(post)" v-else icon color="white">
                        <v-icon>mdi-heart-multiple</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <span style="font-size: 16px">{{post.likes.length}}</span>
                    </v-btn>
                    <v-btn text color="white" style="background-color: transparent !important;">
                        <v-icon class="pr-4" color="white">mdi-comment-outline</v-icon>
                        <span style="font-size: 16px">{{ post.comments.length }}</span>
                    </v-btn>
                </v-card>
            </v-col>
        </v-row>
        <v-dialog
        v-model="dialog"
        width="80%"
        style="position:relative; z-index: 999999999999;"
        transition="dialog-bottom-transition"
        >
            <detail-post :post="postChoosed" :followings="followings" :listPost="listPost"></detail-post>
        </v-dialog>
    </div>
</template>

<script>
import axios from 'axios'
import DetailPost from './DetailPost.vue'
import { postMixin } from '@/mixin/PostMixin.js'
export default {
    mixins: [postMixin],
    components:{DetailPost},
    data() {
        return{
            listPost: [],
            followings: [],
            postChoosed: null,
            dialog: false,
            currentUser: null
        }
    },
    async created(){
        await this.getCurrentUser()
        await this.getAllFollower()
        await this.getAllPost()
    },
    methods: {
        getAllPost(){
            return axios.get('/post/get-all-post')
            .then( (response) => {
                this.listPost = response.data.posts
            })
            .catch( () => {
                console.log('fail to get all post')
            })
        },
        openDialog(post){
            this.postChoosed = post
            this.dialog = true
        },
        getAllFollower(){
            return axios.get('/following/get-all-following/' + this.currentUser.id )
            .then( (response) => {
                this.followings = response.data.followings
            })
            .catch( () => {
                console.log('fail to get all following')
            })
        },
        getCurrentUser(){
            return axios.get("/user/current")
            .then( res => {
                this.currentUser = res.data.user
            })
        }
    }
}
</script>