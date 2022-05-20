<template>
    <div class="post">
    <topFrame/>
    <banner/>
    <section>
        <sidebarLeft/>
        <postContent/>
    </section>
  </div>
</template>

<script>
  import TopFrame from '../components/TopFrame.vue'
  import Banner from '../components/Banner.vue'
  import SidebarLeft from '../components/SidebarLeft.vue'
  import PostContent from '../components/PostContent.vue'
  export default {
    name: 'About',
    components: {
        'topFrame': TopFrame,
        'banner': Banner,
        'sidebarLeft': SidebarLeft,
        'postContent': PostContent
    }
  }
</script>

<style lang="scss" scoped>
    .post{
        width: 1080px;
        margin: auto;
    }

    section{
        display: flex;
    }
</style>