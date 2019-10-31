<template >
  <div>
    <div v-if="especie == 'gato'" class>
      <div class="formulario">
        <h3 class="text-center">O NOME apresenta algum desses sintomas:</h3>
        <form>
          <div class="row">
            <div class="col offset-md-2">
              <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">Agressividade</label>
            </div>
            <div class="col">
              <input class="form-check-input" type="checkbox" value id="defaultCheck2" />
              <label class="form-check-label" for="defaultCheck1">Ansiedade</label>
            </div>
          </div>
          <div class="row">
            <div class="col offset-md-2">
              <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">Demencia</label>
            </div>
            <div class="col">
              <input class="form-check-input" type="checkbox" value id="defaultCheck2" />
              <label class="form-check-label" for="defaultCheck1">Depressão</label>
            </div>
          </div>
          <div class="row">
            <div class="col offset-md-2">
              <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">Desidatracao</label>
            </div>
            <div class="col">
              <input class="form-check-input" type="checkbox" value id="defaultCheck2" />
              <label class="form-check-label" for="defaultCheck1">Diarreia</label>
            </div>
          </div>
          <div class="row">
            <div class="col offset-md-2">
              <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">Falta de ar</label>
            </div>
            <div class="col">
              <input class="form-check-input" type="checkbox" value id="defaultCheck2" />
              <label class="form-check-label" for="defaultCheck1">Falta de coordenação dos membros</label>
            </div>
          </div>
          <div class="row">
            <div class="col offset-md-2">
              <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">Febre</label>
            </div>
            <div class="col">
              <input class="form-check-input" type="checkbox" value id="defaultCheck2" />
              <label class="form-check-label" for="defaultCheck1">Fraquesa</label>
            </div>
          </div>
          <div class="row">
            <div class="col offset-md-2">
              <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">Paralisia</label>
            </div>
            <div class="col">
              <input class="form-check-input" type="checkbox" value id="defaultCheck2" />
              <label class="form-check-label" for="defaultCheck1">PErda de apetite</label>
            </div>
          </div>
          <div class="row">
            <div class="col offset-md-2">
              <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">Perda de peso</label>
            </div>
            <div class="col">
              <input class="form-check-input" type="checkbox" value id="defaultCheck2" />
              <label class="form-check-label" for="defaultCheck1">Salivação</label>
            </div>
          </div>
          <div class="row">
            <div class="col offset-md-2">
              <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">Vomito</label>
            </div>
          </div>
        </form>

        <button type="submit" class="btn btn-light btn-lg btn-block">Calcular</button>
      </div>
    </div>
    <div v-else-if="especie === 'cachorro'">
      <div class="formulario">
        <h3 class="text-center">O NOME apresenta algum desses sintomas:</h3>
        <form>
          <div class="row">
            <div class="col offset-md-2">
              <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">Agitação</label>
            </div>
            <div class="col">
              <input class="form-check-input" type="checkbox" value id="defaultCheck2" />
              <label class="form-check-label" for="defaultCheck1">Agressividade</label>
            </div>
          </div>
          <div class="row">
            <div class="col offset-md-2">
              <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">Alteraçao de comportamento</label>
            </div>
            <div class="col">
              <input class="form-check-input" type="checkbox" value id="defaultCheck2" />
              <label class="form-check-label" for="defaultCheck1">Cansaço</label>
            </div>
          </div>
          <div class="row">
            <div class="col offset-md-2">
              <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">Depressão</label>
            </div>
            <div class="col">
              <input class="form-check-input" type="checkbox" value id="defaultCheck2" />
              <label class="form-check-label" for="defaultCheck1">Diarreia</label>
            </div>
          </div>
          <div class="row">
            <div class="col offset-md-2">
              <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">Dor</label>
            </div>
            <div class="col">
              <input class="form-check-input" type="checkbox" value id="defaultCheck2" />
              <label class="form-check-label" for="defaultCheck1">Falta de ar</label>
            </div>
          </div>
          <div class="row">
            <div class="col offset-md-2">
              <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">Febre</label>
            </div>
            <div class="col">
              <input class="form-check-input" type="checkbox" value id="defaultCheck2" />
              <label class="form-check-label" for="defaultCheck1">Paralisia</label>
            </div>
          </div>
          <div class="row">
            <div class="col offset-md-2">
              <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">Perda de apetite</label>
            </div>
            <div class="col">
              <input class="form-check-input" type="checkbox" value id="defaultCheck2" />
              <label class="form-check-label" for="defaultCheck1">Perda de peso</label>
            </div>
          </div>
          <div class="row">
            <div class="col offset-md-2">
              <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">Salivação</label>
            </div>
            <div class="col">
              <input class="form-check-input" type="checkbox" value id="defaultCheck2" />
              <label class="form-check-label" for="defaultCheck1">Vomito</label>
            </div>
          </div>
        </form>

        <button type="submit" class="btn btn-light btn-lg btn-block">Calcular</button>
      </div>
    </div>
    <div v-else-if="especie === 'passaro'">
      <div class="formulario">
        <h3 class="text-center">O NOME apresenta algum desses sintomas:</h3>

        <form>
          <div class="row">
            <div class="col offset-md-2">
              <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">Cansaço</label>
            </div>
            <div class="col">
              <input class="form-check-input" type="checkbox" value id="defaultCheck2" />
              <label class="form-check-label" for="defaultCheck1">Diarreia</label>
            </div>
          </div>
          <div class="row">
            <div class="col offset-md-2">
              <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">Dificuldade para comer</label>
            </div>
            <div class="col">
              <input class="form-check-input" type="checkbox" value id="defaultCheck2" />
              <label class="form-check-label" for="defaultCheck1">Falta de apetite</label>
            </div>
          </div>
          <div class="row">
            <div class="col offset-md-2">
              <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">Falta de ar</label>
            </div>
            <div class="col">
              <input class="form-check-input" type="checkbox" value id="defaultCheck2" />
              <label class="form-check-label" for="defaultCheck1">Mudanças no corpo</label>
            </div>
          </div>
          <div class="row">
            <div class="col offset-md-2">
              <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1">Sede continua</label>
            </div>
            <div class="col">
              <input class="form-check-input" type="checkbox" value id="defaultCheck2" />
              <label class="form-check-label" for="defaultCheck1">Vomitos</label>
            </div>
          </div>
        </form>

        <button type="submit" class="btn btn-light btn-lg btn-block">Calcular</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./FormSist.scss"></style>
<script src="./FormSist.js" ></script>