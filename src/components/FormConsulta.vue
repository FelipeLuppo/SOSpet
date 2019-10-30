<template>
<div>
	<h3> Agendar consulta com NOME </h3>

	<label> Escolha o dia</label>
	<input id="date" type="date">
	<label> Escolha o dia</label>
	<input id="hora" type="text">

</div>
</template>


<style>
.formulario{
	padding: 15px;
	padding-left: 30px;
	border:1px;
	border-color: white;
	border-radius: 15px;
	background-color: #3f888f;
	margin-top: 10px;
	padding-top: 10px;
	padding-bottom: 10px;
	height: 500px;
}

.form-check-label{
	color:white!important;
}
</style>


<script>
export default {
  name: "FormSist",
  props: {
    especie: String
  }
};
</script>