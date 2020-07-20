<template>
    <div>
        <div class="container">
            <div class="jumbotron">
                <h1>Archive</h1>
                <p>Use this page to permanently archive websites. Distributed archiving ensures that nothing can ever be scrubbed from the internet.</p>
                <hr>
                <p></p>
                <code>
                    $> npm run archive -- https://example.com
                </code>
            </div>
        </div>

        <div class="container">
            <div class="col-md-12 blog-main">
                <div
                    class="blog-post"
                    v-for="(archive, i) in archiveDB"
                    :key="i"
                >
                    <h2 class="blog-post-title mb-4">{{archive.created_at | moment('dddd, MMMM Do YYYY, h:mm:ss a') }}</h2>
                    <p>
                        <strong>Archived URL: </strong>
                        <a :href="'storage/archive/' + archive.id">
                            {{archive.id | parseURL}}
                        </a>
                    </p>
                    <p>
                        Source URL:
                        <a :href="archive.url">{{archive.url}}</a>
                    </p>
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import archiveDB from "./../archiveDB.json";

export default {
    data: () => ({
        archiveDB
    }),

    filters: {
        parseURL: id => {
            var GATEWAY = ""; // https://gateway.ipfs.io/ipns/
            var HASH = ""; // Qmxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            return GATEWAY + HASH + "/storage/archive/" + id;
        }
    }
};
</script>
