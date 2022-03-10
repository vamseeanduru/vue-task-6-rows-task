<template>
  <div class="home">
    <h1>Welcome to Homepage</h1>
    <br />
    <p>Here are some Planets and Characters from Star Wars.</p>
    <nav>
      <router-link to="/planets"
        ><button class="btn btn-outline-success">Planets</button>
      </router-link>
      <router-link to="/characters">
        <button class="btn btn-outline-dark">Characters</button>
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";

.btn-outline-success {
  margin-right: 20px;
}
</style>
