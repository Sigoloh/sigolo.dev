<template>
  <div class="mobileMenu">
      <nav>
        <div class="personal">
          <img src="../../assets/photo.jpg" alt="Minha foto" class="photo">
          <div class="textInfo">
            <h2>Augusto Sigolo</h2>
            <h4>Desenvolvedor web</h4>
          </div>
        </div>
        <div class="menuIconBox">
          <img
            v-if="!state.showMenu"
            src="../../assets/menuIconUnpressed.svg"
            alt="menu icon"
            class="menuIcon"
            @click="toggleMenu()"
          />
          <img
            v-else
            src="../../assets/menuIconPressed.svg"
            alt="menu icon"
            class="menuIcon"
            @click="toggleMenu()"
          />
        </div>
      </nav>
      <menu v-if="state.showMenu">
        <hr/>
        <div class="mobileMenuButtons">
          <a href="/">
            <div class="mobileMenuButton">
              sigolo.dev
            </div>
          </a>
          <a href="/solucoes">
            <div class="mobileMenuButton">
              Soluções
            </div>
          </a>
          <a href="/portfolio">
            <div class="mobileMenuButton">
              Portfólio
            </div>
          </a>
          <a href="/contato">
            <div class="mobileMenuButton">
              Contato
            </div>
          </a>
        </div>
      </menu>
    </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      showMenu: false,
    });

    function toggleMenu() {
      state.showMenu = !state.showMenu;
    }
    return {
      state,
      toggleMenu,
    };
  },
};
</script>

<style>

.mobileMenu{
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.mobileMenu nav {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  height: 100%;
  max-width: 100vw;
  padding: 0.7em;
  background: #420149;
}

.mobileMenu nav .photo{
  width: 63px;
  height: 63px;
  border-radius: 100px;
  margin-right: 1em;
  vertical-align: middle;
}

.mobileMenu nav .personal{
  display: flex;
  flex-direction: row;
  margin-right: 1em;
}

.mobileMenu nav .textInfo{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  vertical-align: middle;
  height: 100%;
}

.mobileMenu nav .textInfo h2 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 5vw;
  color: #00DE28;
  margin-bottom: -0.01em;
  line-height: 0px;
}

.mobileMenu nav .textInfo h4{
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  color: #2B9B3F;
  font-size: 5vw;
}

.mobileMenu nav .menuIconBox{
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.mobileMenu nav a .menuIconBox{
  width: 30px;
  height: 30px;
  vertical-align: middle;
}

.mobileMenu menu .mobileMenuButtons{
  width: 90%;
  align-self: center;
}

.mobileMenu menu{
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin-top: -10px;
  padding: 0;
  margin-bottom: -10px;
  background: #420149;
}

.mobileMenu menu hr{
  align-self: center;
  width: 70vw;
  border:none;
  height: 3px;
  background: #9900A9;
}

.mobileMenu menu a{
  background: #00FF2E;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  position: static;
  text-decoration: none;
  color: #420149;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}

.mobileMenu menu a .mobileMenuButton{
  background: #2B9B3F;
  position: relative;
  width: 100%;
  left: 5px;
  bottom: 5px;
  font-size: 2em;
}

.mobileMenu menu a:focus .mobileMenuButton{
  left: 0;
  bottom: 0;
}

.mobileMenu menu a:active{
  border: none;
}
</style>
