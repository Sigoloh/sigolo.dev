<template>
<!-- eslint-disable max-len -->
  <div class="Home">
  <!--Versão desktop-->
  <mq-responsive target="lg+" class="desktopVersion">
    <div class="depth">
      <main>
        <main-box class="sideBar"/>
        <div class="content">
          <article>
            <h1>Me ajude a ir para a califórnia</h1>
            <div class="text">
              <p>
                Olá, meu nome é Augusto e eu preciso da sua ajuda para conseguir fazer o curso de Digital Companies & E-business Revolution na California State University, Northridge, Estados Unidos. Se quiser saber um pouco da minha história, é só seguir lendo os parágrafos abaixo.
              </p>
              <p>
                Como já disse meu nome, vou pular logo para a minha trajetória.
              </p>
              <p>
                Nasci na cidade de Patrocínio, interior de Minas Gerias e capital do café no cerrado, desde pequeno fui do tipo que prefere fazer seus próprios brinquedos com peças de outras quinquilharias quebradas.
              </p>
              <p>
                Com 8 anos, ganhei meu primeiro computador, com 512MB de RAM e sem acesso à internet, brincava de paint e gastava meu tempo com os saudosos CDs multijogos até que, um dia, chegou na minha casa a tão desejada internet à rádio, com seus 500Mb/s que era capaz de carregar vídeos do youtube e artigos da internet. Com essa revolução, surgiu em mim a vontade de criar meus próprios brinquedos virtuais e, com 10 anos, escrevi meu primeiro programa em C, que era nada mais que um script para fazer as finanças de uma casa.
              </p>
              <p>
                Depois desse primeiro contato, nunca mais abandonei a programação e depois de anos de estudos solitários, ingressei na Universidade Federal de Itajubá para fazer Engenharia da Computação, e foi por meio dessa universidade que tive o privilégio de receber uma bolsa parcial de estudos na califórnia para aprender mais sobre a revolução dos softwares como produtos.
              </p>
              <p>
                Como disse, a bolsa é parcial e, por isso, preciso da sua ajuda para conseguir realizar esse sonho e trazer de volta para o Brasil todo o conhecimento que eu adquirir durante essas semanas de curso. Se não puder ajudar com valores financeiros, compartilhe a vakinha com seus amigos, vamos fazer do nosso país uma potência tecnológica juntos!
              </p>
              <h1>Gostou da ideia?</h1>
              <p>
                Se quiser me ajudar fazendo uma doação, escolha a opção que melhor se encaixa para você utilizando o formulário abaixo e doe o quanto quiser!
              </p>
              <form action="" class="getDonationForm">
                <select name="donationForm" id="" v-model="state.donationOption" class="donationSelector">
                  <option value="pix" selected>Pix</option>
                  <option value="picpay">PicPay</option>
                  <option value="TEDDOC">TED/DOC</option>
                  <option value="Outro">Outro</option>
                </select>
              </form>
              <div class="donationWay" v-if="state.donationOption === 'pix'">
                <h3>Pix</h3>
                <p>Se quiser doar utilizando o Pix, use o QR code abaixo, ou copie a chave pix clicando <span class="keyButton" @click="copiar()">aqui</span></p>
                <img src="../assets/QRPix.png" alt="00020101021126580014br.gov.bcb.pix013650325e70-51d3-4ad6-b706-5fb5368ead395204000053039865802BR5924AUGUSTO DOS ANJOS SIGOLO6009SAO PAULO622905251G1NHK32GK14T7ZV1RDCYD14V63048899" class="qrCode">
              </div>
              <div class="donationWay" v-if="state.donationOption === 'picpay'">
                <h3>PicPay</h3>
                <p>Se quiser doar utilizando o Pix, use o QR code abaixo, ou clique <a href="https://app.picpay.com/user/augusto.sigolo" target="_blank"><span>aqui </span></a>para ir direto para o aplicativo</p>
                <img src="../assets/QRPicPay.png" alt="PicPay" class="qrCode">
              </div>
              <div class="donationWay" v-if="state.donationOption === 'TEDDOC'">
                <h3>TED/DOC</h3>
                <p>Se quiser doar usando os métodos de TED ou DOC, as informações da conta são essas:</p>
                <ul>
                  <li>Banco: 336 - Banco C6 S.A</li>
                  <li>Agência: 001</li>
                  <li>Conta: 15685433-3</li>
                  <li>CPF: Solicite no <a href="mailto:augustoasigolo@gmail.com"><span>email</span></a></li>
                </ul>
              </div>
              <div class="donationWay" v-if="state.donationOption === 'Outro'">
                <h3>Outras formas de ajudar</h3>
                <p>
                  Caso queira doar de outra forma, entre em contato comigo clicando <a href="mailto:augustoasigolo@gmail.com"><span>aqui </span></a> ou envie um email para augustoasigolo@gmail.com
                </p>
              </div>

              <p>
                Toda ajuda é bem-vinda, se quiser me ajudar compartilhando minha história e incentivando seus amigos a doarem qualquer quantia para fazer essa viagem possível, sinta-se convidado a de compartilhar o link desse site com eles, ou me seguir nas redes sociais como, Instangram, onde postarei atualizações do meu intercâmbio.
              </p>
              <ul>
                <li>Instagram: <a href="https://www.instagram.com/belchsigolo/">@belchsigolo</a></li>
              </ul>
            </div>
          </article>
        </div>
      </main>
    </div>
  </mq-responsive>
    <!--Versão mobile-->
  <mq-responsive target="md-" class="mobileVersion">
    <div class="mobileBody">
      <upper-menu class="mobileMenu"/>
        <main>
          <article>
            <h1>Me ajude a ir para a califórnia</h1>
            <div class="text">
              <p>
                Olá, meu nome é Augusto e eu preciso da sua ajuda para conseguir fazer o curso de Digital Companies & E-business Revolution na Universidade de La Verne, que fica na Califórnia, Estados Unidos. Se quiser saber um pouco da minha história, é só seguir lendo os parágrafos abaixo.
              </p>
              <p>
                Como já disse meu nome, vou pular logo para a minha trajetória.
              </p>
              <p>
                Nasci na cidade de Patrocínio, interior de Minas Gerias e capital do café no cerrado, desde pequeno fui do tipo que prefere fazer seus próprios brinquedos com peças de outras quinquilharias quebradas.
              </p>
              <p>
                Com 8 anos, ganhei meu primeiro computador, com 512MB de RAM e sem acesso à internet, brincava de paint e gastava meu tempo com os saudosos CDs multijogos até que, um dia, chegou na minha casa a tão desejada internet à rádio, com seus 500Mb/s que era capaz de carregar vídeos do youtube e artigos da internet. Com essa revolução, surgiu em mim a vontade de criar meus próprios brinquedos virtuais e, com 10 anos, escrevi meu primeiro programa em C, que era nada mais que um script para fazer as finanças de uma casa.
              </p>
              <p>
                Depois desse primeiro contato, nunca mais abandonei a programação e depois de anos de estudos solitários, ingressei na Universidade Federal de Itajubá para fazer Engenharia da Computação, e foi por meio dessa universidade que tive o privilégio de receber uma bolsa parcial de estudos na califórnia para aprender mais sobre a revolução dos softwares como produtos.
              </p>
              <p>
                Como disse, a bolsa é parcial e, por isso, preciso da sua ajuda para conseguir realizar esse sonho e trazer de volta para o Brasil todo o conhecimento que eu adquirir durante essas semanas de curso. Se não puder ajudar com valores financeiros, compartilhe a vakinha com seus amigos, vamos fazer do nosso país uma potência tecnológica juntos!
              </p>
              <h1>Gostou da ideia?</h1>
              <p>
                Se quiser me ajudar fazendo uma doação, escolha a opção que melhor se encaixa para você utilizando o formulário abaixo e doe o quanto quiser!
              </p>
              <form action="" class="getDonationForm">
                <select name="donationForm" class="donationSelector" id="" v-model="state.donationOption">
                  <option value="pix" selected>Pix</option>
                  <option value="picpay">PicPay</option>
                  <option value="TEDDOC">TED/DOC</option>
                  <option value="Outro">Outro</option>
                </select>
              </form>
              <div class="donationWay" v-if="state.donationOption === 'pix'">
                <h3>Pix</h3>
                <p>Se quiser doar utilizando o Pix, use o QR code abaixo, ou copie a chave pix clicando <span class="keyButton" @click="copiar()">aqui</span></p>
                <img src="../assets/QRPix.png" alt="00020101021126580014br.gov.bcb.pix013650325e70-51d3-4ad6-b706-5fb5368ead395204000053039865802BR5924AUGUSTO DOS ANJOS SIGOLO6009SAO PAULO622905251G1NHK32GK14T7ZV1RDCYD14V63048899" class="qrCodeMobile">
              </div>
              <div class="donationWay" v-if="state.donationOption === 'picpay'">
                <h3>PicPay</h3>
                <p>Se quiser doar utilizando o Pix, use o QR code abaixo, ou clique <a href="https://app.picpay.com/user/augusto.sigolo" target="_blank"><span>aqui </span></a>para ir direto para o aplicativo</p>
                <img src="../assets/QRPicPay.png" alt="PicPay" class="qrCodeMobile">
              </div>
              <div class="donationWay" v-if="state.donationOption === 'TEDDOC'">
                <h3>TED/DOC</h3>
                <p>Se quiser doar usando os métodos de TED ou DOC, as informações da conta são essas:</p>
                <ul>
                  <li>Banco: 336 - Banco C6 S.A</li>
                  <li>Agência: 001</li>
                  <li>Conta: 15685433-3</li>
                  <li>CPF: Solicite no <a href="mailto:augustoasigolo@gmail.com"><span>email</span></a></li>
                </ul>
              </div>
              <div class="donationWay" v-if="state.donationOption === 'Outro'">
                <h3>Outras formas de ajudar</h3>
                <p>
                  Caso queira doar de outra forma, entre em contato comigo clicando <a href="mailto:augustoasigolo@gmail.com"><span>aqui </span></a> ou envie um email para augustoasigolo@gmail.com
                </p>
              </div>

              <p>
                Toda ajuda é bem-vinda, se quiser me ajudar compartilhando minha história e incentivando seus amigos a doarem qualquer quantia para fazer essa viagem possível, sinta-se a vontade de compartilhar o link desse site com eles, ou me seguir nas redes sociais como, Instangram e TikTok, onde postarei atualizações do meu intercâmbio.
              </p>
              <ul>
                <li>Instagram: @belchsigolo</li>
              </ul>
            </div>
          </article>
        </main>
        <mobile-footer class="mobileFooter"></mobile-footer>
    </div>
   </mq-responsive>
  </div>
