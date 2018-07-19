<template>
    <!-- <div class="color-theme-orange mt-tracker">
        <img class="mt-tracker--image mt-tracker--animate" :src="getTrackerGauge()" />
    </div> -->
    <img class="mt-tracker--image mt-tracker--animate" :src="getTrackerGauge()" />
</template>
<script>
    export default {
        data() {
            const gauges = [
                'tracker-0.png',
                'tracker-1.png',
                'tracker-2.png',
                'tracker-3.png'
            ];
            return {
                gauges
            };
        },
        methods: {
            getTrackerGauge() {
                const self = this;
                const image = self.gauges[Math.floor(Math.random() * self.gauges.length)];
                return image ? require('../../images/' + image) : 'base64:';
            },
        }
    };
</script>
<style lang="scss">
    @import '../../sass/globals.scss';

    .mt-tracker {
        /* width: 50%;
        height: 50%;
        margin: 0 auto; */

        &--image {
            max-height: 34%;
            max-width: 34%;
            height: auto;
        }

        &--animate {
            -webkit-animation: slide-rotate-hor-bottom 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse both;
            animation: slide-rotate-hor-bottom 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse both;
        }
    }

    @-webkit-keyframes slide-rotate-hor-bottom {
        0% {
            -webkit-transform: translateY(0) rotateX(0deg);
            transform: translateY(0) rotateX(0deg);
        }
        100% {
            -webkit-transform: translateY(150px) rotateX(90deg);
            transform: translateY(150px) rotateX(90deg);
        }
    }

    @keyframes slide-rotate-hor-bottom {
        0% {
            -webkit-transform: translateY(0) rotateX(0deg);
            transform: translateY(0) rotateX(0deg);
        }
        100% {
            -webkit-transform: translateY(150px) rotateX(90deg);
            transform: translateY(150px) rotateX(90deg);
        }
    }
</style>
