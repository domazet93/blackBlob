<template>
    <div id="home">
        <div class="row text-center">
            <div class="col-md-4 col-md-offset-4">
                <navigation></navigation>
            </div>
        </div>
        <div class="content">
            <div class="row mb-2">
                <div class="col-md-4 border-light">
                    <h2>First</h2>
                    <p>I've tried this for both row, and span12, but my table inside span12, inside row always sits left. Adding padding moves it to the center, but I want to center it in a responsive way.<br><br>

                    Can I do auto padding somehow?I've tried this for both row, and span12, but my table inside span12, inside row always sits left. Adding padding moves it to the center, but I want to center it in a responsive way. Can I do auto padding somehow</p>
                </div>

                <div class="col-md-4">
                    <img src="~images/development.jpg" class="img-development">
                </div>

                <div class="col-md-4 border-light">
                    <h2>First</h2>
                    <p>I've tried this for both row, and span12, but my table inside span12, inside row always sits left. Adding padding moves it to the center, but I want to center it in a responsive way. Can I do auto padding somehow?</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 border-light">
                    <h2>First</h2>
                    <p>I've tried this for both row, and span12, but my table inside span12, inside row always sits left. Adding padding moves it to the center, but I want to center it in a responsive way. Can I do auto padding somehow?</p>
                </div>

                <div class="col-md-4 col-md-offset-4 border-light">
                    <h2>First</h2>
                    <p>I've tried this for both row, and span12, but my table inside span12, inside row always sits left. Adding padding moves it to the center, but I want to center it in a responsive way. Can I do auto padding somehow?</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Navigation from "./Navigation";

    export default {
        name: "home",
        components: {
            Navigation
        }
    };
</script>
