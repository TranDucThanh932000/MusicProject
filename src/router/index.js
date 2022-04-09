import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/main/Main'
import MusicChart from '../components/musicchart/MusicChart'
import Radio from '../components/radio/Radio'
import Album from '../components/album/Album'
import NewSongs from '../components/newsongs/NewSongs'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import PublicChat from '../components/chat/PublicChat'
import CreateSong from '../components/admin/song/CreateSong'

Vue.use(VueRouter)

export const routes = [
    {
        path: '/',
        name: 'homepage',
        component: Main
    },
    {
        path: '/music-chart',
        name: 'music-chart',
        component: MusicChart
    },
    {
        path: '/radio',
        name: 'radio',
        component: Radio
    },
    {
        path: '/album',
        name: 'album',
        component: Album, children: [
            {path: ':id', name: 'album-details', component: Album}
        ]
    },
    {
        path: '/new-songs',
        name: 'newsongs',
        component: NewSongs
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/public-chat/:id',
        name: "public-chat",
        component: PublicChat
    },
    {
        path: '/admin/song/create',
        name: "create-song",
        component: CreateSong
    },
    {
        path: '/:catchAll(.*)*',
        name: "PageNotFound",
        component: Main,
    },
    
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
  
export default router
