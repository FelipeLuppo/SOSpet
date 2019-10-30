<template>
	<div class="cartao">
	

        <!-- Required scripts -->
		<div class="container">
		<div class="row" >
			<div class="col-md-3">
				 <img src="@/images/cat3.jpg" width="100" height="100" class="img-thumbnail float-left">
			</div>
			<div class="col-md-6">
				 <div class="row">
					 <div class="col offset-md-3">
						<h3> {{nome}}</h3>
					</div>
				</div>
				<br>
				 <div class="row">
					 <div class="col-md-6">
						 Raça: {{raca}}
					</div>
					<div class="col-md-6">
						Idade: {{idade}} 	
					</div>
				</div>
			</div>
			<div class="col-md-3">
				 <router-link to="/sistespe" >
				<img src="@/images/doc.png" width="60" height="60" class="icone">
				</router-link>
				<router-link :to="{ name: 'addpet', params: { id: nome}}">
				<img src="@/images/edit.png" width="60" height="60" class="icone">
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
  name: "Petcard",
  props: {
	nome: String,
	raca: String, 
	idade: String,
	imgurl: String,
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