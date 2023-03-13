<template>
    <main>
        <section id="profile">

        </section>
    </main>
    <FooterComponent/>
</template>
  
<script>
import FooterComponent from '@/components/FooterComponent.vue';



export default {
    components: { FooterComponent }
}
</script>

<style scoped>

main {
    height: 100vh;
    background: rgb(184, 184, 184);
}
</style>