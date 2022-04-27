<template>
  <div class="cardBody">
    <img :src="image" alt="" class="projectImage"/>
    <h3 class="projectTitle">{{title}}</h3>
    <a :href="link" class="projectLink">
      <img src="../../assets/github.png" alt="Github icon"/>
    </a>
    <p class="projectDescription">{{description}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    image: String,
    link: String,
    description: String,
  },
};
</script>

<style>

</style>
