<template>
  <div class="Home">
  <mq-responsive target="lg+" class="desktopVersion">
    <div class="depth">
      <main>
        <main-box class="sideBar"/>
        <div class="content">
          <article>
            <h1>Portfólio</h1>
            <h2>As coisas que eu faço</h2>
            <hr/>
            <div class="cards">
           </div>
            <div class="text" v-if="state.repos.length != 0">
              <table class="projectsTable">
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
                    <img src="../assets/github.png" alt="" class="projectImg">
                  </a></td>
                  <td>{{state.date(repo[0].updated_at)}}</td>
                  <td>{{state.date(repo[0].created_at)}}</td>
                </tr>
              </table>
            </div>
            <div class="retrievingData" v-else>
            </div>
          </article>
        </div>
      </main>
    </div>
  </mq-responsive>
  <!--Versão mobile-->
  <mq-responsive class="mobileVersion" target="md-">
    <div class="mobileBody">
      <upper-menu class="mobileMenu"/>
      <main>
          <article>
            <h1>Portfólio</h1>
            <h2>As coisas que eu faço</h2>
            <hr/>
            <div class="cards">
           </div>
            <div class="text" v-if="state.repos.length != 0">
              <table class="projectsTable">
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
                    <img src="../assets/github.png" alt="" class="projectImg">
                  </a></td>
                  <td>{{state.date(repo[0].updated_at)}}</td>
                  <td>{{state.date(repo[0].created_at)}}</td>
                </tr>
              </table>
            </div>
            <div class="retrievingData" v-else>
            </div>
          </article>
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
      const now = new Date();
      if (now.getTime() - parseInt(localStorage.getItem('lasTimeGitRetrieved'), 10) <= 21600000) {
        console.log('Não ta na hora de mudar ainda não');
        state.repos = JSON.parse(
          localStorage.getItem('repos'),
        );
      } else {
        console.log('Ta na hora de mudar ja');
        localStorage.removeItem('repos');
        const reposToBeShown = await instance.get('https://gist.githubusercontent.com/Sigoloh/c5e1cdcfa7b8a2f45dd1db49a71c165c/raw/40d918a64535aba685a770bb7b63a0ec2f5ff98f/repos.json',
          {
            'Access-Control-Allow-Origin': '*',
          });
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
        const date = new Date();
        localStorage.setItem('repos', JSON.stringify(state.repos));
        localStorage.setItem('lasTimeGitRetrieved', date.getTime());
      }
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
.projectImg{
  width: 24px;
  }
.projectsTable{
  display: block;
  overflow-x: auto;
  white-space: nowrap;
}
.projectsTable tr:nth-child(odd){
  background: #C6C6C6;
}

.projectsTable{
  font-size: 1.2em;
}
</style>
