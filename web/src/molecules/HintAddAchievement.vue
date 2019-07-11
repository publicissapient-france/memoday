<template>
  <div class="is-empty">
    <hero></hero>
    <p>You can add new achievement by typing it in bottom input field ✏️</p>
    <b-icon
      icon="download"
      id="ic-see"
      size="is-large"
      type="is-primary">️
    </b-icon>
  </div>
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import Vue from 'vue';
  import Hero from '@/atoms/Hero.vue';

  @Component({
    components: {
      Hero,
    },
  })
  export default class HintAddAchievement extends Vue {
  }
</script>

<style lang="scss" scoped>
  h2 {
    margin-top: 10px;
    margin-bottom: 15px;

    span {
      color: #ababab;
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
    }
  }

  p {
    margin: 20px 0 40px 0;
  }

  .is-empty {
    text-align: center;
  }
</style>
