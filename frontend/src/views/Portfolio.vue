<template>
  <div class="Home">
  <mq-responsive target="lg+" class="desktopVersion">
    <div class="depth">
      <main>
        <main-box class="sideBar"/>
        <div class="content">
          <section>
            <h1>Portfólio</h1>
            <h2>As coisas que eu faço</h2>
            <hr/>
            <div class="text">
            <p>A ser implementado</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  </mq-responsive>
  <!--Versão mobile-->
  <mq-responsive class="mobileVersion" target="md-">
    <div class="mobileBody">
      <upper-menu class="mobileMenu"/>
      <main>
        <section class="mobileContent">
          <h1>Portfólio</h1>
          <h2>O que ja fiz?</h2>
          <hr/>
          <div class="text">
            <p>A ser implementado</p>
          </div>
        </section>
      </main>
      <mobile-footer></mobile-footer>
    </div>
  </mq-responsive>
  </div>
</template>

<script>
import { MqResponsive } from 'vue3-mq';
import MainBox from '../components/GlobalComponents/MainBox.vue';
import UpperMenu from '../components/GlobalComponents/UpperMenu.vue';
import MobileFooter from '../components/GlobalComponents/MobileFooter.vue';

export default {
  name: 'Portfolio',
  components: {
    MainBox,
    MqResponsive,
    UpperMenu,
    MobileFooter,
  },
};
</script>

<style>
.desktopVersion .depth{
  background: #925F98;
  position: static;
}
.desktopVersion main {
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

.desktopVersion .sideBar{
  grid-area: 1 / 1 / 2 / 2;
}

.desktopVersion .content{
  grid-area: 1 / 2 / 2 / 3;
}

p {
  font-family: 'Roboto', sans-serif;
}

.desktopVersion .content section{
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

.desktopVersion .content section h1{
  font-family: 'Montserrat', sans-serif;
  font-size: 100px;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 400;
  color: #00DE28;
}

.desktopVersion .content section h2{
  color: #2B9B3F;
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  font-weight: 300;
  margin-top: -5px;
}

.desktopVersion .content section hr{
  width: 65%;
  height: 5px;
  background: #9900A9;
  border: none;
  margin-top: -10px;
}

.desktopVersion .content section .text{
  width: 80%;
  align-self: center;
  justify-self: center;
  text-align: justify;
  text-justify: inter-word;
  color: #ECDBBA;
}

.desktopVersion .content section .text p{
  text-indent: 1.5em;

}
</style>
