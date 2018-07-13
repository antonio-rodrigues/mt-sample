<template>
    <f7-page color-theme="orange" class="mt-home">
        <LayoutHome>
            <!--hero-->
            <div class="full-with" slot="hero">
                <div class="row align-items-center mt-hspacing--m">
                    <div class="col-15">
                        <img class="mt-home--logo float-left" src="../../images/logo.png" />
                    </div>
                    <div class="col-65">
                        <h3 class="mt-home--title">AROD'S TRACKER</h3>
                    </div>
                    <div class="col-20">
                        <f7-button class="float-right mt-vspacing--xs mt-home--settings-icon" no-padding icon-f7="gear" icon-size="28px" icon-color="white"
                            href="/settings/" />
                    </div>
                </div>
                <div class="row align-items-center text-align-center">
                    <div class="col mt-home--tracker">
                        <div>
                            <img class="mt-home--tracker-image slide-rotate-hor-bottom" :src="getTrackerWithGauge()" />
                        </div>
                        <div class="mt-home--tracker-date">
                            13-07-2018, 08:02
                        </div>
                        <div class="mt-home--tracker-mode">
                            <f7-link href="/faq/operation-mode - smart/">
                                <f7-chip text="MODE: SMART" media-bg-color="red">
                                    <f7-icon slot="media" f7="bolt_round_fill"></f7-icon>
                                </f7-chip>
                            </f7-link>
                        </div>
                    </div>
                </div>
            </div>
            <!--content-->
            <div class="full-with mt-home--container" slot="content">
                <div class="row align-items-center mt-home--content mt-hspacing--m mt-vspacing--m">
                    <div class="col">
                        <f7-button big round outline icon-f7="graph_round" icon-size="18px" href="/status/">
                            <span>TRACKER EVENTS
                                <f7-icon class="mt-home--events-icon" f7="arrow_right" size="18px" color="blue"></f7-icon>
                            </span>
                        </f7-button>
                    </div>
                </div>
                <div class="row mt-hspacing--m">
                    <div class="card full-with mt-home--card">
                        <div class="card-header">
                            LAST LOCATION
                            <f7-button class="float-right mt-home--refresh-map" small @click="showDeterminate(true)">
                                <f7-icon f7="refresh" size="18px" color="blue"></f7-icon>
                            </f7-button>
                        </div>
                        <div class="card-content mt-home--map">
                            <div id="maps-progress-bar"></div>
                            <GoogleMap :name="'Last Location'"></GoogleMap>
                        </div>
                        <div class="card-footer">
                            <f7-button small icon-f7="navigation" icon-size="16px" href="/status/">
                                <span>History</span>
                            </f7-button>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutHome>
    </f7-page>
</template>
<script>
    import LayoutHome from '../components/LayoutHome.vue'
    import Panel from '../components/Panel.vue';
    import GoogleMap from '../components/GoogleMap.vue';

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
            },
            showDeterminate(inline) {
                const self = this;
                const app = self.$f7;
                if (self.determinateLoading) return;
                self.determinateLoading = true;
                let progressBarEl;
                if (inline) {
                    progressBarEl = app.progressbar.show('#maps-progress-bar', 0);
                } else {
                    progressBarEl = app.progressbar.show(0, app.theme === 'md' ? 'yellow' : 'blue');
                }
                let progress = 0;
                function simulateLoading() {
                    setTimeout(() => {
                        const progressBefore = progress;
                        progress += Math.random() * 20;
                        app.progressbar.set(progressBarEl, progress);
                        if (progressBefore < 100) {
                            simulateLoading(); // keep "loading"
                        } else {
                            self.determinateLoading = false;
                            app.progressbar.hide(progressBarEl); // hide
                        }
                    }, Math.random() * 200 + 200);
                }
                simulateLoading();
            },
        },
        components: {
            LayoutHome,
            Panel,
            GoogleMap
        }
    };
</script>
<style lang="scss">
    @import '../../sass/globals.scss';

    .mt-home {

        &--title {
            color: $color-smoke;
            @include responsive-font(3vw, 18px, 48px);
            opacity: .9;
        }

        &--settings-icon {
            left: $mt-spacing-m;

            >i.icon {
                opacity: .5;
            }
        }

        &--logo {
            max-width: 10vw;
            max-height: 10vh;
            filter: brightness(3);
            opacity: .9;
        }

        &--tracker {
            padding-top: $mt-spacing-s;
            min-height: 35vh;

            &-image {
                max-width: 30vw;
                max-height: 30vh;
            }

            &-date {
                color: $color-smoke;
            }

            &-mode {
                padding-top: $mt-spacing-xs;
            }
        }

        .slide-rotate-hor-bottom {
            -webkit-animation: slide-rotate-hor-bottom 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse both;
            animation: slide-rotate-hor-bottom 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse both;
        }

        &--container {
            background-color: $color-noir;
        }

        &--content {
            padding-top: $mt-spacing-m;
        }

        &--events-icon {
            margin-left: $mt-spacing-xs;
        }

        &--refresh-map {
            min-width: 24px !important;
            max-width: 24px !important;
            padding: 0 !important;
            top: -3px;
        }

        &--map {
            border-radius: $mt-border-radius;
            min-height: 80%;

            >div {
                border-radius: $mt-border-radius;
                height: 80%;
            }
        }

        & .card {
            margin: 0;
            height: 100%;

            .google-map {
                min-height: 18vh;
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
    }
</style>
