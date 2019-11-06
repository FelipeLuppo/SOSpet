<template >

  <form class="formulario">

    <h1>Avalie Sua Consulta</h1>
	<div class="back">
    <div class="form-group" id='locked'>
      <label for="inputEmail4">Nome</label>
      <input
        type="text"
        class="form-control"
        id="nome"
        placeholder="Nome do pet"
      readonly>
    </div> 
    <div class="form-group">
      <label for="inputPassword4">Veterinario</label>
      <input
        type="text"
        class="form-control"
        id="vet"
        placeholder="Nome do Veterinario"
      readonly>
    </div>
    <div class="form-group">
      <label for="date">Data</label>
      <input
        type="date"
        class="form-control"
        id="data"
        placeholder="Nome do pet"
        />
    </div>
    <div class="form-group">
      <label for="nota">Nota</label>
      <select class="form-control" id="nota">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
    </select>
    </div>
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Comentarios</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <button type="submit" class="btn btn-primary" @click="$router.push('consultas')">
     Avaliar
    </button>
	</div>
  </form>
</template>

<script src="./AvaliarConsulta.js"></script>
<style lang="scss" src="./AvaliarConsulta.scss" ></style>

