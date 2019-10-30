<template>
<div class="">
 
  <div  class="corpoconteudo">
	<Petcard nome= "Pixuleco" raca="Sphynx" idade="3 anos" imgurl="cat3.jpg"/>
	<Petcard nome= "Carlos" raca="Sphynx" idade="3 anos" imgurl="images/cat3.jpg"/>
	<Petcard nome= "Piu-Piu" raca="Sphynx" idade="3 anos" imgurl="hello-world/src/images/bird1.jpegg"/>
	<Petcard nome= "Tobby" raca="Sphynx" idade="3 anos" imgurl="src/images/cat3.jpg"/>
  </div>
<div class="row">
	<div class="col-md-2 offset-md-5" style="margin-top:5px; color:white;">
		<router-link to="addpet">
				<img src="@/images/add.png" width="50" height="50" class="add">
				</router-link>
	</div>
</div>

</div>
</template>

<script>


export default {
  name: "login",
  components: {
    Petcard
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