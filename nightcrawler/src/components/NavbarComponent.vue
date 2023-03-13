<template>
    <nav class="navbar navbar-expand-lg bg-dark-subtle" style="background-color: transparent; ">
        <div class="container-fluid">
            <a href="/"><img class="img-fluid" style="height: 4rem;" src="https://i.postimg.cc/65wLN7d3/nav.png" alt=""></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto" style="display: flex;">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Shop
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/shop">Shop All</a></li>
                            <li><a class="dropdown-item" href="/single">Single</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/admin">Admin</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contact">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/checkout">Checkout</a>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto" style="list-style: none;padding:30px;">
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                           Account
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/profile">My Account</a></li>
                            <li><a class="dropdown-item" href="/login">Login</a></li>
                            <li><a class="dropdown-item" href="/register">Register</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
}
</script>
<style scoped>
.navbar {
    box-shadow: 0 20px 30px rgba(0,0,0,0.2);
}
.nav-link {
    position: relative;
    font-family: 'Special Elite', cursive;    
    color: black;
    font-weight: 900;
    text-shadow: 2px 2px 4px rgb(134, 131, 131);
}
.dropdown-item {
    font-family: 'Tilt Warp', cursive;
}
.nav-link::after, .dropdown-item::after {
    content: '';
    opacity: 0;
    transition: all 0.2s;
    height: 2px;
    width: 100%;
    background-color: black;
    position: absolute;
    bottom: 0;
    left: 0;
}
.nav-link:hover::after {
    opacity: 1;
}
</style>