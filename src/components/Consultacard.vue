<template>
	<div class="cartao">
		{{pet}}
		{{data}}
		{{horario}}
		{{medico}}
		{{endereco}}
			
				 <router-link to="/sistespe" >
				<img src="@/images/calendar.png" width="60" height="60" class="icone">
				</router-link>
				 <!-- <button type="button" class="btn btn-secondary">Editar</button><br><br>
				 <button type="button" class="btn btn-success">Diagnosticar</button> -->
	


<!--       
		<h3>
			{{nome}}
		</h3>
		<p>
			{{raca}}
			<br>
			{{idade}}
		</p>
		<button class="btn btn-success">
			Diagnosticar
		</button>
		<button>
			Editar
		</button> -->

	</div>


	
</template>

<script >
export default {
  name: "Consultacard",
  props: {
	pet: String,
	medico: String, 
	data: String,
	horario: String,
	endereco: String
  }
};
</script>

<style lang = "scss">
.cartao{
	border:1px;
	border-color: white;
	border-radius: 15px;
	/* background-color: #3f888f; */
	 background-image: linear-gradient(to left, #41acb6 , #2d666b);
/* 41acb6 */
/* 3f888f */
	margin-top: 10px;
	padding-top: 20px;
	padding-bottom: 15px;
	padding-left: 20px;
	color:white !important;
}
.icone{
	margin-left:20px;
	margin-right: 20px;
	margin-top: 20px;
}

</style>