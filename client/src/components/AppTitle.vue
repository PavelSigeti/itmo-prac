<template>
  <div class="title-wrapper">
    <div class="title-container">
      <h1><slot /></h1>
      <img src="../../public/sign.svg" alt="sign" class="sign-img">
    </div>
  </div>
</template>

<script>
export default {
  name: "AppTitle",
}
</script>

<style scoped>

</style>
