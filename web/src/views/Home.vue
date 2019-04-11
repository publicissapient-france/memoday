<template>
    <div class="home">
       <h2 v-if="userDetail">Hello {{userDetail.displayName}}</h2>

        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>

    </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import HelloWorld from '@/components/HelloWorld.vue';
  import {mapGetters} from 'vuex';

  @Component({
    components: {
      HelloWorld,
    },
    computed: {
      ...mapGetters('app', ['userDetail']),
    },
  })
  export default class Home extends Vue {
  }
</script>
