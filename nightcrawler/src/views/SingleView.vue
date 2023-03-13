<template>
  <section id="single">
    <main>
      <div class="banner">
        <h1 class="shop-text">View Now</h1>
      </div>
      <div class="container">
        <div class="row align-items-end">
          <div class="col-sm-6">
            <img class="view" src="https://i.postimg.cc/QNTpBbhR/battery-charger.png" alt="">
          </div>
          <div class="col-sm-6" style="padding: 25px">
            <h3 class="text-start">
              <span>Product Name:</span> 
              Battery Charger</h3><br>
            <p class="text-start">
              <span>Product Description:</span> 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia veritatis molestiae veniam consequuntur nemo. Ex dignissimos molestias numquam quasi nobis velit commodi culpa explicabo, temporibus in iste, rerum minus cumque!</p><br>
            <p class="text-start">
              <span>Product Price:</span>
               R100</p>
            <a href="/shop" class="btn btn-dark align-items-md-start">Im interested</a>
          </div>
        </div>
      </div>
    </main>
  </section>
  <FooterComponent />
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: { FooterComponent },
};
</script>

<style scoped>
#single {
  height: auto;
  background: rgb(184, 184, 184);
}
.banner {
  background-color: black;
  height: 20vh;
  padding: 50px;
}

.shop-text {
  font-family: "Special Elite", cursive;
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

.container {
  padding: 50px;
}

.view {
  max-width: 100%;
  transition: all 0.3s;
  display: block;
  width: 100%;
  height: auto;
  transform: scale(1);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
}

.view:hover {
  transform: scale(1.1);
}

span {
  position: relative;
  font-family: 'Special Elite', cursive;    
  color: black;
  font-weight: 900;
  text-shadow: 2px 2px 4px rgb(134, 131, 131);
}

</style>