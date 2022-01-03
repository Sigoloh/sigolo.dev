<template>
  <div class="Home">
  <div class="depth">
    <main>
      <main-box class="sideBar"/>
      <div class="content">
        <section>
          <h1>Soluções</h1>
          <h2>Como eu posso ajudar você?</h2>
          <hr/>
          <div class="text">
            <p>
              Trabalho com desenvolvimentos de sites em wordpress,
              desenvolvimento de sistemas full stack e também com inteligência de dados.
            </p>
            <p>
              As formas como um site pode ajudar no crescimento da
              sua empresa ou dos seus negócios são inúmeras. Uma
              presença na internet, hoje, é mais importante que uma
              sala comercial ou um telefone de contato. Promovo
              soluções personalizadas que se alinham às suas necessidades,
              seja para um ecommerce, landing pages de produtos ou qualquer
              outra demanda para a internet.
            </p>
            <p>
            Caso tenha chegado até aqui, sugiro que veja a sessão
            Portfólio, onde listo alguns dos meus projetos
            </p>
          </div>
        </section>
      </div>
    </main>
  </div>
  </div>
</template>

<script>
import MainBox from '../components/GlobalComponents/MainBox.vue';

export default {
  name: 'Solucoes',
  components: {
    MainBox,
  },
};
</script>

<style>
.depth{
  background: #925F98;
  position: static;
}
main {
  display: grid;
  grid-template-columns: 4fr 10fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  position: relative;
  bottom: 10px;
  left: 10px;
  height: calc(100vh - 30px);
}

.sideBar{
  grid-area: 1 / 1 / 2 / 2;
}

.content{
  grid-area: 1 / 2 / 2 / 3;
}

p {
  font-family: 'Roboto', sans-serif;
}

.content section{
  background: #191919;
  margin-left: 20px;
  margin-top: 20px;
  margin-right: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: calc(100vh - 8% - 20px);
}

.content section h1{
  font-family: 'Montserrat', sans-serif;
  font-size: 100px;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 400;
  color: #00DE28;
}

.content section h2{
  color: #2B9B3F;
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  font-weight: 300;
  margin-top: -5px;
}

.content section hr{
  width: 65%;
  height: 5px;
  background: #9900A9;
  border: none;
  margin-top: -10px;
}

.content section .text{
  width: 80%;
  align-self: center;
  justify-self: center;
  text-align: justify;
  text-justify: inter-word;
}

.content section .text p{
  text-indent: 1.5em;
  color: #ECDBBA;

}
</style>
