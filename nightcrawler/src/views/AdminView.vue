<template>
    <main>
        <section id="admin">
          <div class="banner">
            <h1 class="admin-text">Administration</h1>
          </div>
          <div class="container">

            <h2 class="users">USERS</h2>
            <!-- USER TABLE STARTS -->
            <table class="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Gender</th>
                  <th>EmailAddress</th>
                  <th>Password</th>
                  <th>Image</th>
                  <th>Date</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <td data-label="ID">1</td>
                <td data-label="FirstName">Meezaan</td>
                <td data-label="LastName">Davids</td>
                <td data-label="Gender">Male</td>
                <td data-label="EmailAddress">meezaan@gmail.com</td>
                <td data-label="Password">Meezaan1</td>
                <td data-label="Image"><img class="img-fluid" style="height: 7rem;" src="https://i.postimg.cc/VLpktJnB/IMG-9425-1.jpg" alt=""></td>
                <td data-label="Date">24-05-2023</td>
                <td data-label="Edit">Edit</td>
                <td data-label="Delete">Delete</td>
              </tbody>
            </table>
            <!-- USER TABLE ENDS -->
            <h2 class="products">PRODUCTS</h2>
            <!-- PRODUCTS TABLE STARTS -->
            <table class="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>IMG</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <td data-label="ID">1</td>
                <td data-label="Name">Battery Charger</td>
                <td data-label="Category">high maintenance</td>
                <td data-label="Price">R1000</td>
                <td data-label="Quantity">Meezaan1</td>
                <td data-label="Image"><img class="img-fluid" style="height: 7rem;" src="https://i.postimg.cc/QNTpBbhR/battery-charger.png" alt=""></td>
                <td data-label="Edit">Edit</td>
                <td data-label="Delete">Delete</td>
              </tbody>
            </table>
            <!-- PRODUCTS  -->
          </div>
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

  <style>
  #admin {
    height: 100%;
    background: rgb(184, 184, 184);
  }

  .banner {
    background-color: black;
    height: 20vh;
    padding: 50px;
  }
  
  .admin-text {
    font-family: "Special Elite", cursive;
    text-align: center;
    color: white;
    text-shadow: 2px 2px 4px rgb(134, 131, 131);
    position: relative;
  }
  
  .admin-text::after {
    content: "";
    position: absolute;
    display: block;
    left: 35%;
    bottom: -10px;
    width: 30%;
    height: 2px;
    background: rgb(255, 255, 255);
  }

  .users, .products {
    color: black;
    font-size: 50px;
    font-family: 'Special Elite', cursive;
    font-weight: 900;
    text-shadow: 2px 2px 4px rgb(134, 131, 131);
    text-align: center;
    padding: 30px;
  }
  .table {
    width: 100%;
  }
  .table td,
  .table th {
    border: 1px solid #ddd;
    text-align: center;
    font-size: 16px;
  }
  .table th {
    background-color: rgb(184, 184, 184);
    color: black;
    font-size: 20px;
    font-family: 'Special Elite', cursive;
    font-weight: 900;
    text-shadow: 2px 2px 4px rgb(134, 131, 131);
  }
  .table tbody tr {
    background-color: rgb(184, 184, 184);
    color: black;
  }
  /*responsive*/
  @media(max-width: 300px) {
    .table {
      height: 100%;
      overflow-y: auto;
    }
    .table thead {
      display: none;
    }
    .table,
    .table tbody,
    .table tr,
    .table td {
      display: block;
      width: 100%;
    }
    .table tr {
      margin-bottom: 15px;
    }
    .table td {
      text-align: right;
      padding-left: 50%;
      text-align: right;
      position: relative;
      width: 100%;
    }
    .table td::before {
      content: attr(data-label);
      position: absolute;
      left: 0;
      width: 50%;
      padding-left: 15px;
      font-size: 15px;
      font-weight: bold;
      text-align: left;
    }
  }

</style>