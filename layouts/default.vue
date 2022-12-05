<template>
    <div>
        <Header/>
        <slot />
        <Footer/>
    </div>

</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        
        async productListSlider() {
            
        }
    },
    async mounted() {
        await this.productListSlider()
    }
}
</script>

<style>
    .so_newletter_oca_popup{
        display: none;
    }

    .popup_bg{
        display: none;
    }
</style>