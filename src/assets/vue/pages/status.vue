<template>
    <f7-page class="color-theme-orange mt-status">
        <f7-navbar title="STATUS" back-link="Back"></f7-navbar>
        <f7-block-title>Registered events</f7-block-title>
        <f7-list media-list>
          <f7-list-item link="/faq/geofence/" title="Geofence" subtitle="Fora da área de segurança GeoFence_HOME" text="13/07/2018 07:58:48">
            <f7-icon slot="media" f7="compass" color="orange"></f7-icon>
          </f7-list-item>
          <f7-list-item link="/faq/connection/" title="Connection" subtitle="Ligação reestabelecida" text="13/07/2018 07:37:58">
            <f7-icon slot="media" f7="social_rss_fill" color="green"></f7-icon>
          </f7-list-item>
          <f7-list-item link="/faq/connection/" title="Connection" subtitle="Tracker sem ligação" text="12/07/2018 21:10:34" color="red">
            <f7-icon slot="media" f7="social_rss" color="red"></f7-icon>
          </f7-list-item>
          <f7-list-item link="/faq/geofence/" title="Geofence" subtitle="Fora da área de segurança GeoFence_HOME" text="11/07/2018 18:14:14">
            <f7-icon slot="media" f7="compass" color="orange"></f7-icon>
          </f7-list-item>
          <f7-list-item link="/faq/geofence/" title="Geofence" subtitle="Voltou à área de segurança GeoFence_HOME" text="11/07/2018 18:14:14">
            <f7-icon slot="media" f7="compass_fill" color="green"></f7-icon>
          </f7-list-item>
          <f7-list-item link="/faq/connection/" title="Connection" subtitle="Tracker foi ligado" text="10/07/2018 11:30:00">
            <f7-icon slot="media" f7="social_rss" color="green"></f7-icon>
          </f7-list-item>
          <f7-list-item link="/faq/rechargeable-battery/" title="Battery" subtitle="Bateria do Tracker está fraca" text="10/07/2018 09:13:17" color="red">
            <f7-icon slot="media" f7="bolt_round" color="red"></f7-icon>
          </f7-list-item>
        </f7-list>
    </f7-page>
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
            getTrackerWithGauge() {
                const self = this;
                const image = self.gauges[Math.floor(Math.random() * self.gauges.length)];
                return image ? require('../../images/' + image) : 'base64:';
            }
        },
        components: {
        }
    };
</script>
<style lang="scss">
    @import '../../sass/globals.scss';

    .mt-status {
    }
</style>
