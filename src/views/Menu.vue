<template>
  <div class="world">
    <div class="sidenav">
	  <img src="@/images/logoazul2.png">
  
      <router-link to="pets">Pets</router-link>
      <!-- <router-link to="/addpet">Add Pet</router-link> -->
      <!-- <router-link to="/vets">Vets</router-link> -->
      <router-link to="/consultas">Consultas</router-link>
	  <!-- <router-link to="/login">Login</router-link> -->
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
html,
body,
.world,
.main {
  height: 100%;
  width: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*,
*:before,
*:after {
  box-sizing: border-box;
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

body {
  font-family: "Roboto";
  color: white;
  background-color: #cccccc !important;
  margin: 0;
  padding: 0;
  letter-spacing: 0.08rem;
  font-size: 18px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  //00a2e8
}
.world {
	position: relative;
  display: grid;
  grid-template-columns: 160px 1fr;
  justify-items: flex-start;
  align-items: flex-start;
  height: 100%;
}
.sidenav {
  height: 100%;
  width: 100%;
  //   background-color: #201e1e;
  background-image: linear-gradient(#201e1e, #423e3e);
  overflow-x: hidden;
  padding-top: 20px;
  img{
	  width: 110px;
	  height: 80px;
	margin-left: 25px;
  }
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: white;
  display: block;
}

.sidenav a:hover {
  color: #0682b8;
}

.main {
  padding: 10px;
  width: 100%;
  height: 100vh;
  overflow: auto;
}
input,
select {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 39px;
}
img {
  margin: 0;
}
h2, h1, h3 {
  margin: 0;
}
</style>
