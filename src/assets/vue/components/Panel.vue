<template>
    <div class="mt-panel">
        <div class="row text-align-center align-content-center align-items-center">
            <div class="col-30 col--separator" v-if="iconName">
                <f7-icon :f7="iconName"></f7-icon>
            </div>
            <div class="col-70 text-align-left">
                <slot />
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            iconName: {
                type: String,
                required: false
            },
        },
    };
</script>
<style lang="scss">
    .mt-panel {
        padding: 5px;

        .col--separator {
            border-right: 1px solid silver;
        }
    }
</style>
