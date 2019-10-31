<template>
  <div class="pets">
    <Petcard nome="Pixuleco" raca="Sphynx" idade="3 anos" imgurl="dog1.jpeg" />
    <Petcard
      nome="Carlos"
      raca="Sphynx"
      idade="3 anos"
      imgurl="cat3.jpg"
    />
    <Petcard
      nome="Piu-Piu"
      raca="Sphynx"
      idade="3 anos"
      imgurl="bird1.jpeg"
    />
    <Petcard
      nome="Tobby"
      raca="Sphynx"
      idade="3 anos"
      imgurl="dog1.jpeg"
    />
	<Petcard
      nome="Tobby"
      raca="Sphynx"
      idade="3 anos"
      imgurl="bird1.jpeg"
    />
	<Petcard
      nome="Tobby"
      raca="Sphynx"
      idade="3 anos"
      imgurl="cat3.jpg"
    />
    <router-link to="addpet" class="button-plus">
      <img src="@/images/add.png" width="50" height="50" class="add" />
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import Petcard from "@/components/Petcard/Petcard.vue";

export default {
  name: "pets",
  components: {
    Petcard
  }
};
</script>
<style lang="scss">
.pets {
  position: relative;
  display: grid;
  gap: 15px;
  .button-plus {
    position: fixed;
    bottom: 20px;
    left: calc(50% + 80px);
	transform: translateX(-50% );
  }
}
</style>
