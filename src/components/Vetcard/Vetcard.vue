<template>
  <div class="cartao">
    <!-- Required scripts -->
    <div class="container">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <div class="row">
            <div class="col offset-md-3">
              <h3>{{ nome }}</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">CRMV: {{ crmv }}</div>
            <div class="col-md-4">Especialidade: {{ especialidade }}</div>
            <div class="col-md-4">Endereço: {{ endereco }}</div>
          </div>
        </div>
        <div class="col-md-3">
          <router-link to="/sistespe">
            <img
              src="@/images/calendar.png"
              width="60"
              height="60"
              class="icone"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Vetcard.js"></script>
<style lang="scss" src="./Vetcard.scss"></style>