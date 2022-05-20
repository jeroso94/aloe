<template>
  <div class="login">
    <topFrame/>
    <banner/>
    <section>
        <h1>Page de connexion à venir...</h1>
    </section>
  </div>
</template>

<script>
  import TopFrame from '../components/TopFrame.vue'
  import Banner from '../components/Banner.vue'
  export default {
    name: 'About',
    components: {
      'topFrame': TopFrame,
      'banner': Banner
    }
  }
</script>

<style lang="scss" scoped>
    .login{
      width: 1080px;
      margin: auto;
    }
</style>