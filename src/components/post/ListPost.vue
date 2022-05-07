<template>
    <div class="py-8">
        <v-row dense>
            <v-col style="height: fit-content;" md="4" v-for="(post, index) in listPost" :key="post.id + '-post'">
                <v-card class="pa-2" color="#231b2e">
                    <v-card-title class="pa-0">
                        <v-list-item-avatar size="50">
                            <v-img 
                                style="border-radius: 100%" 
                                :src="'https://docs.google.com/uc?id=' + post.user.avatar">
                            </v-img>
                        </v-list-item-avatar>
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
                        <div v-else>
                            <v-menu offset-y left>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn 
                                    icon 
                                    dark 
                                    v-on="on"
                                    v-bind="attrs">
                                        <v-icon>mdi-dots-horizontal</v-icon>
                                    </v-btn>
                                </template>
                                <v-list color="#231b2e">
                                    <v-list-item dark @click="editPost(post.description, index)" >
                                        <v-list-item-icon>
                                            <v-icon>mdi-pencil</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            Sửa mô tả
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item dark @click="deletePost(post.id, index)">
                                        <v-list-item-icon>
                                            <v-icon>mdi-delete</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            Xóa bài viết
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>
                    </v-card-title>
                    <v-card-title class="pa-0" style="font-size: 12px; opacity: 0.6;">{{ new Date(post.created_at).toLocaleString() }}</v-card-title>
                    <v-card-title v-if="!listPostEditing[index]" class="pa-0">{{ post.description }}</v-card-title>
                    <v-card-title v-else class="pa-0">
                        <v-text-field v-model="txtEditing"></v-text-field>
                        <v-btn :loading="loadingEdit" color="primary" @click="okEdit(post, index)">OK</v-btn>
                    </v-card-title>
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
            currentUser: null,
            txtEditing: null,
            listPostEditing: [],
            loadingEdit: false
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
                this.listPostEditing = new Array(this.listPost.length).fill(false)
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
        },
        editPost(description, index){
            this.txtEditing = description
            this.listPostEditing[index] = true
            this.listPostEditing.splice()
        },
        okEdit(post, index){
            this.loadingEdit = true
            post.description = this.txtEditing
            axios.post('/post/edit-description', {
                description: this.txtEditing,
                postId: post.id
            })
            .then( (response) => {
                if(response.data.message == 'success'){
                    this.loadingEdit = false
                    this.txtEditing = null
                    this.listPostEditing[index] = false
                }else{
                    alert('Lỗi khi sửa mô tả, hãy thử lại!')
                }
            })
            .catch( () => {
                alert('Lỗi khi sửa mô tả, hãy thử lại!')
            })
        },
        deletePost(id, index){
            axios.post('/post/delete', {
                postId: id
            })
            .then( (response) => {
                if(response.data.message == 'success'){
                    this.listPost.splice(index, 1)
                    this.listPostEditing.splice(index, 1)
                }else{
                    alert('Lỗi khi xóa bài viết, hãy thử lại')
                }
            })
            .catch( () => {
                alert('Lỗi khi xóa bài viết, hãy thử lại')
            }) 
        }
    }
}
</script>