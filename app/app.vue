<template>
  <div class="flex flex-col items-center justify-center relative">
      <div class="h-[80px] w-[80px] fixed rounded-[30px] z-9999 cursor-pointer bg-blue-700 top-[800px] right-[300px] flex items-center justify-center flex-wrap" @click="scrollToSection('homepage')">
          Back To Top
      </div>
      <div class="w-full header-section flex justify-items-center bg-[#F6F9FA]">
        <div class="px-[240px] py-[24px] max-w-[1920px] w-full flex justify-between items-center ">
          <div class="h-[60px] w-[142.5px]">
            <img src="./assets/images/img_1.png" alt="Loading....."/>
          </div>
          <div class="options-container flex gap-[40px] items-center">
            <div class="list-container flex items-center text-[24px] gap-[40px]">
              <span class="cursor-pointer" @click="scrollToSection('business-journey')"><NuxtLink to="business-journey">Business Journey</NuxtLink></span>
              <span class="cursor-pointer" @click="scrollToSection('about')"><NuxtLink to="about">About</NuxtLink></span>
              <span class="cursor-pointer" @click="scrollToSection('short-history')"><NuxtLink to="short-story">Short History</NuxtLink></span>
              <span class="cursor-pointer" @click="scrollToSection('gallery')"><NuxtLink to="gallery">Gallery</NuxtLink></span>
              <span class="cursor-pointer" @click="scrollToSection('contact-me')"><NuxtLink to="contact-me">Contact Me</NuxtLink></span>
            </div>
            <div class="toggle-container h-[44px] w-[88px] p-[6px] flex gap-[12px]">
              <div>
                <svg class="bg-none" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M14.0642 7.65264L14.1401 7.75193C14.2294 7.68365 14.3108 7.5977 14.3514 7.48923C14.394 7.37542 14.3859 7.25236 14.3234 7.12691L14.3234 7.12681C14.2625 7.00468 14.1706 6.92739 14.0576 6.89403C13.9502 6.86228 13.8367 6.87412 13.7336 6.90128L13.7335 6.9013C12.7664 7.15686 11.8271 7.50898 10.9856 8.07597L10.9856 8.07597C8.30958 9.87937 6.96305 12.4211 6.87506 15.3689L6.87495 15.3689L6.87501 15.374C6.89556 17.2391 7.29714 18.7302 8.09469 20.1212C9.91839 23.302 13.6263 25.1065 17.2383 24.4849C20.4307 23.9355 22.7273 22.1651 24.0768 19.2047L24.0768 19.2047C24.1472 19.0501 24.1887 18.9121 24.1818 18.7895C24.1742 18.6555 24.11 18.5543 24.006 18.4799L24.0059 18.4798C23.898 18.4028 23.7792 18.3713 23.6462 18.4046C23.5241 18.4351 23.4033 18.5172 23.2749 18.6315C23.27 18.6356 23.2659 18.6395 23.2629 18.6423L23.2568 18.648C23.2566 18.6483 23.2563 18.6485 23.2561 18.6487C22.1187 19.6684 20.8056 20.2971 19.2851 20.4599L19.285 20.4599C17.5131 20.6499 15.875 20.2632 14.4179 19.2421L14.4179 19.2421C12.9016 18.1798 11.917 16.7381 11.5248 14.9183C11.19 13.3638 11.3402 11.857 12.0065 10.4071L12.0065 10.4071C12.4953 9.34352 13.2124 8.46448 14.1403 7.75178L14.0642 7.65264ZM14.0642 7.65264C13.1209 8.37714 12.3906 9.27203 11.893 10.3549L23.357 18.7257C23.6065 18.5034 23.7674 18.4632 23.9333 18.5816C24.0874 18.6918 24.0991 18.8541 23.9631 19.1528C22.6307 22.0757 20.3686 23.8194 17.2171 24.3617C13.6583 24.9741 10.0015 23.1957 8.20313 20.059C7.41716 18.6882 7.02034 17.2184 7 15.3726C7.08678 12.4656 8.41239 9.96082 11.0555 8.17963C11.8812 7.62327 12.8059 7.27571 13.7654 7.02215C13.9489 6.97379 14.118 6.99504 14.2115 7.1826C14.3092 7.37875 14.2237 7.53061 14.0642 7.65264ZM12.8552 19.1579L12.8552 19.1579C15.112 21.4024 18.8924 22.2436 22.2286 20.5194C20.7123 22.5954 17.6427 24.2092 14.2227 23.5049C10.6012 22.759 7.92361 19.5728 7.81238 15.8985L7.81238 15.8985C7.70723 12.4323 9.74593 9.71612 12.0514 8.5457C10.8915 10.1025 10.3537 11.8338 10.4393 13.7633C10.533 15.8755 11.361 17.6715 12.8552 19.1579Z" fill="white" stroke="white" stroke-width="0.25"/>
                </svg>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="16" fill="white"/>
                  <path d="M15.9797 21.3282C13.0371 21.3207 10.669 18.9414 10.6721 15.9944C10.6752 13.0336 13.0615 10.6587 16.0203 10.6712C18.9692 10.6837 21.3354 13.0612 21.3279 16.0044C21.3198 18.9714 18.9442 21.3357 15.9797 21.3282ZM16.0097 11.999C13.8035 11.9953 12.005 13.7807 11.9993 15.9813C11.9931 18.2005 13.7854 19.9991 16.0053 20.001C18.1884 20.0029 19.9919 18.2118 20.0007 16.0331C20.0101 13.8076 18.2246 12.0028 16.0097 11.999Z" fill="#147CD1"/>
                  <path d="M16.6717 7.73299C16.6717 8.04494 16.6767 8.35689 16.6704 8.66822C16.6617 9.14271 16.3954 9.43966 15.9928 9.43528C15.602 9.43091 15.3357 9.13959 15.3301 8.6851C15.3226 8.04119 15.3226 7.39666 15.3301 6.75212C15.3357 6.29764 15.6014 6.00506 15.9915 6.00006C16.3929 5.99506 16.6617 6.29326 16.671 6.7665C16.6767 7.08845 16.6717 7.41041 16.6717 7.73299Z" fill="#147CD1"/>
                  <path d="M7.72687 16.6709C7.39429 16.6709 7.06171 16.679 6.72912 16.669C6.28214 16.6559 5.99144 16.3758 6.00019 15.9844C6.00894 15.605 6.29214 15.3374 6.72725 15.3305C7.39241 15.3205 8.05757 15.3193 8.72274 15.3312C9.15347 15.3387 9.43479 15.6162 9.43542 15.9982C9.43604 16.3802 9.15597 16.6527 8.72462 16.6677C8.39203 16.6802 8.05945 16.6709 7.72687 16.6709Z" fill="#147CD1"/>
                  <path d="M24.3097 15.3287C24.6317 15.3287 24.9543 15.3205 25.2762 15.3306C25.7088 15.3443 25.9933 15.61 26.0001 15.9888C26.0064 16.3796 25.7157 16.6621 25.2675 16.669C24.6023 16.679 23.9371 16.6796 23.2726 16.6671C22.8425 16.659 22.5643 16.3789 22.5662 15.9951C22.568 15.6137 22.8494 15.3449 23.282 15.3318C23.6246 15.3212 23.9678 15.3299 24.311 15.3299C24.3097 15.3293 24.3097 15.3293 24.3097 15.3287Z" fill="#147CD1"/>
                  <path d="M16.6714 24.2921C16.6714 24.6141 16.6783 24.9366 16.6695 25.2586C16.657 25.7106 16.3876 26.0013 15.9969 26C15.608 25.9988 15.3355 25.7056 15.3298 25.2536C15.3217 24.5991 15.3211 23.9439 15.3317 23.2894C15.3386 22.8543 15.6055 22.5717 15.9862 22.5654C16.3826 22.5586 16.6552 22.8436 16.6683 23.2944C16.6777 23.6263 16.6702 23.9595 16.6702 24.2921C16.6708 24.2921 16.6708 24.2921 16.6714 24.2921Z" fill="#147CD1"/>
                  <path d="M22.5104 23.2656C22.4378 23.2269 22.2615 23.1737 22.1421 23.0612C21.6439 22.5911 21.1575 22.1072 20.6762 21.6196C20.3736 21.3127 20.3673 20.9238 20.6405 20.6475C20.9143 20.3705 21.3088 20.3699 21.612 20.6687C22.1078 21.157 22.5935 21.6552 23.0792 22.1529C23.2818 22.3604 23.3224 22.6117 23.2005 22.8705C23.0874 23.1131 22.8904 23.2556 22.5104 23.2656Z" fill="#147CD1"/>
                  <path d="M9.47169 23.2637C9.11285 23.2568 8.91718 23.1161 8.80027 22.8748C8.68712 22.6404 8.70025 22.3941 8.88029 22.2059C9.39667 21.6658 9.91805 21.13 10.4588 20.6149C10.7283 20.3579 11.1077 20.3942 11.3578 20.6461C11.606 20.8962 11.6403 21.2782 11.384 21.5464C10.8683 22.0865 10.3313 22.6072 9.78989 23.1224C9.69424 23.2118 9.53483 23.2362 9.47169 23.2637Z" fill="#147CD1"/>
                  <path d="M9.48247 8.73633C9.56062 8.77696 9.73941 8.82698 9.85882 8.9395C10.3583 9.40962 10.8472 9.89224 11.3267 10.3836C11.6261 10.6906 11.6242 11.0875 11.3517 11.3607C11.0785 11.6345 10.6909 11.6289 10.3796 11.3226C9.89007 10.8412 9.41058 10.3499 8.93296 9.85723C8.73354 9.65155 8.68415 9.40337 8.80043 9.1383C8.90983 8.88699 9.11051 8.75758 9.48247 8.73633Z" fill="#147CD1"/>
                  <path d="M23.2567 9.51462C23.2098 9.59464 23.1436 9.77469 23.0223 9.90222C22.5647 10.3855 22.0946 10.8568 21.6195 11.3232C21.31 11.627 20.9199 11.6339 20.6473 11.3601C20.3741 11.0863 20.3735 10.6893 20.673 10.3836C21.1531 9.89284 21.6445 9.41397 22.1371 8.93573C22.3521 8.72755 22.6103 8.67817 22.8841 8.80945C23.1311 8.92885 23.2536 9.13515 23.2567 9.51462Z" fill="#147CD1"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref="homePage" class="w-full hero-section bg-[#F6F9FA] flex justify-center" id="homepage">
        <Homepage class="max-w-[1920px]" id="business-journey"/>
      </div>
      <div class="myWorld-section w-full bg-[#FFFFFF] flex justify-center">
        <MyWorld class="max-w-[1920px]" />
      </div>
      <div ref="section1" class="journey-section bg-[#F6F9FA] flex w-full justify-center" id="business-journey">
        <Journey class="max-w-[1920px]" />
      </div>
      <div ref="section2" class="about-section bg-[#FFFFFF] w-full flex justify-center" id="about">
        <About class="max-w-[1920px]" />
      </div>
      <div ref="section3" class="history-section bg-[#F6F9FA] w-full flex justify-center" id="short-history">
        <History class="max-w-[1920px]" />
      </div>
      <div ref="section4" class="gallery-section bg-[#FFFFFF] w-full flex justify-center" id="gallery">
        <Gallery class="max-w-[1920px]" />
      </div>
      <div ref="section5" class="contact-section bg-[#F6F9FA] w-full flex justify-center" id="contact-me">
        <Contact class="max-w-[1920px]" />
      </div>
      <div class="footer-section bg-[#FFFFFF] w-full flex justify-center">
       <Footer class="max-w-[1920px]" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const homePage = ref<HTMLElement>();
const section1 = ref<HTMLElement>();
const section2 = ref<HTMLElement>();
const section3 = ref<HTMLElement>();
const section4 = ref<HTMLElement>();
const section5 = ref<HTMLElement>();

const sections = ref<any[]>([]);

const scrollToSection = (id: string) => {
  console.log(sections.value, 'sections');
  const section = sections.value.find(section => section.id === id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
onMounted(() => {
  sections.value = [section1.value, section2.value, section3.value, section4.value, section5.value, homePage.value];
})


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
