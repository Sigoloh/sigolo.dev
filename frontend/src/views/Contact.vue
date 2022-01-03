<template>
  <div class="Home">
  <div class="depth">
    <main>
      <main-box class="sideBar"/>
      <div class="content">
        <section>
          <h1>Contato</h1>
          <h2>Como você pode falar comigo?</h2>
          <hr/>
          <p>As minhas redes sociais estão no rodapé da barra lateral.
          Caso queira um contato mais direto, use o formulário abaixo.</p>
          <contact-form/>
       </section>
      </div>
    </main>
  </div>
  </div>
</template>

<script>
import ContactForm from '../components/Contact/ContactForm.vue';
import MainBox from '../components/GlobalComponents/MainBox.vue';

export default {
  name: 'Home',
  components: {
    MainBox,
    ContactForm,
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

.content section p{
  text-align: justify;
  text-justify: inter-word;
  text-indent: 1.5em;
  margin-right: 50px;
  margin-left: 50px;
  color:#ECDBBA;
}

</style>
