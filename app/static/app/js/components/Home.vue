<template>
    <div id="home">
    <div class="container">
        <div class="row text-center">
            <div class="col-md-4 col-md-offset-4">
                <navigation></navigation>
            </div>
        </div>
        <div class="content">
            <div class="row mb-2">
                <div class="col-md-4 border-light mb-2">
                    <h2>First</h2>
                    <p>I've tried this for both row, and span12, but my table inside span12, inside row always sits left. Adding padding moves it to the center, but I want to center it in a responsive way.<br><br>

                    Can I do auto padding somehow?I've tried this for both row, and span12, but my table inside span12, inside row always sits left. Adding padding moves it to the center, but I want to center it in a responsive way. Can I do auto padding somehow</p>
                </div>

                <div class="col-md-4 text-center mb-2">
                    <img src="~images/development.svg" class="img-development">
                </div>

                <div class="col-md-4 border-light">
                    <h2>First</h2>
                    <p>I've tried this for both row, and span12, but my table inside span12, inside row always sits left. Adding padding moves it to the center, but I want to center it in a responsive way. Can I do auto padding somehow?</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 border-light mb-2 ">
                    <h2>First</h2>
                    <p>I've tried this for both row, and span12, but my table inside span12, inside row always sits left. Adding padding moves it to the center, but I want to center it in a responsive way. Can I do auto padding somehow?</p>
                </div>

                <div class="col-md-4 col-md-offset-4 portfolio-links border-light">
                    <h2>Links</h2>
                    <a href="https://github.com/domazet93" title="github"><img src="~images/github.ico"> github</a>
                    <a href="https://stackoverflow.com/users/6774916/t-dom93" title="stackoverflow"><img src="~images/stackoverflow.png"> stackoverflow</a>
                    <a href="https://www.linkedin.com/in/toni-domazet-086a5a13a/" title="linkedin"><img src="~images/linkedin.png">linkedin</a>
                </div>
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
