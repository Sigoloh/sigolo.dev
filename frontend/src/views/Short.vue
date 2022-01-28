<template>
  <h1>Olá, encurtador</h1>
</template>
<script>
import { useRoute } from 'vue-router';
import axios from 'axios';
import { onMounted } from 'vue';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

export default {
  setup() {
    const router = useRoute();

    async function getLinkFromAlias() {
      const response = await instance.get(`/link/get/${router.params.alias}`);
      return response;
    }

    onMounted(async () => {
      try {
        const { data, status } = await getLinkFromAlias();
        if (status === 200) {
          window.location.assign(`http://${data.url}`);
        }
      } catch (error) {
        window.location.href = '/404';
      }
    });

    return {
      getLinkFromAlias,
      onMounted,
    };
  },
};
</script>

<style>

</style>
