<template>
    <div id="blog">
        <div class="row text-center">
            <div class="col-md-4 col-md-offset-4">
                <navigation></navigation>
            </div>
        </div>
        <div class="content">
            <div class="row">
                <div class="col-md-4 col-md-offset-4">
                        Blog
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Navigation from "./Navigation";

    export default {
        name: "blog",
        components: {
            Navigation
        }
    };

</script>
