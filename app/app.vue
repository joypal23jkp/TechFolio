<template>
  <div class="app-container flex flex-col items-center justify-center mob:overflow-hidden">
      <div class="w-full flex justify-center bg-[#F6F9FA]">
        <Header class="max-w-[1920px] mob:max-w-[360px] w-full" />
      </div>
      <div ref="homePage" class="w-full hero-section bg-[#F6F9FA] flex justify-center" id="homepage">
        <Homepage class="max-w-[1920px] mob:max-w-[360px] w-full" id="home"/>
      </div>
      <div class="myWorld-section w-full bg-[#FFFFFF] flex justify-center">
        <MyWorld class="max-w-[1920px] mob:max-w-[360px] w-full" />
      </div>
      <div ref="section1" class="journey-section bg-[#F6F9FA] flex w-full justify-center" id="business-journey">
        <Journey class="max-w-[1920px] mob:max-w-[360px] w-full" />
      </div>
      <div ref="section2" class="about-section bg-[#FFFFFF] w-full flex justify-center" id="about">
        <About class="max-w-[1920px] mob:max-w-[360px] w-full" />
      </div>
      <div ref="section3" class="history-section bg-[#F6F9FA] w-full flex justify-center" id="short-history">
        <History class="max-w-[1920px] mob:max-w-[360px] w-full" />
      </div>
      <div ref="section4" class="gallery-section bg-[#FFFFFF] w-full flex justify-center" id="gallery">
        <Gallery class="max-w-[1920px] mob:max-w-[360px] w-full" />
      </div>
      <div ref="section5" class="contact-section bg-[#F6F9FA] w-full flex justify-center" id="contact-me">
        <Contact class="max-w-[1920px] mob:max-w-[360px] w-full" />
      </div>
      <div class="footer-section bg-[#FFFFFF] w-full flex justify-center">
       <Footer class="max-w-[1920px] mob:max-w-[360px] w-full" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const newVar = 34;


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playwrite+US+Trad:wght@100..400&display=swap');
/* Global styles can be defined here */
html {
  scroll-behavior: smooth;
}
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: auto;
}
.logo {
  font-family: "Playwrite US Trad", cursive;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
}
.toggle-container{
  background: #147CD1;
  border-radius: 999px;
  cursor: pointer;
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