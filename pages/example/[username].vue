<template>
    <div>
        {{ username }}
    </div>
</template>

<script>

export default {
    data() {
        return {
            username: ''
        }
    },
    methods: {
        init() {
            this.username = this.$route.params.username;
        }
    },
    mounted() {
        this.init();
    }
}

</script>