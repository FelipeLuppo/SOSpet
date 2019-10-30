<template>
  <div class="cartao">
    {{ pet }}
    {{ data }}
    {{ horario }}
    {{ medico }}
    {{ endereco }}
    <router-link to="/sistespe">
      <img src="@/images/calendar.png" width="60" height="60" class="icone" />
    </router-link>
    <!-- <button type="button" class="btn btn-secondary">Editar</button><br><br>
    <button type="button" class="btn btn-success">Diagnosticar</button>-->

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
    </button>-->
  </div>
</template>


<style lang="scss" src="./ConsultaCard.scss" ></style>
<script src="./ConsultaCard.js" ></script>