<template>
 <NavbarComponent/>
 <main></main>
 <FooterComponent/>
  <router-view/>
</template>

<script>

import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: { NavbarComponent, FooterComponent }
}
</script>


<style>

@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: 0;
}


</style>
