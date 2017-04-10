<template>
    <div id="app">
        <nav>
            <div class="nav-wrapper">
                Logo
                <ul>
                    <li>
                        <router-link to="/">
                            Home
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/contact">
                            Contact
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <router-view></router-view>

    </div>
</template>

<script>
    export default {
        name: "app"
    };
</script>
