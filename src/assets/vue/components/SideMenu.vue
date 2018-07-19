<template>
    <div class="mt-layout">
        <nav class="mt-sidebar__nav" v-bind:class="{ 'mt-sidebar__nav--expanded': expanded }" v-touch:swipe="swipePanel">
            <ul>
                <li v-for="(value, key) in options" :key="'option-' + key">
                    <a class="mt-sidebar__nav-link" @click="onOptionClick(value.route)">
                        <f7-icon :f7="value.icon"></f7-icon>
                        <span v-if="expanded">{{value.text}}</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        data() {
            const options = [
                { id: 0, icon: 'home', text: 'Home', route: '/' },
                { id: 1, icon: 'navigation', text: 'Location', route: '/status/' },
                { id: 2, icon: 'chat', text: 'Chat', route: '/chat/' },
                { id: 3, icon: 'gear', text: 'Account', route: '/settings/' },
            ];
            return { options };
        },
        computed: {
            ...mapState({
                expanded: state => state.expanded
            })
        },
        methods: {
            getMenuOptions() {
                return this.options;
            },
            onOptionClick(route) {
                this.$f7.views.main.router.navigate(route);
            },
            swipePanel(direction) {
                this.toogleMenu(!this.expanded);
            },
            ...mapActions(['toogleMenu'])
        }
    };
</script>
<style lang="scss" scoped>
    @import '../../sass/globals.scss';

    $panel-width: 4em;
    $panel-width-expanded: 14em;

    /* Layout */

    .mt-layout {
        display: flex;
        width: 100%;
        min-height: 100vh;
        background-color: $color-black;
        color: $color-smoke;

        & a {
            text-decoration: none;
            color: inherit;
        }
    }

    /* Sidebar */

    .mt-sidebar__nav {
        position: fixed;
        top: 0;
        left: 0;
        overflow: hidden;
        transition: all .2s ease-in;
        width: $panel-width;
        height: 100%;
        background: $color-black;
        color: rgba(255, 255, 255, 0.6);

        &--expanded {
            width: $panel-width-expanded;
        }
    }

    .mt-sidebar__nav ul {
        position: relative;
        top: 0;
        left: 0;
        margin: 0;
        padding: 0;
        width: $panel-width;
    }

    .mt-sidebar__nav ul li {
        width: 100%;
    }

    .mt-sidebar__nav-link {
        position: relative;
        display: inline-block;
        width: 100%;
        margin: 2em auto;
    }

    .mt-sidebar__nav-link em {
        position: absolute;
        top: 50%;
        left: $panel-width;
        transform: translateY(-50%);
    }

    .mt-sidebar__nav-link:hover {
        background: #4d6276;
    }

    .mt-sidebar__nav-link>i {
        position: absolute;
        top: 0;
        left: 0;
        display: inline-block;
        width: calc(#{$panel-width} - 45px);
        height: 2em;
    }

    .mt-sidebar__nav-link>span {
        position: absolute;
        left: 3.4em;
        line-height: 1.5;
        @include responsive-font(3vw, 17px, 20px);
    }

    .mt-sidebar__nav-link>i::before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
