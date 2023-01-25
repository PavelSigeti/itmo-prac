<template>
  <AppTitle>Glossary</AppTitle>

  <div class="glossary-wrapper">
    <div class="glossary">
      <AppWord v-for="(val, key) in words" :word="key" :value="val" />
    </div>
  </div>
</template>

<script>
import AppTitle from "../components/AppTitle.vue";
import AppWord from "../components/AppWord.vue";
import {onMounted, ref} from 'vue';

export default {
  name: "Glossary",
  components: {
    AppTitle, AppWord,
  },
  setup() {
    const words = ref();

    onMounted(async ()=> {
      const response = await fetch('http://localhost/api/glossary');
      words.value = await response.json();
    });

    return {
      words,
    }
  }
}
</script>

<style scoped>

</style>
