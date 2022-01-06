<template>
  <div class="Home">
    <!--Versão pra computador-->
    <mq-responsive target="lg+" class="desktopVersion">
      <div class="depth">
        <main>
          <main-box class="sideBar"/>
            <div class="content">
              <section>
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
          </div>
        </main>
      </div>
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
.desktopVersion{
  max-width: calc(100vw - 30px);
  margin-top: 20px;
  margin-left: 10px;
}
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
  height: 100%;
}

.desktopVersion p {
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

.desktopVersion .content h1{
  font-family: 'Montserrat', sans-serif;
  font-size: 5em;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 400;
  color:#00FF2E;
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

.desktopVersion .content section .text p{
  text-indent: 1.5em;
  color: #ECDBBA;
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
  background: #420149;
  grid-area: 3 / 1 / 4 / 2;
}
</style>
