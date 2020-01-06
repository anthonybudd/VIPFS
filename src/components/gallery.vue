<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-10 offset-1 mt-5 mb-5">

                    <h1>Gallery Template</h1>
                    <p class="text-muted">January 1, 2020 by <a href="#">Anonymous</a></p>
                    <p>Sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
                    <hr class="mb-5">

                    <div class="row">
                        <div
                            class="col-md-4"
                            v-for="(image, i) in images"
                            :key="i"
                        >
                            <a :href="image">
                                <img
                                class="rounded float-left img-fluid img-thumbnail mb-3"
                                :src="image"
                                alt="Gallery image"
                                >
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data: () => ({
        images: [
            'storage/images/washington.png',
            'storage/images/jefferson.png',
            'storage/images/hamilton.png',

            'storage/images/da-vinci.png',
            'storage/images/yiannopoulos.png',
            'storage/images/aquinas.png',

            'storage/images/madison.png',
            'storage/images/machiavelli.png',
            'storage/images/smith.png'
        ]
    }),

    mounted () {}
}
</script>
