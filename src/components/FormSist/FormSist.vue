<template >
  <div>
    <div v-if="especie == 'gato'">
      <form class="formulario">
        <h1>O seu pet apresenta quais sintomas abaixo?</h1>
        <div class="back">
          <div class="form-grouppet">
			  <div class="check">
            <input class="form-check-input" type="checkbox" value id="agressividade" />
            <label class="form-check-label" for="agressividade">Agressividade</label>
			</div>
          </div>
          <div class="form-grouppet">
			  <div class="check">
            <input class="form-check-input" type="checkbox" value id="ansiedade" />
            <label class="form-check-label" for="ansiedade">Ansiedade</label>
			</div>
          </div>
          <div class="form-grouppet">
			  <div class="check">
            <input class="form-check-input" type="checkbox" value id="demencia" />
            <label class="form-check-label" for="demencia">Demencia</label>
			  </div>
          </div>
          <div class="form-grouppet">
			  <div class="check">
            <input class="form-check-input" type="checkbox" value id="depressao" />
            <label class="form-check-label" for="depressao">Depressão</label>
			</div>
          </div>
          <div class="form-grouppet">
			  <div class="check">
            <input class="form-check-input" type="checkbox" value id="desidratacao" />
            <label class="form-check-label" for="desidratacao">Desidatracao</label>
			</div>
          </div>
          <div class="form-grouppet">
			  <div class="check">
            <input class="form-check-input" type="checkbox" value id="diareria" />
            <label class="form-check-label" for="diareria">Diarreia</label>
			</div>
          </div>
          <div class="form-grouppet">
			  <div class="check">
            <input class="form-check-input" type="checkbox" value id="faltadear" />
            <label class="form-check-label" for="faltadear">Falta de ar</label>
			</div>
          </div>
          <div class="form-grouppet">
			  <div class="check">
            <input class="form-check-input" type="checkbox" value id="faltacoord" />
            <label class="form-check-label" for="faltacoord">Falta de coordenação dos membros</label>
			</div>
          </div>
          <div class="form-grouppet">
			  <div class="check">
            <input class="form-check-input" type="checkbox" value id="febre" />
            <label class="form-check-label" for="febre">Febre</label>
			</div>
          </div>
          <div class="form-grouppet">
			  <div class="check">
            <input class="form-check-input" type="checkbox" value id="fraquesa" />
            <label class="form-check-label" for="fraquesa">Fraqueza</label>
			</div>
          </div>
          <div class="form-grouppet">
			  <div class="check">
            <input class="form-check-input" type="checkbox" value id="paralisia" />
            <label class="form-check-label" for="paralisia">Paralisia</label>
			</div>
          </div>
          <div class="form-grouppet">
			  <div class="check">
            <input class="form-check-input" type="checkbox" value id="perdaapetite" />
            <label class="form-check-label" for="perdaapetite">Perda de apetite</label>
			</div>
          </div>
          <div class="form-grouppet">
			  <div class="check">
            <input class="form-check-input" type="checkbox" value id="perdapeso" />
            <label class="form-check-label" for="perdapeso">Perda de peso</label>
			</div>
          </div>
          <div class="form-grouppet">
			  <div class="check">
            <input class="form-check-input" type="checkbox" value id="salivacao" />
            <label class="form-check-label" for="salivacao">Salivação</label>
			</div>
          </div>
          <div class="form-grouppet">
			  <div class="check">
            <input class="form-check-input" type="checkbox" value id="vomito" />
            <label class="form-check-label" for="vomito">Vomito</label>
		</div>
          </div>
		
          <button type="submit" class="btn btn-primary" @click="$router.push('pets')">Calcular</button>

		
        </div>
      </form>
    </div>
    <div v-else-if="especie === 'cachorro'">
      <form class="formulario">
        <h1>O seu pet apresenta quais sintomas abaixo?</h1>
        <div class="back">
          <div class="form-grouppet">
			  <div class="check">
            <input class="form-check-input" type="checkbox" value id="agressividade" />
            <label class="form-check-label" for="agressividade">Agitação</label>
			</div>
          </div>
          <div class="form-grouppet">
			   <div class="check">
            <input class="form-check-input" type="checkbox" value id="ansiedade" />
            <label class="form-check-label" for="ansiedade">Agressividade</label>
			</div>
          </div>
          <div class="form-grouppet">
			   <div class="check">
            <input class="form-check-input" type="checkbox" value id="demencia" />
            <label class="form-check-label" for="demencia">Alteraçao de comportamento</label>
			</div>
          </div>
          <div class="form-grouppet">
			   <div class="check">
            <input class="form-check-input" type="checkbox" value id="depressao" />
            <label class="form-check-label" for="depressao">Cansaço</label>
			</div>
          </div>
          <div class="form-grouppet">
            <input class="form-check-input" type="checkbox" value id="desidratacao" />
            <label class="form-check-label" for="desidratacao">Depressão</label>
          </div>
          <div class="form-grouppet">
			   <div class="check">
            <input class="form-check-input" type="checkbox" value id="diareria" />
            <label class="form-check-label" for="diareria">Diarreia</label>
			</div>
          </div>
          <div class="form-grouppet">
			   <div class="check">
            <input class="form-check-input" type="checkbox" value id="faltadear" />
            <label class="form-check-label" for="faltadear">Dor</label>
			</div>
          </div>
          <div class="form-grouppet">
			   <div class="check">
            <input class="form-check-input" type="checkbox" value id="faltacoord" />
            <label class="form-check-label" for="faltacoord">Falta de ar</label>
			</div>
          </div>
          <div class="form-grouppet">
			   <div class="check">
            <input class="form-check-input" type="checkbox" value id="febre" />
            <label class="form-check-label" for="febre">Febre</label>
			</div>
          </div>
          <div class="form-grouppet">
			   <div class="check">
            <input class="form-check-input" type="checkbox" value id="fraquesa" />
            <label class="form-check-label" for="fraquesa">Paralisia</label>
			</div>
          </div>
          <div class="form-grouppet">
			   <div class="check">
            <input class="form-check-input" type="checkbox" value id="paralisia" />
            <label class="form-check-label" for="paralisia">Perda de apetite</label>
			</div>
          </div>
          <div class="form-grouppet">
			   <div class="check">
            <input class="form-check-input" type="checkbox" value id="perdapeso" />
            <label class="form-check-label" for="perdapeso">Perda de peso</label>
			</div>
          </div>
          <div class="form-grouppet">
			   <div class="check">
            <input class="form-check-input" type="checkbox" value id="salivacao" />
            <label class="form-check-label" for="salivacao">Salivação</label>
			</div>
          </div>
          <div class="form-grouppet">
			   <div class="check">
            <input class="form-check-input" type="checkbox" value id="vomito" />
            <label class="form-check-label" for="vomito">Vomito</label>
			</div>
          </div>
		
          <button type="submit" class="btn btn-primary" @click="$router.push('pets')">Calcular</button>
		
        </div>
      </form>
    </div>
    <div v-else-if="especie === 'passaro'">
    <form class="formulario">
        <h1>O seu pet apresenta quais sintomas abaixo?</h1>
        <div class="back">
          <div class="form-grouppet">
			  <div class="check">
            <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
                 <label class="form-check-label" for="defaultCheck1">Cansaço</label>
			</div>
          </div>
          <div class="form-grouppet">
			   <div class="check">
             <input class="form-check-input" type="checkbox" value id="defaultCheck2" />
                 <label class="form-check-label" for="defaultCheck1">Diarreia</label>
			</div>
          </div>
          <div class="form-grouppet">
			   <div class="check">
               <input class="form-check-input" type="checkbox" value id="defaultCheck2" />
                 <label class="form-check-label" for="defaultCheck1">Falta de apetite</label>
			</div>
          </div>
          <div class="form-grouppet">
			   <div class="check">
            <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
                 <label class="form-check-label" for="defaultCheck1">Falta de ar</label>
			</div>
          </div>
          <div class="form-grouppet">
			  <div class="check">
           <input class="form-check-input" type="checkbox" value id="defaultCheck2" />
            <label class="form-check-label" for="defaultCheck1">Mudanças no corpo</label>
			</div>
          </div>
          <div class="form-grouppet">
			   <div class="check">
                <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
                 <label class="form-check-label" for="defaultCheck1">Sede continua</label>
			</div>
          </div>
          <div class="form-grouppet">
			   <div class="check">
            <input class="form-check-input" type="checkbox" value id="defaultCheck2" />
            <label class="form-check-label" for="defaultCheck1">Vomitos</label>
			</div>
          </div>
         
       
		
          <button type="submit" class="btn btn-primary" ><router-link class="link" to="/vets">Calcular</router-link></button>
		
        </div>
      </form>
  </div>
  </div>
</template>

<style lang="scss" src="./FormSist.scss"></style>
<script src="./FormSist.js" ></script>