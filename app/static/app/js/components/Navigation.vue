<template>
    <div id="navigation">
        <div class="row">
            <h2>Hello world</h2>
        </div>
        <div class="row">
            <p>Thinking of what to write in a greeting card can be hard work!</p>
        </div>
        <div class="row">
            <img src="~images/avatar.png">
        </div>
        <nav class="navbar">
            <ul>
                <li>
                    <router-link to="/">
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link to="/blog">
                        Blog
                    </router-link>
                </li>
                <li>
                    <router-link to="/contact">
                        Contact
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "navigation"
    };
</script>
