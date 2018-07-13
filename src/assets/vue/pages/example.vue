<template>
    <f7-page class="mt-example">
        <LayoutHome>
            <!--hero-->
            <div class="fullWith" slot="hero">
                <div class="row align-items-center mt-hspacing--m">
                    <div class="col-15">
                        <img class="mt-example__logo float-left" src="../../images/logo.png" />
                    </div>
                    <div class="col-65">
                        <h3 class="mt-example__title">RAMBLING AROUND</h3>
                    </div>
                    <div class="col-20">
                        <f7-icon class="float-right mt-vspacing--xs" f7="gear"></f7-icon>
                    </div>
                </div>
                <div class="row align-items-center text-align-center">
                    <div class="col mt-example__tracker">
                        <img class="mt-example__tracker--image slide-rotate-hor-bottom" :src="getTrackerWithGauge()" />
                    </div>
                </div>
            </div>
            <!--content-->
            <div class="fullWith" slot="content">
                <div class="row align-items-center mt-example__content mt-hspacing--m">
                    <div class="col">
                        <f7-segmented>
                            <f7-button big outline icon-f7="bolt_round" icon-size="16px" href="/example/">
                                <span>STATUS</span>
                            </f7-button>
                            <f7-button big outline icon-f7="info" icon-size="16px">
                                <span>LOGS</span>
                            </f7-button>
                        </f7-segmented>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col mt-page__map">
                        <!-- <GoogleMap :name="'Last Location'"></GoogleMap> -->
                    </div>
                </div>
            </div>
        </LayoutHome>
    </f7-page>
</template>
<script>
    import LayoutHome from '../components/LayoutHome.vue'

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
            getTrackerWithGauge() {
                const self = this;
                const image = self.gauges[Math.floor(Math.random() * self.gauges.length)];
                return image ? require('../../images/' + image) : 'base64:';
            }
        },
        components: {
            LayoutHome
        }
    };
</script>
<style lang="scss">
    @import '../../sass/globals.scss';

    .mt-example {
        background-color: $color-smoke;

        &__top {
            min-height: 50vh;
        }

        &__title {
            color: $color-smoke;
            @include responsive-font(3vw, 18px, 48px);
            opacity: .9;
        }

        &__logo {
            max-width: 10vw;
            max-height: 10vh;
            filter: brightness(3);
            opacity: .9;
        }

        &__tracker {
            padding-top: 2vh;
            min-height: 35vh;

            &--image {
                max-width: 40vw;
                max-height: 40vh; // filter: sepia(100%) saturate(300%) brightness(70%) hue-rotate(60deg)
            }
        }

        .slide-rotate-hor-bottom {
            -webkit-animation: slide-rotate-hor-bottom 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse both;
            animation: slide-rotate-hor-bottom 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse both;
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

        &__content {
            padding-top: $mt-spacing-m;
        }
    }
</style>
