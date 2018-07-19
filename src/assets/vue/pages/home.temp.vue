<template>
    <f7-page color-theme="orange" class="mt-home">
        <LayoutHome>
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
                        <div class="mt-home--tracker-container">
                            <Tracker />
                        </div>
                        <div class="mt-home--tracker-date">
                            13-07-2018, 08:02
                        </div>
                        <div class="mt-home--tracker-mode mt-vspacing--s">
                            <f7-link href="/faq/operation-mode - smart/">
                                <f7-chip text="MODE: SMART" media-bg-color="red">
                                    <f7-icon slot="media" f7="bolt_round_fill"></f7-icon>
                                </f7-chip>
                            </f7-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="full-with" slot="content">
                <div class="row align-items-center mt-home--content mt-hspacing--m mt-vspacing--m">
                    <div class="col">
                        <f7-button big icon-f7="graph_round" icon-size="18px" href="/status/">
                            <span>TRACKER EVENTS
                                <f7-icon class="mt-home--events-icon" f7="arrow_right" size="18px" color="blue"></f7-icon>
                            </span>
                        </f7-button>
                    </div>
                </div>
            </div>
        </LayoutHome>
    </f7-page>
</template>
<script>
    import LayoutHome from '../components/LayoutHome.vue'
    import Panel from '../components/Panel.vue';
    import Tracker from '../components/Tracker.vue';
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
            Tracker,
            GoogleMap
        }
    };
</script>
<style lang="scss">
    @import '../../sass/globals.scss';

    .mt-home {
        color: #color-smoke;

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
            display: inline-flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            text-align: center;
            min-height: 40vh;
            max-height: 40vh;

            &-container {
                margin: 0 auto;
                max-width: 100vw;
                min-height: 24vh;
                max-height: 24vh;
            }

            &-date {
                color: $color-smoke;
            }

            &-mode {
                padding-bottom: 20px;
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
