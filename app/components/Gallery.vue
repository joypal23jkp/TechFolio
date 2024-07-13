<script setup lang="ts">

</script>

<template>
  <div class="flex items-center justify-center  gap-[48px] flex-col py-[120px] px-[240px]">
    <div class="flex justify-center items-center flex-col gap-[16px]">
      <div class="flex gap-[24px] items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <path d="M24.375 24L0.801777 24C0.690414 24 0.634642 23.8654 0.713388 23.7866L24.2866 0.213387C24.3654 0.134643 24.5 0.190411 24.5 0.301776L24.5 23.875C24.5 23.944 24.444 24 24.375 24Z" fill="#147CD1"/>
        </svg>
        <h1 class="text-[48px] font-bold leading-[64px] text-[#262626]">My Gallery</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <path d="M0.5 23.875V0.301777C0.5 0.190414 0.634642 0.134642 0.713388 0.213388L24.2866 23.7866C24.3654 23.8654 24.3096 24 24.1982 24H0.625C0.555964 24 0.5 23.944 0.5 23.875Z" fill="#147CD1"/>
        </svg>
      </div>
      <p class="w-[1118px] text-center text-[24px] font-light leading-[32px] text-[#565656]">My gallery showcases a vibrant tapestry of artistic expressions,
        featuring diverse creations that captivate and inspire.
      </p>
    </div>
    <div class="grid-layout">
      <div class="row-start-1 row-end-3 col-start-1 col-end-3 ">
        <img src="~/assets/images/Gallery/img.png" alt="loading..." class="w-[100%] h-[100%]">
      </div>
      <div class="row-start-1 row-end-2 col-start-3 col-end-4">
        <img src="~/assets/images/Gallery/img_1.png" alt="loading..." class="w-[100%] h-[100%]">
      </div>
      <div class="row-start-1 row-end-2 col-start-4 col-end-5">
        <img src="~/assets/images/Gallery/img_2.png" alt="loading..." class="w-[100%] h-[100%]">
      </div>
      <div class="row-start-2 row-end-3 col-start-3 col-end-4">
        <img src="~/assets/images/Gallery/img_3.png" alt="loading..." class=" w-[100%] h-[100%]">
      </div>
      <div class="row-start-2 row-end-3 col-start-4 col-end-5">
        <img src="~/assets/images/Gallery/img_4.png" alt="loading..." class=" w-[100%] h-[100%]">
      </div>
    </div>
    <div class="w-[100%] flex justify-end">
      <button class="flex items-center gap-[10px] leading-[24px] text-[16px] border-solid border-2 border-indigo-600 px-[16px] py-[12px]">
        Explore Now
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4.00016 4V5.33333H9.72683L3.3335 11.7267L4.2735 12.6667L10.6668 6.27333V12H12.0002V4H4.00016Z" fill="#262626"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.grid-layout {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 24px;
}
</style>