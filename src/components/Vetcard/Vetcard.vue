<template>
 
    <!-- Required scripts -->
	<!-- crmv,especialidade,endereco,nome -->
     <div class="cartao">
    <!-- Required scripts -->
	<!-- src='@/images/cat3.jpg' -->
    <img

	:src="require(`@/images/doctor.png`)"
      width="100"
      height="100"
      class="img-thumbnail float-left"
    />
    <div class="petcard-body">
    <h2>{{ nome }} {{nota}} ⭐️</h2>
    <div class="row">
      <div class="col-md-6"><b>Especialidade:</b> {{ especialidade }}</div>
      <div class="col-md-6"><b>CRMV:</b> {{ crmv }}</div>
	  <div class="col-md-6"><b>Endereço:</b> {{ endereco }}</div>
    </div>
    </div>
    <div class="icones">
      
      <router-link :to="{ name: 'addpet', params: { id: nome } }" class="icone">
        <img src="@/images/calendar.png" />
      </router-link>
    </div>
  </div>
</template>

<script src="./Vetcard.js"></script>
<style lang="scss" src="./Vetcard.scss"></style>