<template>
<div class="">

 
	<FormSist especie="gato" />


</div>
</template>

<script>
// @ is an alias to /src
import FormSist from "@/components/FormSist/FormSist.vue";

export default {
  name: "sistespe",
  components: {
    FormSist
  },
  props:{
	  nome: String,
	  raca: String,
	  especie: String,
	  imgurl: String,
	  idade: String
  }
};
</script>

<style>
.corpo{
	height: 80%;
	max-height: 550px;
	overflow: scroll;
}
</style>