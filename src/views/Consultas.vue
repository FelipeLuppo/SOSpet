<template>
  <div class="pets">
    <Consultacard
      pet="Pixuleco"
      horario="10:30"
      medico="Carlos Macedo"
      endereco="Rua Coronel José Adolfo Oliveira, 2623"
      data="24/02/2018"
	  avaliado=""
    />
    <Consultacard
      pet="Tobby"
      horario="15:30"
      medico="Matheus Sudul"
      endereco="Rua Coronel José Adolfo Oliveira, 2623"
      data="25/03/2018"
	  avaliado=""
    />
    <Consultacard
      pet="Piu-Piu"
      horario="17:30"
      medico="Hiogo Cavalo"
      endereco="Rua Coronel José Adolfo Oliveira, 2623"
      data="24/06/2019"
	  avaliado="empty"
    />
	
    <Consultacard
      pet="Vicky"
      horario="09:30"
      medico="Andre Macedo"
      endereco="Rua Coronel José Adolfo Oliveira, 2623"
      data="24/11/2019"
	  avaliado="future"
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
