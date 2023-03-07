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

</style>
