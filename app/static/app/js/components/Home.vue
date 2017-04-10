<template>
    <div id="home">
        <div class="greeting">
            <div class="row">
               <h2>Hello world</h2>
            </div>
            <div class="row">
                <p>Thinking of what to write in a greeting card can be hard work!</p>
            </div>
             <div class="row">
                <img src="~images/avatar.png">
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <navigation></navigation>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-md-offset-2">
                <h2>First</h2>
                <p>I've tried this for both row, and span12, but my table inside span12, inside row always sits left. Adding padding moves it to the center, but I want to center it in a responsive way. Can I do auto padding somehow?</p>
            </div>
            <div class="col-md-4">
                <h2>First</h2>
                <p>I've tried this for both row, and span12, but my table inside span12, inside row always sits left. Adding padding moves it to the center, but I want to center it in a responsive way. Can I do auto padding somehow?</p>
            </div>
        </div>
        <div class="row">
                <h2>First</h2>
                <p>I've tried this for both row, and span12, but my table inside span12, inside row always sits left. Adding padding moves it to the center, but I want to center it in a responsive way. Can I do auto padding somehow?</p>
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