<!-- eslint-enable max-len -->
</template>

<script>
import { MqResponsive } from 'vue3-mq';
import { reactive } from 'vue';
import MainBox from '../components/GlobalComponents/MainBox.vue';
import UpperMenu from '../components/GlobalComponents/UpperMenu.vue';
import MobileFooter from '../components/GlobalComponents/MobileFooter.vue';

export default {
  setup() {
    const state = reactive({
      donationOption: 'pix',
    });

    async function copiar() {
      alert(window.isSecureContext, await navigator.clipboard);
      // await navigator.clipboard.writeText(
      // '00020101021126580014br.gov.bcb.pix
      // 013650325e70-51d3-4ad6-b706-5fb5368ead395204000053039865802BR5924
      // AUGUSTO DOS ANJOS SIGOLO6009SAO PAULO622905251G1NHK32GK14T7ZV1RDCYD14V63048899'
      // ).then(() => alert('Pix copiado!'));
    }

    return {
      state,
      copiar,
    };
  },
  name: 'Solucoes',
  components: {
    MainBox,
    MqResponsive,
    UpperMenu,
    MobileFooter,
  },
};
</script>

<style>
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

.desktopVersion .content article {
  text-align: justify;
  }

form .donationSelector {
  width: 100%;
  padding: 10px 10px 10px 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  border-radius: 10px;
}

.desktopVersion .content article h1{
  font-family: 'Montserrat', sans-serif;
  font-size: 4em;
  font-weight: bold;
  color:black;
  position: relative;
  z-index: 1;
}

.desktopVersion .content article li{
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2em;
}

.donationWay h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: medium;
  font-size: 2em;
}

.donationWay span{
  font-weight: bold;
  color: #5E23A9;
  cursor: pointer;
}

.donationWay a{
    text-decoration: none;
  }

.donationWay .qrCode{
  width: 10vw;
  margin-left: 40%;
}

.donationWay .qrCodeMobile{
  width: 10vh;
  margin-left: 40%;
}

.desktopVersion .content article h1::before{
  content: "";
  position: absolute;
  bottom: 10px;
  width: 100%;
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
  background: #420149;
  grid-area: 3 / 1 / 4 / 2;
}
</style>
