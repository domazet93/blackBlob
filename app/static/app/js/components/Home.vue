<template>
    <div class="home">
        <div class="container">
            <div class="row text-center">
                <div class="col-md-4 col-md-offset-4">
                    <navigation></navigation>
                </div>
            </div>
            <div class="content">
                <div class="row mb-2">
                    <div class="col-md-4 border-light mb-2 ">
                        <h2>Employment History</h2>
                        <p>
                            <span>Frontend developer @</span><br/>
                            <a href="http://goodcode.io/">Goodcode</a><br/>
                            <span>August 2016 - September 2017</span><br/>
                            <span>Zagreb, Croatia</span><br/><br/>
                        </p>
                        <p>
                            <span>Frontend developer (Intern) @</span><br/>
                            <a href="https://www.morris-chapman.com/">Morris & Chapman</a><br/>
                            <span>March 2015 - August 2015</span><br/>
                            <span>Brussels, Belgium</span><br/>
                        </p>
                    </div>

                    <div class="col-md-4 text-center mb-2">
                        <img src="~images/development.svg" class="img-development">
                    </div>

                    <div class="col-md-4 border-light love-section">
                        <img src="~images/heart.svg"><h4>LOVE WORK WITH</h4>
                        <p>Node.js, MongoDB, VueJS, Webpack, SASS, SVG</p><br />
                        <img src="~images/search.svg"><h4>CURRENTLY RESEARCHING</h4>
                        <p>Heroku, Django</p>
                    </div>
                </div>
                <div class="row">
                     <div class="col-md-4 border-light mb-2">
                        <h2>Overview</h2>
                        <p>I'm Toni Domazet, Javascript developer with almost 2 years experience in developing web apps.<br /><br />
                        I have a bachelor's degree in IT Engineering. <br /><br /> I'm passionate, self-motivated person and active member of local Javascript community.
                        </p>
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
