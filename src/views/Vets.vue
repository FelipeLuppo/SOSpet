<template>
<div class="">
 
  <div  class="corpoconteudo">
	<Vetcard nome= "Pedro Gusso" crmv="10230-pr" especialidade="Figado" endereco="Rua Coronel José Adolfo Oliveira, 2623"/>
	<Vetcard nome= "Matheus Sudul" crmv="23493-pr" especialidade="Oncologista" endereco="Rua Benedito Batista Bueno,251"/>
	<Vetcard nome= "Carlos Enxada" crmv="12321-pr" especialidade="Gastrointestinal" endereco="Travessa Sales Teixeira,26"/>
	<Vetcard nome= "Hiogo Cavalo" crmv="12938-pr" especialidade="Cardiologista" endereco="Rua 23 de Junho,400"/>
  </div>
<!-- <div class="row">
	<div class="col-md-2 offset-md-5" style="margin-top:5px; color:white;">
		<router-link to="addpet">
				<img src="@/images/add.png" width="50" height="50" class="add">
				</router-link>
	</div>
</div> -->

</div>
</template>

<script>
// @ is an alias to /src
import Vetcard from "@/components/Vetcard.vue";

export default {
  name: "vets",
  components: {
    Vetcard
  }
};
</script>

<style>
.corpoconteudo{
	height: 80%;
	max-height: 550px;
	overflow: scroll;
}
.add{
	margin-top:10px;
	margin-left: 60px;
}
</style>