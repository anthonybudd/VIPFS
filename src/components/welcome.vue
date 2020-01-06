<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 mt-5">

                    <div class="px-4 py-4 pt-md-5 pb-md-4 mx-auto text-center">
                        <h1 class="display-4">Welcome to VIPFS 🖖</h1>
                        <p class="lead">
                            VIPFS is a simple boilerplate project for creating perminant apps, blogs and websites that cannot be taken offline. The application is built with Vue.js and comes with useful templates and pre-integrated with Bootstrap, FontAwesome, Video.js, Vuex and VueRouter. Simply run the command `npm run publish` to deploy your app on IPFS and make it accesable to the world. Once published, your VIPFS application requires no perminant hosting yet it is almost impossible to take down.
                        </p>

                        <p>
                            <span v-if="gitHubStars !== 0">Current Stars: {{gitHubStars}}</span>&nbsp;
                        </p>

                        <p>
                            <gh-btns-star slug="Ideea-inc/vipfs" />
                            <gh-btns-watch slug="Ideea-inc/vipfs" />
                            <gh-btns-fork slug="Ideea-inc/vipfs" />
                        </p>
                    </div>

                    <div class="container">
                        <footer class="pt-4 my-md-5 pt-md-5 border-top">
                            <div class="row">
                                <div class="col-12 col-md">
                                    <a href="https://ideea.io">
                                        <img
                                            class="mb-2"
                                            src="https://ideea.io/static/img/icon-small.png"
                                            alt="Ideea Logo"
                                            width="30"
                                        >
                                    </a>
                                    <small class="d-block mb-3 text-muted">© Ideea 2020</small>
                                </div>

                                <div class="col-6 col-md">
                                    <h5>Templates</h5>
                                    <ul class="list-unstyled text-small">
                                        <li><a
                                            class="text-muted"
                                            href="#/bio"
                                        >Bio</a></li>
                                        <li><a
                                            class="text-muted"
                                            href="#/post"
                                        >Post</a></li>
                                        <li><a
                                            class="text-muted"
                                            href="#/video"
                                        >Video</a></li>
                                        <li><a
                                            class="text-muted"
                                            href="#/gallery"
                                        >Gallery</a></li>
                                        <li><a
                                            class="text-muted"
                                            href="#/payment"
                                        >Payment</a></li>
                                    </ul>
                                </div>

                                <div class="col-6 col-md">
                                    <h5>Resources</h5>
                                    <ul class="list-unstyled text-small">
                                        <li><a
                                            class="text-muted"
                                            href="https://github.com/Ideea-inc/vipfs"
                                        >GitHub</a></li>
                                        <li><a
                                            class="text-muted"
                                            href="https://ideea.io/vipfs/getting-started-tutorial"
                                        >Tutorial</a></li>
                                        <li><a
                                            class="text-muted"
                                            href="https://github.com/Ideea-inc/vipfs/tree/master/docs"
                                        >Docs</a></li>
                                        <li><a
                                            class="text-muted"
                                            href="https://youtu.be/MXlpKek8wQw"
                                        >YouTube Tutorial</a></li>
                                    </ul>
                                </div>

                                <div class="col-6 col-md">
                                    <h5>About</h5>
                                    <ul class="list-unstyled text-small">
                                        <li><a
                                            class="text-muted"
                                            href="https://ideea.io/vipfs"
                                        >VIPFS</a></li>
                                        <li><a
                                            class="text-muted"
                                            href="https://ideea.io/about"
                                        >Team</a></li>
                                        <li><a
                                            class="text-muted"
                                            href="https://ideea.io"
                                        >Ideea</a></li>
                                    </ul>
                                </div>
                            </div>
                        </footer>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['gitHubStars'])
    },

    mounted () {
        this.getGitHubStars().catch(err => console.error(err))
    },

    methods: {
        ...mapActions(['getGitHubStars'])
    }
}
</script>
