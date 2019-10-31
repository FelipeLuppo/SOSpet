<template>
  <div class="pets">
    <Vetcard
      nome="Pedro Gusso"
      crmv="10230-pr"
      especialidade="Figado"
      endereco="Rua Coronel José Adolfo Oliveira, 2623"
	  nota="4.5"
    />
    <Vetcard
      nome="Matheus Sudul"
      crmv="23493-pr"
      especialidade="Oncologista"
      endereco="Rua Benedito Batista Bueno,251"
	  nota="4.2"
    />
    <Vetcard
      nome="Carlos Enxada"
      crmv="12321-pr"
      especialidade="Gastrointestinal"
      endereco="Travessa Sales Teixeira,26"
	  nota = "4.9"
    />
    <Vetcard
      nome="Hiogo Cavalo"
      crmv="12938-pr"
      especialidade="Cardiologista"
      endereco="Rua 23 de Junho,400"
	  nota="5.0"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Vetcard from "@/components/Vetcard/Vetcard.vue";

export default {
  name: "vets",
  components: {
    Vetcard
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