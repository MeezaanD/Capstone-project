<template>
  <main>
    <section id="shop-all">
      <div class="banner">
        <h1 class="shop-text">Shop Now</h1>
      </div>
    </section>
  </main>
</template>
  
<script>


export default {
  components: {

  }
}
</script>

<style scoped>
.banner {
  background-color: black;
  height: 20vh;
  padding: 50px;
}

.shop-text {
  font-family: 'Special Elite', cursive;
  text-align: center;
  color: white;
  text-shadow: 2px 2px 4px rgb(134, 131, 131);
  position: relative;
}

.shop-text::after {
  content: "";
  position: absolute;
  display: block;
  left: 43%;
  bottom: -10px;
  width: 14%;
  height: 2px;
  background: rgb(255, 255, 255);
}
</style>