<template >
  <form class="formulario">
    <h1>Cadastrar um novo pet</h1>
    <div class="form-group">
      <label for="inputEmail4">Nome</label>
      <input
        type="text"
        class="form-control"
        id="nome"
        placeholder="Nome do pet"
      />
    </div>
    <div class="form-group">
      <label for="inputPassword4">Idade</label>
      <input
        type="number"
        class="form-control"
        id="idade"
        placeholder="Idade em anos"
      />
    </div>
    <div class="form-group">
      <label for="especie">Espécie</label>
      <select id="especie" class="form-control">
        <option value disabled selected>Selecione...</option>
        <option>Cachorro</option>
        <option>Gato</option>
        <option>Pássaro</option>
      </select>
    </div>
    <div class="form-group">
      <label for="Raca">Raça</label>
      <input
        type="text"
        class="form-control"
        id="nome"
        placeholder="Nome do pet"
      />
    </div>
    <div class="form-group">
      <label for="sexo">Sexo</label>
      <select id="sexo" class="form-control">
        <option value disabled selected>Selecione...</option>
        <option>Fêmea</option>
        <option>Macho</option>
      </select>
    </div>
        <div class="form-group">
      <label for>Foto</label>
      <input
        type="file"
        class="form-control-file form-control"
        accept="image/*"
        onchange="loadFile(event)"
      />
      <img id="output" />
    </div>

    <button type="submit" class="btn btn-primary" @click="$router.push('pets')">
      Cadastrar
    </button>
  </form>
</template>

<script src="./FormPet.js"></script>
<style lang="scss" src="./FormPet.scss" ></style>

