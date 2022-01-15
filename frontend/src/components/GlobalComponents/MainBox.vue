<template>
    <aside>
      <img src="../../assets/photo.jpg" alt="Minha foto" class="photo">
      <h2>Augusto Sigolo</h2>
      <h4>Desenvolvedor web</h4>
      <router-link class="asideButton" to="/">
       <div class="buttonContent">
          <img src="../../assets/codeIcon.png"/>
          <span>
            sigolo.me
          </span>
       </div>
      </router-link>
      <router-link class="asideButton" to="/solucoes">
       <div class="buttonContent">
          <img src="../../assets/solutionIcon.png"/>
          <span>
            Soluções
          </span>
       </div>
      </router-link>
      <router-link class="asideButton" to="/portfolio">
       <div class="buttonContent">
          <img src="../../assets/portfolio.png"/>
          <span>
            Portfólio
          </span>
       </div>
      </router-link>
      <router-link class="asideButton" to="/contato">
       <div class="buttonContent">
          <img src="../../assets/correio-de-contato.png"/>
          <span>
            Contato
          </span>
       </div>
      </router-link>
      <div class="asideFooter">
        <a href="https://github.com/Sigoloh/" target="_blank"><img src="../../assets/github.png" alt="github icon"></a>
        <a href="https://twitter.com/comradsig" target="_blank"><img src="../../assets/twitter.png" alt="twitter icon"></a>
        <a href="https://www.linkedin.com/in/augusto-sigolo-66331b1b1/" target="_blank"><img src="../../assets/linkedin.png" alt="linkedin icon"></a>
      </div>
    </aside>
</template>

<script>
export default {
};
</script>

<style>

aside{
  background: #420149;
  border-right: 1px double #925F98;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-content: center;
  position: static;
}

aside .photo{
  width: 8em;
  height: 8em;
  border-radius: 100px;
  align-self: center;
  margin-top: 20px;
}

aside h2{
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  color: #00DE28;
}

aside h4{
  font-family: 'Montserrat', sans-serif;
  padding-top: 0;
  margin-top: -25px;
  font-weight: 400;
  color: #00DE28;
}

aside .asideButton{
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

aside .asideButton .buttonContent{
  background: #2B9B3F;
  position: relative;
  bottom: 5px;
  width: 100%;
  left: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
}

aside .asideButton .buttonContent img {
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
}

aside .asideFooter{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  position: absolute;
  bottom: 0;
  left: 7vw;
}

aside .asideFooter a img{
  width: 1.5em;
  height: 1.5em;
  margin-left: 20px;
}

main{
  background: #420149;
  grid-area: 1 / 2 / 2 / 3;
}
</style>
