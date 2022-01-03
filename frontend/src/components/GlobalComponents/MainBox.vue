<template>
<div class="depth">
  <div class="globalBox">
    <aside>
      <img src="../../assets/photo.jpg" alt="Minha foto" class="photo">
      <h2>Augusto Sigolo</h2>
      <h4>Desenvolvedor web</h4>
      <a class="asideButton" href="#">
       <div class="buttonContent">
          <img src="../../assets/codeIcon.png"/>
          <span>
            sigolo.dev
          </span>
       </div>
      </a>
      <a class="asideButton" href="#">
       <div class="buttonContent">
          <img src="../../assets/solutionIcon.png"/>
          <span>
            Soluções
          </span>
       </div>
      </a>
      <a class="asideButton" href="#">
       <div class="buttonContent">
          <img src="../../assets/portfolio.png"/>
          <span>
            Portfólio
          </span>
       </div>
      </a>
      <a class="asideButton" href="#">
       <div class="buttonContent">
          <img src="../../assets/correio-de-contato.png"/>
          <span>
            Contato
          </span>
       </div>
      </a>
      <div class="asideFooter">
        <a href="https://github.com/Sigoloh/" target="_blank"><img src="../../assets/github.png" alt="github icon"></a>
        <a href="https://twitter.com/comradsig" target="_blank"><img src="../../assets/twitter.png" alt="twitter icon"></a>
        <a href="https://www.linkedin.com/in/augusto-sigolo-66331b1b1/" target="_blank"><img src="../../assets/linkedin.png" alt="linkedin icon"></a>
      </div>

    </aside>
    <main>
      <h1>Olá mundo no main</h1>
    </main>
  </div>
</div>
</template>

<script>
export default {
};
</script>

<style>

.depth{
  background: #925F98;
  position: static;
}

.globalBox{
  background: #420149;
  display: grid;
  position: relative;
  grid-template-columns: 4fr 16fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  box-shadow: 0px 12px 50px 4px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 12px 50px 4px rgba(0, 0, 0, 0.5);
  bottom: 10px;
  left: 10px;
  height: calc(100vh - 30px);
}

aside{
  background: #420149;
  grid-area: 1 / 1 / 2 / 2;
  border-right: 1px double #925F98;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-content: center;
}

aside .photo{
  width: 9vw;
  height: 9vw;
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
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 19.5vw;
}

aside .asideFooter a img{
  width: 1.5em;
  height: 1.5em;
  margin-left: 5px;
}

main{
  background: #420149;
  grid-area: 1 / 2 / 2 / 3;
}
</style>
