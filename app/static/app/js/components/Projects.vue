<template>
    <div class="container">
        <div class="text-center">
            <div class="">
                <navigation></navigation>
            </div>
        </div>
        <div class="content projects">
            <div class="p1">
                <div class="">
                    <h2>Projects</h2>
                </div>
            </div>
            <div class="flex mb-2 p1 flex-wrap--wrap">
                <div class="flex--1">
                    <a href="#" @click.stop.prevent="changeView('musicbox')">
                        <img src="~images/mb_scheme.png">
                        <h4>MusicBox</h4>
                    </a>
                </div>
                <div class="flex--1 projects__box">
                    <a href="#" @click.stop.prevent="changeView('andrena')">
                        <img src="~images/andrena_scheme.png">
                        <h4>Andrena</h4>
                    </a>
                </div>
                <div class="flex--1 projects__box">
                    <a href="#" @click.stop.prevent="changeView('flickon')">
                        <img src="~images/phone_flickOn.png">
                        <h4>Flick On Football (Personal Project)</h4>
                    </a>
                </div>
            </div>
            <div class="flex flex-wrap--wrap p1" v-if="projectName === 'musicbox'">
                <div class="flex--2 mr-2">
                    <h4 class="underline">Project Descriprion</h4>
                    <p>MusicBox is a music streaming service with a specific focus on cafes, restaurants, stores and similar venues.<br /><br />
                        Musicbox is Single Page App and my job was to replace and separate old UI into mobile and full (desktop) UI using BackboneJS while structuring app into the models and views.<br /><br />
                        A template is served through Django and app has many Ionic classes for styling components.
                        Desktop UI has come after mobile UI and I give a try to Vue2Js. An app is divided into the components and with help of Vuex library they all share data.<br /><br />
                        Webpack is used to bundle and minify output file. No tests on the frontend side.
                        The backend is written in Go and Python (Django) where I caught basic things related to Django from app structure, templates, Swagger and API design.
                    </p>
                </div>
                <div class="flex--1">
                    <h4 class="underline">Technologies</h4>
                    <p><strong>Programming languages:</strong><br/> Javascript, Python</p>
                    <p><strong>Web frameworks:</strong><br/> BackboneJS, Vue2, Ionic</p>
                    <p><strong>Build tools:</strong><br/> Webpack</p>
                    <a href="https://musicbox.com.hr/" target="_blank">VIEW PROJECT ONLINE ></a>
                </div>
            </div>
            <div class="flex flex-wrap--wrap p1" v-if="projectName === 'andrena'">
                <div class="flex--2 mr-2">
                    <h4 class="underline">Project Descriprion</h4>
                    <p>Wi-Fi powered by local community.</p>
                    <p>My focus was to create frontend part of the app. This isn't a single page app, instead there are many templates served by Django. <br /><br />
                    Client only ask for spash page, getting-started workflow and templates for managing account (we choosed <a href="https://github.com/pennersr/django-allauth/">django-allauth</a>).<br/> I worked with <strong>Angular 4</strong> and project was generated with a help of <strong>angular-cli</strong>. Config file has multiple apps and every template has inline, scripts and main bundle file.</p>

                </div>
                <div class="flex--1">
                    <h4 class="underline">Technologies</h4>
                    <p><strong>Programming languages:</strong><br /> Javascript, Python, SASS</p>
                    <p><strong>Web frameworks:</strong><br /> Angular 4</p>
                    <p><strong>Build tools:</strong><br /> Angular CLI, webpack</p>
                    <a href="https://andrena.com/" target="_blank">VIEW PROJECT ONLINE ></a>
                </div>
            </div>
            <div class="flex flex-wrap--wrap p1" v-if="projectName === 'flickon'">
                <div class="flex--2 mr-2">
                    <h4 class="underline">Project Descriprion</h4>
                    Flick On Football is community for football players, where they can create or join the match, chat with teams and earn reputation.

                    <p>This is SPA app and it's completly done by myself. Frontend part use Vue2. Project is separated into the single file components, loaded through router, and they all can share data and have access to the <strong>vuex store object</strong>.<br /><br />
                    <strong>Node.js (Koa) </strong> and <strong>MongoDB</strong> is used on backend.<br /><br />
                    Currently I work with <strong>Cordova</strong> and <strong>Android SDK</strong> to build Android apk from existing JS code.
                    </p>
                </div>
                <div class="flex--1">                    
                    <h4 class="underline">Technologies</h4>
                    <p><strong>Programming languages:</strong><br /> Javascript / Node.js</p>
                    <p><strong>Web frameworks:</strong><br /> Vue2, Koa2, Socket.io</p>
                    <p><strong>Build tools:</strong><br /> Webpack, Cordova</p>
                    <!-- <a href="https://www.flickonfootball.com/" target="_blank">VIEW PROJECT ONLINE ></a> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Navigation from "./Navigation";

    export default {
        name: "projects",
        data() {
            return {
                projectName: "musicbox"
            };
        },
        methods: {
            changeView(project) {
                this.projectName = project;
            }
        },
        components: {
            Navigation
        }
    };

</script>
