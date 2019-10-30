<template>
  <div class="pets">
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
    left: 50%;
	transform: translateX(calc(-50%) + 160px + 15px);
  }
}
</style>
