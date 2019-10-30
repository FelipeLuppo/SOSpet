<template>
  <div class="">
    <Consultacard
      pet="Pixuleco"
      horario="10:30"
      medico="Carlos Macedo"
      endereco="Rua Coronel José Adolfo Oliveira, 2623"
      data="24/02/2018"
    />
    <Consultacard
      pet="Tobby"
      horario="15:30"
      medico="Matheus Sudul"
      endereco="Rua Coronel José Adolfo Oliveira, 2623"
      data="24/02/2018"
    />
    <Consultacard
      pet="Piu-Piu"
      horario="17:0"
      medico="Hiogo Cavalo"
      endereco="Rua Coronel José Adolfo Oliveira, 2623"
      data="24/02/2018"
    />
    <Consultacard
      pet="Vicky"
      horario="09:30"
      medico="Andre Macedo"
      endereco="Rua Coronel José Adolfo Oliveira, 2623"
      data="24/02/2018"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Consultacard from "@/components/ConsultaCard/Consultacard.vue";

export default {
  name: "vets",
  components: {
    Consultacard
  }
};
</script>