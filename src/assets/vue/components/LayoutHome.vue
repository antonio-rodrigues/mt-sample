<template>
    <main class="color-theme-orange mt-layout">
        <section class="mt-layout--row mt-layout--gradient">
            <slot name="hero"></slot>
        </section>
        <div class="mt-layout--row mt-layout--content">
            <slot name="content"></slot>
        </div>
    </main>
</template>
<script>
    export default {};
</script>
<style lang="scss">
    @import '../../sass/globals.scss';

    .mt-layout {
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: 25vh;
        margin: 0;
        background-color: $color-noir;

        &--row {
            display: grid;
            align-items: start;
            grid-row: span 2;
        }

        &--gradient {
            /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffb76b+0,ff6100+0,ffbc75+100,ff7f04+100 */
            background: #ffb76b;
            /* Old browsers */
            background: -moz-linear-gradient(-45deg, #ffb76b 0%, #ff6100 0%, #ffbc75 100%, #ff7f04 100%);
            /* FF3.6-15 */
            background: -webkit-linear-gradient(-45deg, #ffb76b 0%, #ff6100 0%, #ffbc75 100%, #ff7f04 100%);
            /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(135deg, #ffb76b 0%, #ff6100 0%, #ffbc75 100%, #ff7f04 100%);
            /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffb76b', endColorstr='#ff7f04', GradientType=1);
            /* IE6-9 fallback on horizontal gradient */
        }
    }
</style>
