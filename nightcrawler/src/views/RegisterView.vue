<template>
  <main>
    <section id="register">
      <div class="container-fluid h-100 bg-dark-subtle">
        <div style="padding-top:100px;">
          <center>
            <h4>Create an account</h4>
            <form>
              <div class="form-row">
                <div class="col-sm-6">
                  <input type="email" v-model="firstName" placeholder="First Name" class="form-control my-3" required>
                </div>
              </div>
              <div class="form-row">
                <div class="col-sm-6">
                  <input type="email" v-model="lastName" placeholder="Last Name" class="form-control my-3" required>
                </div>
              </div>
              <div class="form-row">
                <div class="col-sm-6">
                  <input type="email" v-model="gender" placeholder="Gender" class="form-control my-3" required>
                </div>
              </div>
              <div class="form-row">
                <div class="col-sm-6">
                  <input type="email" v-model="emailAddress" placeholder="Email Address" class="form-control my-3"
                    required>
                </div>
              </div>
              <div class="form-row">
                <div class="col-sm-6">
                  <input type="password" v-model="userPassword" placeholder="******" class="form-control" required>
                </div>
              </div>
              <div class="form-row">
                <div class="col-sm-6">
                  <input type="text" v-model="userProfile" placeholder="IMG URL" class="form-control my-3" required>
                </div>
              </div>
              <div class="form-row">
                <div class="col-sm-6">
                  <input type="date" v-model="firstName" class="form-control my-3" required>
                </div>
              </div>
              <div class="form-row">
                <div class="col-sm-6">
                  <button type="submit" class="btn1 mt-3 mb-5">Register</button>
                </div>
              </div>
              <p>Already have an account ? <a href="/login">login here</a></p>
            </form>
          </center>
        </div>
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

#register {
  height: 100vh;
}

h4 {
  font-family: 'Poppins', sans-serif;
  color: black;
  font-weight: bold;
}

.btn1 {
  border: none;
  outline: none;
  height: 50px;
  width: 100%;
  background-color: black;
  ;
  color: white;
  border: 1px solid white;
  border-radius: 4px;
  font-weight: bold;
}

.btn1:hover {
  background: white;
  border: 1px solid white;
  color: black;
  border: 1px solid black;
}</style>