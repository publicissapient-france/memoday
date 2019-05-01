<template>
    <div id="firebaseui-auth-container"></div>
</template>

<script>
    import auth from '../auth';
    import {mapGetters} from 'vuex';

    export default {
        name: 'auth',
        mounted() {
            auth.authForm('#firebaseui-auth-container');
        },
        computed: {
            ...mapGetters('app', ['user']),
        },
    };
</script>
