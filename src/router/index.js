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
import SongAdmin from '../components/admin/song/Song'
import ListSong from '../components/admin/song/ListSong'
import CreateSong from '../components/admin/song/CreateSong'
import DashBoard from '../components/admin/DashBoard'
import AlbumAdmin from '../components/admin/album/Album'
import ListAlbum from '../components/admin/album/ListAlbum'
import CreateAlbum from '../components/admin/album/CreateAlbum'

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
        path: '/admin',
        name: 'dashboard',
        component: DashBoard,
        children: [
            { 
                path: 'song', 
                component: SongAdmin,
                children: [
                    {
                        path: '', 
                        name: 'list-song', 
                        component: ListSong
                    },
                    {
                        path: 'create', 
                        name: 'create-song', 
                        component: CreateSong
                    }
                ] 
            },
            {
                path: 'album', 
                component: AlbumAdmin,
                children: [
                    {
                        path: '', 
                        name: 'list-album', 
                        component: ListAlbum
                    },
                    {
                        path: 'create', 
                        name: 'create-album', 
                        component: CreateAlbum
                    }
                ] 
            }
        ]
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
