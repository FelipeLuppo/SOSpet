<template>
  <div class="">
    <Vetcard
      nome="Pedro Gusso"
      crmv="10230-pr"
      especialidade="Figado"
      endereco="Rua Coronel José Adolfo Oliveira, 2623"
    />
    <Vetcard
      nome="Matheus Sudul"
      crmv="23493-pr"
      especialidade="Oncologista"
      endereco="Rua Benedito Batista Bueno,251"
    />
    <Vetcard
      nome="Carlos Enxada"
      crmv="12321-pr"
      especialidade="Gastrointestinal"
      endereco="Travessa Sales Teixeira,26"
    />
    <Vetcard
      nome="Hiogo Cavalo"
      crmv="12938-pr"
      especialidade="Cardiologista"
      endereco="Rua 23 de Junho,400"
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