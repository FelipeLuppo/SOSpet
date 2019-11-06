<template>
 <div class="cartao">
    <!-- Required scripts -->
	<!-- src='@/images/cat3.jpg' -->

	 <!-- pet: String,
      medico: String,
      data: String,
      horario: String,
      endereco: String -->
    <img

	:src="require(`@/images/timetable.png`)"
      width="100"
      height="100"
      class="img-thumbnail float-left"
    />
    <div class="petcard-body">
		<div class="separado">
			    <span> Pet: {{pet}}</span>
				<span> Médico: {{medico}}</span>
		</div>
    <div class="row">
      <div class="col-md-6">Data: {{ data }}</div>
      <div class="col-md-6">Horario: {{ horario }}</div>
	  <div class="col-md-6">Local: {{ endereco }}</div>
    </div>
    </div>
    <div class="icones">
      <router-link to="/avaliar" class="icone">
       <img

	:src="require(`@/images/${avaliado}star.png`)"
      width="60"
      
      class="img-thumbnail float-left"
    />
      </router-link>
     
    </div>
  </div>
</template>


<style lang="scss" src="./ConsultaCard.scss" ></style>
<script src="./ConsultaCard.js" ></script>