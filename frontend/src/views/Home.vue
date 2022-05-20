<template>
    <div class="home">
      <topFrame/>
      <banner/>
      <section>
        <sidebarLeft/>
        <mainContent/>
        <sidebarRight/>
      </section>
    </div>
</template>

<script>
    import TopFrame from '../components/TopFrame.vue'
    import Banner from '../components/Banner.vue'
    import SidebarLeft from '../components/SidebarLeft.vue'
    import MainContent from '../components/MainContent.vue'
    import SidebarRight from '../components/SidebarRight.vue'

    export default {
      name: 'Home',
      components: {
        'topFrame': TopFrame,
        'banner': Banner,
        'sidebarLeft': SidebarLeft,
        'mainContent': MainContent,
        'sidebarRight': SidebarRight
      }
    }
</script>

<style lang="scss" scoped>
    .home{
      width: 1080px;
      margin: auto;
    }

    section{
    /*   display: grid;
      grid-template-columns: 1fr 3fr 1fr; */
      display: flex;
    }
</style>