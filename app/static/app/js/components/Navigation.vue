<template>
    <div class="navigation">
        <div class="">
            <img src="~images/me.jpg" class="avatar">
        </div>
        <nav class="navbar">
            <ul>
                <li>
                    <router-link to="/">
                        home
                    </router-link>
                </li>
                <li>
                    <router-link to="/projects">
                        projects
                    </router-link>
                </li>
                <li>
                    <router-link to="/contact">
                        contact
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
