<template>
  <div class="cartao">
    <!-- Required scripts -->
    <img
      src="@/images/cat3.jpg"
      width="100"
      height="100"
      class="img-thumbnail float-left"
    />
    <div class="petcard-body">
    <h2>{{ nome }}</h2>
    <div class="row">
      <div class="col-md-6">Raça: {{ raca }}</div>
      <div class="col-md-6">Idade: {{ idade }}</div>
    </div>
    </div>
    <div class="icones">
      <router-link to="/sistespe" class="icone">
        <img src="@/images/doc.png" />
      </router-link>
      <router-link :to="{ name: 'addpet', params: { id: nome } }" class="icone">
        <img src="@/images/edit.png" />
      </router-link>
    </div>
  </div>
</template>

<script src="./Petcard.js"></script>
<style lang="scss" src="./Petcard.scss"></style>