<template>
    <div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 mt-5">

                    <div class="px-4 py-4 pt-md-5 pb-md-4 mx-auto text-center">
                        <h1 class="display-5">Welcome to VIPFS 🖖</h1>
                        <p class="lead mb-4">
                            Vue.js + IPFS = VIPFS. VIPFS is an alt-tech framework for creating permanent apps, blogs and websites that cannot be taken offline by anyone, including the government.
                        </p>

                        <p>
                            <span v-if="gitHubStars !== 0">Current Stars: {{gitHubStars}}</span>&nbsp;
                        </p>

                        <p>
                            <gh-btns-star slug="anthonybudd/vipfs" />
                            <gh-btns-watch slug="anthonybudd/vipfs" />
                            <gh-btns-fork slug="anthonybudd/vipfs" />
                        </p>
                    </div>

                </div>
            </div>

            <footer class="pt-4 my-md-5 pt-md-5 border-top">
                <div class="row">
                    <div class="col-12 col-md">
                        <small class="d-block mb-3 text-muted">© Anthony C. Budd 2021</small>
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
                            <li><a
                                    class="text-muted"
                                    href="#/archive"
                                >Archive</a></li>
                        </ul>
                    </div>

                    <div class="col-6 col-md">
                        <h5>Resources</h5>
                        <ul class="list-unstyled text-small">
                            <li><a
                                    class="text-muted"
                                    href="https://github.com/anthonybudd/vipfs"
                                >GitHub</a></li>
                            <li><a
                                    class="text-muted"
                                    href="https://github.com/anthonybudd/vipfs/tree/master/docs/tutorial.md"
                                >Tutorial</a></li>
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
                                >Ideea</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters(["gitHubStars"]),
    },

    mounted() {
        this.getGitHubStars().catch((err) => console.error(err));
    },

    methods: {
        ...mapActions(["getGitHubStars"]),
    },
};
</script>
