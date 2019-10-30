<template>
  <div class="">
    <Petcard nome="Pixuleco" raca="Sphynx" idade="3 anos" imgurl="cat3.jpg" />
    <Petcard
      nome="Carlos"
      raca="Sphynx"
      idade="3 anos"
      imgurl="images/cat3.jpg"
    />
    <Petcard
      nome="Piu-Piu"
      raca="Sphynx"
      idade="3 anos"
      imgurl="hello-world/src/images/bird1.jpegg"
    />
    <Petcard
      nome="Tobby"
      raca="Sphynx"
      idade="3 anos"
      imgurl="src/images/cat3.jpg"
    />
    <div class="row">
      <div class="col-md-2 offset-md-5">
        <router-link to="addpet">
          <img src="@/images/add.png" class="add" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "registar",
  components: {
    Petcard
  }
};
</script>