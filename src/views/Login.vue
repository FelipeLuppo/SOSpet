<template>
  <form class="formulario">
    
    <div class="ponto">
		<div class="imagem">
		<img src="@/images/logoazul2.png" width="150"> 
		</div>
      <div class="form-group">
        <label for="inputEmail4">Usuário</label>
        <input type="email" class="form-control" id="email" placeholder="Usuário" />
      </div>
      <div class="form-group">
        <label for="inputPassword4">Senha</label>
        <input type="password" class="form-control" id="senha" placeholder="Senha" />
        <div class="botoes">

			<router-link class="link" to="pets">

          <button type="submit" class="btn btn-primary" >Entrar</button>
			</router-link>
          <router-link class="link" to="registrar">Registar-se</router-link>
        </div>
		
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "login",
  components: {}
};
</script>

<style lang="scss">
.corpo {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(#2d666b, #41acb6);

  padding: 15px;
  border: 1px;
  border-color: white;
  border-radius: 15px;
  background-color: #3f888f;
  color: white;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  align-items: center;
  justify-items: center;
  h3 {
    grid-column: 1/-1;
  }
}
.imagem{
	display: grid;
	justify-content: center;
	align-items: center;
}
.formulario {
  padding: 15px;
  border: 1px;
  border-color: white;
  border-radius: 15px;
  background-image: linear-gradient(#2d666b, #41acb6);
  //   background-image: url(https://www.dazzlejunction.com/backgrounds/animals/cats-collage.jpg); background-repeat:repeat; background-attachment: fixed;
  color: white;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  align-items: center;
  justify-items: center;
  h3 {
    grid-column: 1/-1;
  }
 	button[type="submit"] {
        grid-column: -1/-2;
        justify-self: flex-start;
        align-self: flex-start;
        padding: 1%;
        color: #fff;
        background-color: #3f888f;
        border: 1px solid transparent;
        border-radius: .25rem;
        font-weight: 400;
        font-size: 1.3rem;
    }
  .ponto {
    width: 60%;
    background-color: white;
    padding: 15px;
    color: rgb(32, 28, 28);
    display: grid;
    gap: 15px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    min-width: 50%;
    justify-content: left;
    align-items: left;
    label {
      margin-bottom: 15px;
    }
    button {
      margin-top: 10px;
      width: 100px;

      height: 40px;
    }
    .botoes {
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        text-decoration: none;
        font-size: 80%;
        color: black;
        display: block;
      }

      a:hover {
        color: #0682b8;
      }
    }
    .link {
      font-size: 90%;
      font-weight: 100;
    }
  }
}
.login {
  background-color: #fff;
  height: 50%;
  width: 50%;
  display: flex;
  border-radius: 15px;
}
</style>

