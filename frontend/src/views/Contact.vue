<template>
  <div class="Home">
  <mq-responsive target="lg+" class="desktopVersion">
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
  </mq-responsive>
  <mq-responsive class="mobileVersion" target="md-">
    <div class="mobileBody">
      <upper-menu class="mobileMenu"/>
      <main>
        <section class="mobileContent">
          <h1>Contato</h1>
          <h2>Como você pode falar comigo?</h2>
          <hr>
          <div class="text">
            <p>As minhas redes sociais estão no rodapé da página.
            Caso queira um contato mais direto, use o formulário abaixo.</p>
          </div>
          <contact-form class="mobileForm"/>
        </section>
      </main>
      <mobile-footer/>
    </div>
  </mq-responsive>
  </div>
</template>

<script>
import { MqResponsive } from 'vue3-mq';
import ContactForm from '../components/Contact/ContactForm.vue';
import MainBox from '../components/GlobalComponents/MainBox.vue';
import UpperMenu from '../components/GlobalComponents/UpperMenu.vue';
import MobileFooter from '../components/GlobalComponents/MobileFooter.vue';

export default {
  name: 'Home',
  components: {
    MainBox,
    MqResponsive,
    UpperMenu,
    ContactForm,
    MobileFooter,
  },
};
</script>

<style>
</style>
