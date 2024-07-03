<template>
  <div>
      <div class="header-container flex justify-between items-center w-[100%] h-[108px] px-[240px] py-[24px] bg-[#F6F9FA]">
        <div class="logo">
          Logo
        </div>
        <div class="options-container">
          <ul class="list-container flex items-center">
            <li class="pl-6">Business Journey</li>
            <li class="pl-6">About</li>
            <li class="pl-6">Short History</li>
            <li class="pl-6">Gallery</li>
            <li class="pl-6">Contact Me</li>
            <li class="toggle-container ml-6">
              <label for="check" class="button">
                <input type="checkbox" id="check">
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div class="homepage-body-container bg-[#F6F9FA]">
        <Homepage />
      </div>
      <div class="myWorld-page-container bg-[#FFFFFF]">
        <MyWorld />
      </div>
      <div class="journey-page-container bg-[#F6F9FA]">
        <Journey />
      </div>
      <div class="about-page-container bg-[#FFFFFF]">
        <About />
      </div>
  </div>
</template>

<script lang="ts" setup>
import Homepage from "~/components/Homepage.vue";


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playwrite+US+Trad:wght@100..400&display=swap');
/* Global styles can be defined here */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  max-width: 1920px;
}
.logo {
  font-family: "Playwrite US Trad", cursive;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}
.toggle-container{
  width: 60px;
  height: 30px;
  background-color: white;
  border-radius: 25px;
  //display: flex;
  //justify-content: space-between;
  //place-items: center;
}
.container .text{
  font-size: 30px;
  color: #000;
  font-weight: bold;
}
.button{
  background: linear-gradient(90deg, darkblue, blue);
  width: 30px;
  height: 30px;
  border-radius: 20px;
  cursor: pointer;
  position: relative;
  display: inline-block;
  transition: 0.2s;
}
.span{
  position: absolute;
  background-color: #fff;
  width: 90px;
  height: 90px;
  border-radius: 200px;
  margin: 5px;
  transition: all 0.2s ease-out;
}
input {
  display: none;
}
</style>
