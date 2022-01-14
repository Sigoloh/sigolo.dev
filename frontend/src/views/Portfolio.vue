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
              <table>
                <tr>
                  <th>Nome</th>
                  <th>Descrição</th>
                  <th>Link</th>
                  <th>Atualizado</th>
                  <th>Criado</th>
                </tr>
                <tr v-for="repo in state.repos" :key="repo.id">
                  <td>{{repo[0].name}}</td>
                  <td>{{repo[0].description}}</td>
                  <td><a :href="repo[0].html_url" target="_blank">
                    <img src="../assets/github.png" alt="">
                  </a></td>
                  <td>{{state.date(repo[0].updated_at)}}</td>
                  <td>{{state.date(repo[0].created_at)}}</td>
                </tr>
              </table>
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
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import MainBox from '../components/GlobalComponents/MainBox.vue';
import UpperMenu from '../components/GlobalComponents/UpperMenu.vue';
import MobileFooter from '../components/GlobalComponents/MobileFooter.vue';

const instance = axios.create({
  baseURL: 'https://api.emailjs.com/api/v1.0/email',
});

export default {
  setup() {
    const state = reactive({
      repos: [],
      date: (dateToConvert) => {
        const formatedDate = dateToConvert.substring(0, 10);
        return `${formatedDate.substring(8, 10)}/${formatedDate.substring(5, 7)}/${formatedDate.substring(0, 4)}`;
      },
    });

    onMounted(async () => {
      const reposToBeShown = await instance.get('https://files.sigolo.me/public-files/sigolo.dev%20Conf/repos.json');
      const allRepos = await instance.get('https://api.github.com/users/Sigoloh/repos', {
        headers: {
          Accept: 'application/vnd.github.full+json',
        },
      });

      for (let i = 0; i < reposToBeShown.data.ReposToBeShown.length; i += 1) {
        const callback = (repo) => repo.name === reposToBeShown.data.ReposToBeShown[i]
          .name.toString();
        state.repos.push(allRepos.data.filter(callback));
      }

      console.log(state.repos);
    });

    return {
      state,
      onMounted,
    };
  },
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
  align-self: center;
  justify-self: center;
  text-align: justify;
  text-justify: inter-word;
  color: #ECDBBA;
  overflow-x: auto;
  overflow-y: auto;
}

.desktopVersion .content section .text table{
  max-width: 100%;
  border-collapse: collapse;
  border-radius: 10px;
  padding: 5px;
  text-align: center;
  font-size: 0.8em;
  font-family: 'Montserrat', sans-serif;
  scrollbar-width: thin;
  scrollbar-color: #9900A9 #191919;
}

.desktopVersion .content section .text table::-webkit-scrollbar{
  width: 12px;
}

.desktopVersion .content section .text table::-webkit-scrollbar-track{
  background: #191919;
}

.desktopVersion .content section .text table::-webkit-scrollbar-thumb{
  background-color: #9900A9;
  border-radius: 20px;
  border: 3px solid #191919;
}

.desktopVersion .content section .text table tr{
  height: 10vh;
  width: 10vw;
}
.desktopVersion .content section .text table tr:nth-child(odd){
  background: #4c4c4c;
}

.desktopVersion .content section .text table tr>td{
  padding: 10px;
}

.desktopVersion .content section .text table tr img{
  width: 40px;
  height: 40px;
}

.desktopVersion .content section .text table td:nth-child(2){
  padding-bottom: 5px;
}

.desktopVersion .content section .text table td:nth-child(4), td:nth-child(5){
  letter-spacing: 3px;
}

.desktopVersion .content section .text p{
  text-indent: 1.5em;

}
</style>
