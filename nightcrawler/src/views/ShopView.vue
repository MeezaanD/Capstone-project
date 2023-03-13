<template>
  <main>
    <section id="shop-all">
      <div class="banner">
        <h1 class="shop-text">Shop Now</h1>
      </div>
      <div class="container">
        <div class="row align-items-end"><button class="btn"><i class="fa-solid fa-cart-shopping"></i></button></div>
        <div class="row">
          <div class="col-sm-4">
            <div class="buttons align-items-center" style="padding: 20px;display:grid; gap:10px;">
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-dark" type="submit">Search</button>
              </form>
              <button class="btn btn-dark w-100">Sort</button>
              <div class="dropdown">
                <button class="btn btn-dark dropdown-toggle w-100" type="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Filter By
                </button>
                <ul class="dropdown-menu bg-dark">
                  <li><a class="dropdown-item bg-dark text-light" href="#">Low-Maintenance</a></li>
                  <li><a class="dropdown-item bg-dark text-light" href="#">Medium-Maintenance</a></li>
                  <li><a class="dropdown-item bg-dark text-light" href="#">High-Maintenance</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-8" style="padding:0;margin:0">
            <div class="row row-cols-sm-4 gap-3" style="padding: 20px;justify-content:center">
              <div class="card" v-for="product in products" :key="product">
                <img :src="product.imgURL" alt="Avatar" class="image-fluid">
                <div class="overlay">
                  <div class="text" style="display:flex;justify-content:center;gap:5px">
                    <button class="btn btn-info">See More</button>
                    <button class="btn btn-danger">Add to Cart</button>
                  </div>
                </div>
                <h3>{{product.productName}}</h3>
                <p>{{product.productPrice}}</p>
              </div>
              <!-- <div class="card">
                <img src="https://i.postimg.cc/QNTpBbhR/battery-charger.png" alt="Avatar" class="image-fluid">
                <div class="overlay">
                  <div class="text" style="display:flex;justify-content:center;gap:5px">
                    <button class="btn btn-info">See More</button>
                    <button class="btn btn-danger">Add to Cart</button>
                  </div>
                </div>
                <h3>Battery Charger</h3>
                <p>R1000</p>
              </div>
              <div class="card">
                <img src="https://i.postimg.cc/QNTpBbhR/battery-charger.png" alt="Avatar" class="image-fluid">
                <div class="overlay">
                  <div class="text" style="display:flex;justify-content:center;gap:5px">
                    <button class="btn btn-info">See More</button>
                    <button class="btn btn-danger">Add to Cart</button>
                  </div>
                </div>
                <h3>Battery Charger</h3>
                <p>R1000</p>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <FooterComponent />
</template>
<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  components: { FooterComponent },
  setup() {
    const store = useStore()
    store.dispatch("getProducts")
    const products = computed(() => store.state.products)

    return { products }
  }
};
</script>
<style scoped>
#shop-all {
  background: rgb(199, 199, 199);
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

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(7px);
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: .5s ease;
}

.card:hover .overlay {
  height: 50%;
}

.text {
  display: flex;
  justify-content: center;
  gap: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.btn {
  width: 100px;
}
</style>