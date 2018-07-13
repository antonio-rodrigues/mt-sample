<template>
    <f7-page>
        <GridLayout>
            <div class="fullWith" slot="hero">
                TOP BAR
            </div>
            <div class="fullWith" slot="content">
                CONTENT
            </div>
        </GridLayout>
    </f7-page>
</template>
<script>
    import GridLayout from '../components/GridLayout.vue'

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
            GridLayout
        }
    };
</script>
<style lang="scss">
    @import '../../sass/globals.scss';
</style>
