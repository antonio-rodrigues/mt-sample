<template>
    <f7-page class="color-theme-orange mt-faq">
        <f7-navbar title="FAQS" back-link="Back" sliding></f7-navbar>
        <f7-block-title>
            <f7-icon class="mt-home--events-icon" f7="help" size="18px" color="blue"></f7-icon>
            WHAT IS: {{getFaqTitle()}}
        </f7-block-title>
        <f7-block  strong inset>
            <p>Every time the Tracker detects that enters or exits a defined fence, you will receive a notitification, an
                email or both, depending on your tracking settings.</p>
        </f7-block>
    </f7-page>
</template>
<script>
    export default {
        // props: {
        //     help: {
        //         type: String,
        //         required: true
        //     },
        // },
        methods: {
            getFaqTitle() {
                return this.$f7route.params.help.toUpperCase();
            }
        }
    };
</script>
<style lang="scss">
    @import '../../sass/globals.scss';

    .mt-faq {}
</style>
