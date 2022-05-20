<template>
    <header>
      <img id="logo" alt="Vue logo" src="../assets/logo.png">
      <nav id="nav">
        <router-link to="/">Annonces</router-link> |
        <router-link to="/login">Connexion</router-link>
      </nav>
    </header>
</template>

<script>
    export default {
      name:'TopFrame'
    }
</script>

<style lang="scss" scoped>
    header{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    #nav {
      padding: 30px;

      a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
          color: #42b983;
        }
      }
    }
</style>