<template>
    <div id="app">
        <div class="container">
            <router-view></router-view>
            <MainFooter></MainFooter>
        </div>
    </div>
</template>

<script>
    import MainFooter from "@/components/MainFooter";
    export default {
        name: "app",
        components: {
            MainFooter
        }
    };

</script>
