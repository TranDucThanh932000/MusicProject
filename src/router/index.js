import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/main/Main'
import MusicChart from '../components/musicchart/MusicChart'
import Radio from '../components/radio/Radio'
import Album from '../components/album/Album'

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
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
  
export default router
