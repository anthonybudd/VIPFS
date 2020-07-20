import welcome from './components/welcome.vue'
import post from './components/post.vue'
import video from './components/video.vue'
import gallery from './components/gallery.vue'
import bio from './components/bio.vue'
import payment from './components/payment.vue'
import archive from './components/archive.vue'

export default [
    {
        path: '/',
        name: 'welcome',
        component: welcome,
    },


    // Templates
    {
        path: '/post',
        name: 'post',
        component: post,
    }, {
        path: '/video',
        name: 'video',
        component: video,
    }, {
        path: '/gallery',
        name: 'gallery',
        component: gallery,
    }, {
        path: '/bio',
        name: 'bio',
        component: bio,
    }, {
        path: '/payment',
        name: 'payment',
        component: payment,
    }, {
        path: '/archive',
        name: 'archive',
        component: archive,
    }
]
