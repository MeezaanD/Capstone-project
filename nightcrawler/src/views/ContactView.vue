<template>
  <section id="contact">
    <main>
      <div class="banner">
        <h1 class="contact-text">Contact Page</h1>
      </div>

      <form action="https://formspree.io/f/mbjbywlp" method="post">
        <div class="background bg-dark-subtle">
          <div class="container">
            <div class="screen bg-dark-subtle">
              <div class="screen-body">
                <div class="screen-body-item left">
                  <div class="app-title">
                    WHO ARE WE?
                  </div>
                  <a href="/#about" class="btn btn-dark">About</a>
                  <div class="app-contact">
                    <h6 class="heading-text">Catch us on</h6>
                    <ul class="icons">
                      <a href="/" target="_blank">
                        <li class="list-items"><i class="fa-brands fa-instagram text-dark"></i></li>
                      </a>
                      <a href="/" target="_blank">
                        <li class="list-items"><i class="fa-brands fa-facebook text-dark"></i></li>
                      </a>
                      <a href="/" target="_blank">
                        <li class="list-items"><i class="fa-brands fa-twitter text-dark"></i></li>
                      </a>
                      <a href="/" target="_blank">
                        <li class="list-items"><i class="fa-brands fa-linkedin text-dark"></i></li>
                      </a>
                    </ul>
                  </div>
                </div>
                <div class="screen-body-item">
                  <div class="app-form">
                    <div class="app-form-group">
                      <input type="text" name="first-name" class="app-form-control bg-dark-subtle" required
                        placeholder="FIRST NAME">
                    </div>
                    <div class="app-form-group">
                      <input type="text" name="last-name" class="app-form-control bg-dark-subtle" required
                        placeholder="LAST NAME">
                    </div>
                    <div class="app-form-group">
                      <input type="email" name="email" class="app-form-control bg-dark-subtle" required
                        placeholder="EMAIL ADDRESS">
                    </div>
                    <div class="app-form-group">
                      <input type="number" name="number" class="app-form-control bg-dark-subtle" required
                        placeholder="CONTACT NO.">
                    </div>
                    <div class="app-form-group message">
                      <input type="text" name="message" class="app-form-control bg-dark-subtle" required
                        placeholder="MESSAGE">
                    </div>
                    <div class="app-form-group buttons">
                      <button type="submit" class="app-form-button">SUBMIT</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  </section>
  <FooterComponent/>
</template>
<script>
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  components: {
    FooterComponent
}
}
</script>

<style>
/* Banner */
.banner {
  background-color: black;
  height: 20vh;
  padding: 50px;
}

.contact-text {
  font-family: 'Special Elite', cursive;
  text-align: center;
  color: white;
  text-shadow: 2px 2px 4px rgb(134, 131, 131);
  position: relative;
}

.contact-text::after {
  content: "";
  position: absolute;
  display: block;
  left: 40%;
  bottom: -10px;
  width: 20%;
  height: 2px;
  background: rgb(255, 255, 255);
}

/* Other */
.background {
  display: flex;
  min-height: 70vh;
}

.container {
  flex: 0 1 700px;
  margin: auto;
}

/* Form */

button,
input,
.heading-text {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  letter-spacing: 1.4px;
}

.heading-text {
  font-family: 'Special Elite', cursive;
  color: black;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgb(134, 131, 131);
  text-align: center;
}

.app-title {
  font-family: 'Special Elite', cursive;
  color: black;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgb(134, 131, 131);
  text-align: center;
  margin-top: 95px;
}

.btn {
  margin-bottom: 20px;
  width: auto;
}

.screen {
  position: relative;
  border-radius: 15px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid white;
}

.screen:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 20px;
  right: 20px;
  bottom: 0;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, .4);
  z-index: -1;
}

.icons {
  list-style: none;
  display: flex;
  gap: 2rem;
  font-size: 15px;
}

.icons:a {
  color: black;
}

.screen-body {
  display: flex;
}

.screen-body-item {
  flex: 1;
  padding: 50px;
}

.screen-body-item.left {
  display: flex;
  flex-direction: column;
}

.app-title {
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 26px;
}

.app-contact {
  margin-top: auto;
  font-size: 8px;
  color: #888;
}

.app-form-group {
  margin-bottom: 15px;
}

.app-form-group.message {
  margin-top: 40px;
}

.app-form-group.buttons {
  margin-bottom: 0;
  text-align: right;
  color: black;
}

.app-form-control {
  width: 100%;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  font-family: 'Special Elite', cursive;
  color: black;
  font-size: 14px;
  text-transform: uppercase;
  outline: none;
  transition: border-color .2s;
}

.app-form-control::placeholder {
  font-family: 'Special Elite', cursive;
  color: black;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgb(134, 131, 131);
}

.app-form-control:focus {
  border-bottom-color: #ddd;
}

.app-form-button {
  background: none;
  border: 1px solid white;
  padding: 5px;
  color: black;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  font-family: 'Special Elite', cursive;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgb(134, 131, 131);
}

.app-form-button:hover {
  color: beige;
  background: black;
}

@media screen and (max-width: 300px) {
  .screen-body {
    flex-direction: column;
  }

  .screen-body-item.left {
    margin-bottom: 30px;
  }

  .app-title {
    flex-direction: row;
  }

  .app-title span {
    margin-right: 12px;
  }

  .app-title:after {
    display: none;
  }
}

@media screen and (max-width: 300px) {
  .screen-body {
    padding: 40px;
  }

  .screen-body-item {
    padding: 0;
  }
}
</style>