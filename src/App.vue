<template>
  <div id="app">
    <b-navbar toggleable="sm" type="dark" variant="primary">
      <b-navbar-toggle target="nav-collapse"/>

      <b-collapse id="nav-collapse" class="justify-content-around" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/"><b-icon icon="person-fill"/>PROFILE</b-nav-item>
          <b-nav-item to="/skill"><b-icon icon="gem" style="width: 24px; height: 24px;"/>SKILL</b-nav-item>
          <b-nav-item to="/work"><b-icon icon="text-indent-left"/>WORK</b-nav-item>
          <b-nav-item to="/contact"><b-icon icon="mailbox2"/>CONTACT</b-nav-item>
        </b-navbar-nav>  
      </b-collapse>

      <b-nav-text right>2020年8月時点</b-nav-text>
    </b-navbar>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Noto Sans JP', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  font-family: 'Share Tech Mono', monospace;
  font-size: 22px;
  font-weight: bold;
}
h1 {
  font-family: 'Sora', sans-serif;
  margin: 30px;
}
h5 {
  margin: 15px;
  font-weight: bold;
}
</style>
