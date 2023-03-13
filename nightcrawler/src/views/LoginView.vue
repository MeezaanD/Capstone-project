<template>
  <body>
    <section id="login">
        <div class="container-fluid h-100 bg-dark-subtle">
            <div style="padding-top:100px;">
              <center>
                <h4>Sign into your account</h4>
                <form>
                  <div class="form-row">
                    <div class="col-sm-6">
                      <input type="email" v-model="email" placeholder="Email Address" class="form-control my-3" required>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-sm-6">
                      <input type="password" v-model="userPass" placeholder="******" class="form-control" required>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-sm-6">
                      <button type="submit" class="btn1 mt-3 mb-5">Login</button>
                    </div>
                  </div>
                  <p>Forgot your password <ForgetPassword/></p>
                  <p>Don't have an account? <a href="/register">Register here</a></p>
                </form>
              </center>
            </div>
        </div>
    </section>
  </body>
  </template>
  
  <script>
  
  
  export default {
    components: {
      
    }
  }
  </script>
  <style scoped>
#login {
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
    background-color: black;;
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
  }
</style>