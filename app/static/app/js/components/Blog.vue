<template>
    <div class="blog">
        <div class="container">
            <div class="row text-center">
                <div class="col-md-4 col-md-offset-4">
                    <navigation></navigation>
                </div>
            </div>
            <div class="content">
                <div class="row">
                    <div class="col-md-12 ">
                        <h2>Blog</h2>
                     </div>
                </div>
                <div class="row">
                    <div class="col-md-12 ">
                        <a href="https://medium.com/@toni.domaz93/football-community-app-b26ac4b6c1c1">Football Community App</a>
                     </div>
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
