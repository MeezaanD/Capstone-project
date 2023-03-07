<template>
  <main>
    <section id="home">
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="3000">
            <img src="https://i.postimg.cc/RVRhr2QQ/man.jpg" class="img-fluid" style="width: 100%;height:90vh" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="https://i.postimg.cc/nczbz5f1/city.jpg" class="img-fluid" style="width: 100%;height:90vh"
              alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item"  data-bs-interval="3000">
            <img src="https://i.postimg.cc/jjC4nHdm/match.jpg" class="img-fluid" style="width: 100%;height:90vh"
              alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>

    <section id="about">
      <div class="container">
        <h2 class="text-center">About</h2>
      </div>
    </section>

    <section id="sample">

    </section>
    <section id="reach out">

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

#about {
  height: 90vh;
  background-color: blue;
}

</style>
