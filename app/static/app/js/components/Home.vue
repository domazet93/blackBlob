<template>
    <div class="home">
        <div class="container">
            <div class="text-center">
                <div class="">
                    <navigation></navigation>
                </div>
            </div>
            <div class="content">
                <div class="flex flex-wrap--wrap">
                    <div class="border-light flex--2 p1 m05">
                        <h2>Employment History</h2>
                        <p>
                            <span>Frontend developer @</span><br/>
                            <a href="http://goodcode.io/" target="_blank">Goodcode</a><br/>
                            <span>August 2016 - September 2017</span><br/>
                            <span>Zagreb, Croatia</span><br/><br/>
                        </p>
                        <p>
                            <span>Frontend developer (Intern) @</span><br/>
                            <a href="https://www.morris-chapman.com/" target="_blank">Morris & Chapman</a><br/>
                            <span>March 2015 - August 2015</span><br/>
                            <span>Brussels, Belgium</span><br/>
                        </p>
                    </div>

                    <div class="border-light flex--2 p1 m05">
                        <h2>Stack</h2>
                        <div class="flex align-items--start">
                            <img src="~images/heart.svg">&nbsp;                           
                            <div class="flex--1">
                                <h4 class="m0">LOVE WORK WITH</h4>
                                <p class="m0">Node.js, MongoDB, VueJS, <br /> Webpack, SASS, SVG</p>
                            </div>
                        </div>
                        <div class="flex align-items--start mt-1">
                            <img src="~images/search.svg">&nbsp; 
                            <div class="flex--1">
                                <h4 class="m0">CURRENTLY RESEARCHING</h4>
                                <p class="m0">Angular, TypeScript</p>
                            </div>
                        </div>
                    </div> 
                </div>
                <div class="flex flex-wrap--wrap">
                     <div class="border-light flex--1 p1 m05">
                        <h2>Overview</h2>
                        <p>I'm Toni Domazet, Javascript developer with 2 years experience in developing web apps.<br /><br />
                        I have a bachelor's degree in IT Engineering. <br /><br /> I'm passionate, self-motivated person and active member of local Javascript community.
                        </p> 
                    </div>
                    <div class="home__links flex flex-direction--column border-light flex--1 p1 m05">
                        <h2>Links</h2>
                        <a href="https://github.com/domazet93" target="_blank" class="mt-1" title="github"><img src="~images/github.ico" class="mr-1">github</a>
                        <a href="https://stackoverflow.com/users/6774916/t-dom93" target="_blank" class="mt-1"  title="stackoverflow"><img src="~images/stackoverflow.png" class="mr-1">stackoverflow</a>
                        <a href="https://www.linkedin.com/in/toni-domazet-086a5a13a/" target="_blank" class="mt-1"  title="linkedin"><img src="~images/linkedin.png" class="mr-1">linkedin</a>
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
