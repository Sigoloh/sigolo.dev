<template>
  <div class="NotFound">
    <div class="message">
      <h1>Parece que você quer acessar uma pagina que não existe</h1>
      <hr/>
      <h2>Se você acha que isso é um erro, <router-link to="/contato">fale comigo</router-link></h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style>

.NotFound{
  background: #925F98;
  position: absolute;
  width: 80%;
  height: 100%;
  margin-left: 10vw;
}

.NotFound h1{
  color: black;
}

.NotFound h2{
  color: black;
}

.NotFound a{
  color: white;
  text-decoration: none;
}

</style>
