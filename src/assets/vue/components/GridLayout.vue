<template>
    <main>
        <div class="slice">
            <slot name="hero"></slot>
        </div>
        <div class="slice">
            <slot name="content"></slot>
        </div>
    </main>
</template>
<script>
    export default {};
</script>
<style lang="scss">
    @import '../../sass/globals.scss';

    main {
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: 25vh;
        margin: 0;
    }

    .slice {
        display: grid;
        align-items: start;
        grid-row: span 2;
    }
</style>
