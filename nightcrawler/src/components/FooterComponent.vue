footer

<template>
  <footer class="footer">
    <div class="container">
      <div class="row text-start">
        <div class="col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/#home">Home</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#admin">Admin</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div class="col">
          <h4>Account</h4>
          <ul>
            <li><a href="/profile">My Account</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
          </ul>
        </div>
        <div class="col">
          <h4>Shopping</h4>
          <ul>
            <li><a href="/shop">Shop</a></li>
            <li><a href="single">Preview</a></li>
            <li><a href="/checkout">Checkout</a></li>
          </ul>
        </div>
        <div class="col">
          <h4>follow us</h4>
          <div class="social-links">
            <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="#" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
 </footer>
  
</template>
<script>
export default {
  components: {},
};
</script>
<style scoped>

.container{
	max-width: 1170px;
	margin:auto;
}
.row{
	display: flex;
	flex-wrap: wrap;
}
ul{
	list-style: none;
}
.footer{
	background-color: #24262b;
    padding: 70px 0;
}
.col{
   width: 25%;
   padding: 0 15px;
}
.col h4{
	font-size: 18px;
	color: white;
	text-transform: capitalize;
	margin-bottom: 35px;
	font-weight: 500;
	position: relative;
}
.col h4::before{
	content: '';
	position: absolute;
	left:0;
	bottom: -10px;
	background-color: red;
	height: 2px;
	box-sizing: border-box;
	width: 50px;
}
.col ul li:not(:last-child){
	margin-bottom: 10px;
}
.col ul li a{
	font-size: 16px;
	text-transform: capitalize;
	color: white;
	text-decoration: none;
	font-weight: 300;
	color: #bbbbbb;
	display: block;
	transition: all 0.3s ease;
}
.col ul li a:hover{
	color: white;
	padding-left: 8px;
}
.col .social-links a{
	display: inline-block;
	height: 40px;
	width: 40px;
	background-color: rgba(255,255,255,0.2);
	margin:0 10px 10px 0;
	text-align: center;
	line-height: 40px;
	border-radius: 50%;
	color: white;
	transition: all 0.5s ease;
}
.col .info a{
	display: block;
	height: 40px;
	width: 40px;
	background-color: rgba(255,255,255,0.2);
	text-align: center;
	line-height: 40px;
	border-radius: 50%;
	color: white;
	transition: all 0.5s ease;
}
.col .social-links a:hover{
	color: #24262b;
	background-color: white;
}

/*responsive*/
@media(max-width: 300px){
  .col{
    width: 50%;
    margin-bottom: 30px;
}
}
@media(max-width: 300px){
  .col{
    width: 100%;
}
}




</style>