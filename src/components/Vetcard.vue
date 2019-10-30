<template>
	<div class="cartao">
	

        <!-- Required scripts -->
		<div class="container">
		<div class="row" >
			<div class="col-md-3">
				 
			</div>
			<div class="col-md-6">
				 <div class="row">
					 <div class="col offset-md-3">
						<h3> {{nome}}</h3>
					</div>
				</div>
				<br>
				 <div class="row">
					 <div class="col-md-4">
						 CRMV: {{crmv}}
					</div>
					<div class="col-md-4">
						Especialidade: {{especialidade}} 	
					</div>
					<div class="col-md-4">
						Endereço: {{endereco}} 	
					</div>
				</div>
			</div>
			<div class="col-md-3">
				 <router-link to="/sistespe" >
				<img src="@/images/calendar.png" width="60" height="60" class="icone">
				</router-link>
				 <!-- <button type="button" class="btn btn-secondary">Editar</button><br><br>
				 <button type="button" class="btn btn-success">Diagnosticar</button> -->
			</div>
		</div>
			
		</div>



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

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.js"></script>
		
<script >
export default {
  name: "Vetcard",
  props: {
	nome: String,
	crmv: String, 
	especialidade: String,
	endereco: String,
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