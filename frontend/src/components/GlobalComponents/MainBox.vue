<template>
    <aside>
    <div class="asideContent">
      <img src="../../assets/photo.jpg" alt="Minha foto" class="photo">
      <h2>Augusto Sigolo</h2>
      <h4>Desenvolvedor</h4>
      <div class="buttons">
<router-link class="asideButton" to="/">
       <div class="buttonContent">
          <span>
            Home
          </span>
       </div>
      </router-link>
      <router-link class="asideButton" to="/projeto_california">
       <div class="buttonContent">
          <span>
            Projeto Califórnia
          </span>
       </div>
      </router-link>
      <router-link class="asideButton" to="/portfolio">
       <div class="buttonContent">
          <span>
            Projetos
          </span>
       </div>
      </router-link>
      <router-link class="asideButton" to="/contato">
       <div class="buttonContent">
          <span>
            Contato
          </span>
       </div>
      </router-link>
      </div>
      <div class="asideFooter">
        <a href="https://github.com/Sigoloh/" target="_blank"><img src="../../assets/github.png" alt="github icon"></a>
        <a href="https://www.linkedin.com/in/augusto-sigolo-66331b1b1/" target="_blank"><img src="../../assets/linkedin.png" alt="linkedin icon"></a>
        <a href="https://twitter.com/comradsig" target="_blank"><img src="../../assets/twitter.png" alt="twitter icon"></a>
      </div>
</div>
    </aside>
</template>

<script>
export default {
};
</script>

<style>

aside{
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-content: flex-start;
  padding: 5vh 4vw 0 4vw;
}
aside .asideContent {
  position: fixed;
  }
aside .photo{
  width: 8em;
  height: 8em;
  border-radius: 100px;
  align-self: left;
  margin-top: 20px;
}

aside h2{
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  text-align: left;
  font-size: 1.7em;
  color: #E5E5E5;
}

aside h4{
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  text-align: left;
  margin-top: -20px;
  color: #E5E5E5;
}

aside .buttons{
  margin-left: 20px;
}

aside .asideButton{
  color: #F3F3F3;
  font-size: 1.2em;
  text-decoration: none;
  margin-bottom: 20px;
  cursor: pointer;
  line-height: 35px;
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  margin-top: -5px;
  font-weight: 600;
}

aside .asideFooter {
  margin-top: 30px;
  margin-left: -10px;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
}
aside .asideFooter a{
  margin-left: 15px;
  }

aside .asideFooter a img{
  width: 24px;
}
</style>
