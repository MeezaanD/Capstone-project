<template>
 <NavbarComponent/>
 <main></main>
  <router-view/>
</template>

<script>

import NavbarComponent from '@/components/NavbarComponent.vue';
export default {
  components: { NavbarComponent}
}
</script>


<style>

@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: 0;
  scroll-behavior: smooth;
}


</style>
