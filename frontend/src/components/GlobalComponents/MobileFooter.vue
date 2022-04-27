<template>
  <div class="mobileFooter">
    <footer>
      <a href="https://github.com/Sigoloh/" target="_blank"><img src="../../assets/github.png" alt="github icon"></a>
        <a href="https://twitter.com/comradsig" target="_blank"><img src="../../assets/twitter.png" alt="twitter icon"></a>
        <a href="https://www.linkedin.com/in/augusto-sigolo-66331b1b1/" target="_blank"><img src="../../assets/linkedin.png" alt="linkedin icon"></a>
    </footer>
  </div>
</template>

<script>
export default {

};
</script>

<style>
.mobileFooter footer{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  background: #1e1e1e;
  border-top: 1px solid #1e1e1e;
}

.mobileFooter footer a img{
  width: 10vw;
  height: 10vw;
  margin: 10px;
}

</style>
