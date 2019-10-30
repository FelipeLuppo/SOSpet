<template >
<div>
  
	  <div class=" formulario">
	<form>
 <h3> Cadastrar um novo pet</h3>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Nome</label>
      <input type="text" class="form-control" id="nome" placeholder="Nome do pet">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Idade</label>
      <input type="number" class="form-control" id="idade" placeholder="Idade em anos">
    </div>
  </div>
  <div class="form-group">




	<label for="">Foto</label>
   <input type="file" class="form-control-file form-control" accept="image/*" onchange="loadFile(event)">
<img id="output"/>




  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="especie">Espécie</label>
      <select id="especie" class="form-control">
		  <option value="" disabled selected>Selecione...</option>
        <option >Cachorro</option>
        <option>Gato</option>
		<option>Pássaro</option>
      </select>
    </div>
    <div class="form-group col-md-4">
      <label for="Raca">Raça</label>
     <input type="text" class="form-control" id="nome" placeholder="Nome do pet">
    </div>
    <div class="form-group col-md-2">
   <label for="sexo">Sexo</label>
      <select id="sexo" class="form-control">
		  <option value="" disabled selected>Selecione...</option>
        <option >Fêmea</option>
        <option>Macho</option>
      </select>
  </div>
  </div>

  <button type="submit" class="btn btn-primary"  @click="$router.push('pets')">Cadastrar</button>
</form>
</div>

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
	color:white!important;
}

.form-check-label{
	color:white!important;
}
</style>


<script>
export default {
  name: "FormPet",
  props: {
    especie: String
  }
};
</script>