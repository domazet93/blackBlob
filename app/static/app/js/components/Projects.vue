<template>
    <div id="projects">
        <div class="row text-center">
            <div class="col-md-4 col-md-offset-4">
                <navigation></navigation>
            </div>
        </div>
        <div class="content">
            <div class="row">
                <div class="col-md-4">
                    <h2>Projects</h2>
                </div>
            </div>
            <div class="row project-links mb-2">
                <div class="col-md-4">
                    <a href="#" @click.stop.prevent="changeView('musicbox')">
                        <img src="~images/mb_scheme.png">
                        <h4>MusicBox</h4>
                    </a>
                </div>
                <div class="col-md-4">
                    <a href="#" @click.stop.prevent="changeView('andrena')">
                        <img src="~images/andrena_scheme.png">
                        <h4>Andrena</h4>
                    </a>
                </div>
                <div class="col-md-4">
                    <a href="#" @click.stop.prevent="changeView('flickon')">
                        <img src="~images/phone_flickOn.png">
                        <h4>Flick On Football (Personal Project)</h4>
                    </a>
                </div>
            </div>
            <div class="row" v-if="projectName === 'musicbox'">
                <div class="col-md-8">
                    <h4 class="underline">Project Descriprion</h4>

                    <p>MusicBox is a music streaming service with a specific focus on cafes, restaurants, stores and similar venues.<br /><br />
                        Musicbox is Single Page App and my job was to replace and separate old UI into <strong>mobile</strong> and <strong>full (desktop)</strong> UI using BackboneJS. BackboneJS helped in structuring app into the models and views.<br /><br />
                        Template is served through Django and app has many Ionic classes for styling components.
                        Desktop UI come after mobile UI and we give a try to Vue2Js. App is divided into the components and with help of Vuex library they all share data.<br /><br />
                        Webpack is used to bundle and minify output file. No tests on frontend side.
                        Backend is written in Go and Python (Django framework) so I'm familiar with Django structure and <strong>Swagger</strong> to see structure of API and outputs for each endpoint.
                    </p>
                </div>
                <div class="col-md-4">
                    <h4 class="underline">Technologies</h4>

                    <p><strong>Programming languages:</strong> Javascript, Python</p>
                    <p><strong>Web frameworks:</strong> BackboneJS, Vue2, Ionic</p>
                    <p><strong>Build tools:</strong> webpack</p>
                </div>
            </div>
            <div class="row" v-if="projectName === 'andrena'">
                <div class="col-md-6">
                    <h4>Project Descriprion</h4>
                </div>
                <div class="col-md-6">
                    <h4>Technologies</h4>
                </div>
            </div>
            <div class="row" v-if="projectName === 'flickon'">
                <div class="col-md-6">
                    <h4>Project Descriprion</h4>
                </div>
                <div class="col-md-6">
                    <h4>Technologies</h4>
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
