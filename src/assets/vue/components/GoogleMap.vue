<template>
    <div class="color-theme-orange google-map" :id="mapName"></div>
</template>
<script>
    // Google Maps - API KEY
    // AIzaSyDWVJF0R5GisYS5zrFhxnNZYM4bSG5q2Kg
    
    export default {
        name: 'google-map',
        props: ['name'],
        data: function () {
            return {
                mapName: this.name + "-map",
                markerCoordinates: [{
                    latitude: 38.7630338,
                    longitude: -9.0993649
                },
                {
                    latitude: 38.7642021,
                    longitude: -9.098625
                }],
                map: null,
                bounds: null,
                markers: []
            }
        },
        mounted: function () {
            this.bounds = new google.maps.LatLngBounds();
            const element = document.getElementById(this.mapName)
            const mapCentre = this.markerCoordinates[0]
            const options = {
                center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude)
            }
            this.map = new google.maps.Map(element, options);
            this.markerCoordinates.forEach((coord) => {
                const position = new google.maps.LatLng(coord.latitude, coord.longitude);
                const marker = new google.maps.Marker({
                    position,
                    map: this.map
                });
                this.markers.push(marker)
                this.map.fitBounds(this.bounds.extend(position))
            });
        }
    };
</script>
<style scoped>
    .google-map {
        width: 100%;
        min-height: 18vh;
        margin: 0 auto;
        background: gray;
    }
</style>
