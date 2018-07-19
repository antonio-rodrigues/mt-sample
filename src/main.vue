<template>
    <!-- App -->
    <div id="app">
        <f7-statusbar></f7-statusbar>
        <div class="mt-app--side-panel">
            <SideMenu />
        </div>
        <f7-view class="ios-edges mt-app--content" url="/" :main="true"></f7-view>
    </div>
</template>
<script>
    import SideMenu from './assets/vue/components/SideMenu.vue';

    export default {
        mounted() {
            console.info('[ ☎️ DEVICE ]', this.$device)
        },
        components: {
            SideMenu
        }
    }
</script>
<style lang="scss">
    @import './assets/sass/globals.scss';

    $side-panel-width: 4em;

    .mt-app {

        &--side-panel {
            position: absolute;
            top: 0;
            left: 0;
            width: $side-panel-width;
            min-height: 100vh;
            max-height: 100vh;
            background-color: $color-black;
            color: $color-smoke;
            z-index: 9999;
        }

        &--content {
            margin-left: $side-panel-width;
        }
    }
</style>
