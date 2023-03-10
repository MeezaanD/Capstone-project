<template>
  <main>
    <section id="home">
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="3000">
            <img src="https://i.postimg.cc/3RggZmPj/bulb.jpg" class="img-fluid" style="width: 100%;max-height:90vh" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="https://i.postimg.cc/nczbz5f1/city.jpg" class="img-fluid" style="width: 100%;max-height:90vh"
              alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item"  data-bs-interval="3000">
            <img src="https://i.postimg.cc/jjC4nHdm/match.jpg" class="img-fluid" style="width: 100%;max-height:90vh"
              alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev">
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
          data-bs-slide="next">
        </button>
      </div>
    </section>
    <section id="about">
      <div class="about-c bg-dark-subtle">
        <div class="container-shopping">
            <h1 class="about-text">About Us</h1>
          </div>
        <p class="content">Nightcrawler is a gadget selling company that aims to combat power outages in South Africa. Our mission is to provide affordable, efficient, and sustainable solutions to the growing problem of power outages in the country. We have carefully designed our products to cater to the needs of our customers, while also being environmentally conscious. Nightcrawler is committed to providing sustainable and affordable solutions to 
          power outages in South Africa. Our products are designed with the needs of our 
          customers in mind, and we are confident that we will be able to meet the growing 
          demand for our products. We look forward to serving our customers and 
          contributing to the development of a sustainable future for South Africa.</p>
        <div class="container text-center">
          <div class="row align-items-center">
            <div class="col-sm-4">
              <i class="fa-solid fa-truck-fast"></i>
              <h4>Free Shipping</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In earum placeat nobis perferendis! Animi, facilis, laudantium aspernatur eos optio, suscipit numquam odio repellendus maiores perspiciatis quia incidunt quisquam inventore debitis.</p>
            </div>
            <div class="col-sm-4">
              <i class="fa-solid fa-hand-holding-dollar"></i>
              <h4>100% Money back</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In earum placeat nobis perferendis! Animi, facilis, laudantium aspernatur eos optio, suscipit numquam odio repellendus maiores perspiciatis quia incidunt quisquam inventore debitis.</p>
            </div>
            <div class="col-sm-4">
              <i class="fa-solid fa-headset"></i>
              <h4>Online Support</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In earum placeat nobis perferendis! Animi, facilis, laudantium aspernatur eos optio, suscipit numquam odio repellendus maiores perspiciatis quia incidunt quisquam inventore debitis.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="sample">
      <div class="product-c bg-dark-subtle">
        <h1 class="product-text">Featured Products</h1>
        <p class="sub-product">These are some of our big selling products on the market</p>
        <div class="container text-center">
          <div class="row align-items-center">
            <div class="col-sm-4">
              <div class="image-box">
                <img class="img-fluid" src="https://i.postimg.cc/QNTpBbhR/battery-charger.png" >
              </div>
            </div>
            <div class="col-sm-4">
              <div class="image-box">
                <img class="img-fluid" src="https://i.postimg.cc/g01xdCXr/P-generator.png" >
              </div>
            </div>
            <div class="col-sm-4">
              <div class="image-box">
                <img class="img-fluid" src="https://i.postimg.cc/7ZN5HgRb/UPS.png" >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="reach out">
    </section>
  </main>
  <FooterComponent/>
</template>
<script>
import FooterComponent from '@/components/FooterComponent.vue';
export default {
  components: { FooterComponent}
}
</script>
<style scoped>
#about {
  height: auto;
}
.about-c, .product-c {
  padding: 0;
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
}
.container-shopping {
  position: relative;
  width: 100%;
  margin: 0 auto;
}
.about-text, .product-text, .sub-product {
  font-family: 'Special Elite', cursive;
  margin-top: 15px;
  text-align: center;
  color: black;
  text-shadow: 2px 2px 4px rgb(134, 131, 131);
  position: relative;
}

.content, .sub-product {
  font-family: 'Tilt Warp', cursive;
  margin-top: 15px;
  text-align: center;
  color: black;
  font-size: larger;
  text-shadow: 2px 2px 4px  rgb(134, 131, 131);
  position: relative;
  padding: 50px;
}
.about-text::after {
  content: "";
  position: absolute;
  display: block;
  left: 43%;
  bottom: -10px;
  width: 14%;
  height: 2px;
  background: rgb(0, 0, 0);
}
.product-text::after {
  content: "";
  position: absolute;
  display: block;
  left: 35%;
  bottom: -10px;
  width: 30%;
  height: 2px;
  background: rgb(0, 0, 0);
}
.image-box {
  position: relative;
  margin: auto;
  overflow: hidden;
  width: auto;
  padding: 30px;
}
.image-box img {
  max-width: 100%;
  transition: all 0.3s;
  display: block;
  width: 100%;
  height: auto;
  transform: scale(1);
}
.image-box:hover img {
  transform: scale(1.1);
}
</style>