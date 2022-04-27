<template>
  <div class="Home">
    <!--Versão pra computador-->
    <mq-responsive target="lg+" class="desktopVersion">
      <main>
        <main-box class="sideBar"/>
          <div class="content">
            <article>
              <h1>Augusto Sigolo</h1>
                <p>  Eu sou um programador desde que me lembro. Meu primeiro contato
                     com programação
                     foi logo aos 10 anos,
                     quando vendo tutoriais de programação em C fazia programas de contabilidade
                     doméstica,
                     leitura de arquivos
                     e todos os outros scripts básico que todos fazemos.
                </p>
                <p>  Com o passar do tempo, me aprofundei nos estudos e hoje,
                     trabalho como desenvolvedor
                     backend em uma empresa do setor financeiro e também curso engenharia da
                     computação.
                </p>
                <p>
                     O objetivo desse site é servir de hub para todas aplicações
                     que desenvolvo no meu
                     tempo
                     livre e, de quebra, servir como uma espécie de currículo
                     virtual, já que aqui ficará
                     gravado
                     todo meu progresso nos estudos do desenvolvimento web.
                </p>
            </article>
          </div>

      </main>
    </mq-responsive>
    <!--Versão mobile-->
    <mq-responsive target="md-" class="mobileVersion">
      <div class="mobileBody">
        <upper-menu class="mobileMenu"/>
          <main>
            <section class="mobileContent">
              <h1>sigolo.me</h1>
              <h2>Um hub? Um currículo?</h2>
              <hr/>
              <div class="text">
                <p>  Eu sou um programador desde que me lembro. Meu primeiro contato
                     com programação
                     foi logo aos 10 anos,
                     quando vendo tutoriais de programação em C fazia programas de contabilidade
                     doméstica,
                     leitura de arquivos
                     e todos os outros scripts básico que todos fazemos.
                </p>
                <p>  Com o passar do tempo, me aprofundei nos estudos e hoje,
                     trabalho como desenvolvedor
                     backend em uma empresa do setor financeiro e também curso engenharia da
                     computação.
                </p>
                <p>
                     O objetivo desse site é servir de hub para todas aplicações
                     que desenvolvo no meu
                     tempo
                     livre e, de quebra, servir como uma espécie de currículo
                     virtual, já que aqui ficará
                     gravado
                     todo meu progresso nos estudos do desenvolvimento web.
                </p>
             </div>
            </section>
          </main>
          <mobile-footer class="mobileFooter"></mobile-footer>
      </div>
    </mq-responsive>
    </div>
    </template>

<script>
import { useMq, MqResponsive } from 'vue3-mq';
import MainBox from '../components/GlobalComponents/MainBox.vue';
import UpperMenu from '../components/GlobalComponents/UpperMenu.vue';
import MobileFooter from '../components/GlobalComponents/MobileFooter.vue';

export default {
  name: 'Home',
  components: {
    MainBox,
    MqResponsive,
    UpperMenu,
    MobileFooter,
  },
  setup() {
    const mq = useMq();
    return {
      mq,
    };
  },
};
</script>

<style>
.desktopVersion main {
display: grid;
         grid-template-columns: 3fr 10fr;
         grid-template-rows: 1fr;
         grid-column-gap: 0px;
         grid-row-gap: 0px;
min-height: 100vh;
}

.desktopVersion .sideBar{
  grid-area: 1 / 1 / 2 / 2;
}

.desktopVersion .content{
  grid-area: 1 / 2 / 2 / 3;
  background: #E1E1E1;
  padding-bottom: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  max-width: 100%;
}

.desktopVersion p {
  font-family: 'Roboto', sans-serif;
}

.desktopVersion .content article {
  text-align: justify;
  align-self: center;
  width: 70%;
}

.desktopVersion .content article h1{
  font-family: 'Montserrat', sans-serif;
  font-size: 5em;
  font-weight: bold;
  color:black;
  position: relative;
  z-index: 1;
}

main {
  background: #1E1E1E;
}

.desktopVersion .content article h1::before{
  content: "";
  position: absolute;
  bottom: 15px;
  width: 90%;
  height: 14px;
  background: rgb(255, 236, 66);
  z-index: -1;
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
}

.desktopVersion .content article p{
  text-indent: 1.5em;
  font-size: 1.2em;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  color: black;
}

.mobileVersion{
  max-width: 100vw;
  height: calc(100vh + 100%);
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(3, 100%);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

}
.mobileMenu{
  grid-area: 1 / 1 / 2 / 2;
}
.mobileVersion .mobileBody main{
  grid-area: 2 / 1 / 3 / 2;
  flex-direction: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.mobileVersion .mobileBody main .mobileContent{
  background: #191919;
  margin: 10px;
  border-radius: 10px;
  min-height: 100vh;
}

.mobileVersion .mobileBody main .mobileContent h1{
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  color: #00DE28;
  font-size: 2em;
  line-height: 1px;
}

.mobileVersion .mobileBody main .mobileContent h2{
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  color: #2B9B3F;
  font-size: 1em;
}

.mobileVersion .mobileBody main .mobileContent hr{
  margin-left: 20px;
  margin-right: 20px;
}

.mobileVersion .mobileBody main .mobileContent .text{
  margin-left: 20px;
  margin-right: 20px;
  text-align: justify;
  text-justify: inter-word;
  color: #ECDBBA;
}

.mobileFooter{
  grid-area: 3 / 1 / 4 / 2;
}
</style>
