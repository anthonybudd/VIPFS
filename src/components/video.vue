<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-10 offset-1 mt-5 mb-5">

                    <h1>Video Template</h1>
                    <p class="text-muted">January 1, 2020 by <a href="#">Anonymous</a></p>

                    <video-player
                        class="video-player-box mb-5"
                        ref="videoPlayer"
                        :options="playerOptions"
                        :playsinline="true"
                        @play="onPlayerPlay($event)"
                        @pause="onPlayerPause($event)"
                        @ended="onPlayerEnded($event)"
                        @waiting="onPlayerWaiting($event)"
                        @playing="onPlayerPlaying($event)"
                    />

                    <p>Sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
                    <p><a href="https://commons.wikimedia.org/w/index.php?title=File%3ASTS-132_launch.ogv">Source</a></p>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        playerOptions: {
            poster: 'storage/images/sts132.png',
            playbackRates: false,
            language: 'en',
            fluid: true,
            sources: [{
                type: 'video/mp4',
                src: 'storage/videos/sts132.mp4',
            }],
        }
    }),

    mounted () {},

    methods: {
        onPlayerPlay: event => console.log(event),
        onPlayerPause: event => console.log(event),
        onPlayerEnded: event => console.log(event),
        onPlayerWaiting: event => console.log(event),
        onPlayerPlaying: event => console.log(event)
    }
}
</script>
