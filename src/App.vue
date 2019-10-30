<template>
<div>
	
  <div class="sidenav">
<router-link to="/">SOS pet</router-link> 

  <router-link to="pets" >Pets</router-link>
  <router-link to="/addpet" >Add Pet</router-link>
  <router-link to="/vets" >Vets</router-link>
   <router-link to="/consultas" >Consultas</router-link>
  </div>
  <div class="main">
	  <router-view /> 
  
  </div>
</div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
  font-family: Verdana;
  color: white;
  background-color: #cccccc !important;

  //00a2e8
}

.sidenav {
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
//   background-color: #201e1e;
   background-image: linear-gradient(#201e1e, #423e3e);
  overflow-x: hidden;
  padding-top: 20px;
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
  margin-left: 160px; /* Same as the width of the sidenav */
  //font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;

  
}



</style>
