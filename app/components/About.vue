<script setup lang="ts">

</script>

<template>
  <div class="flex items-center justify-center about-page-container max-w-[1920px] px-[240px] py-[120px] relative">
    <div class="w-[700px] font-light bg-[#F6F9FA] left-[320px] border-solid border-2 border-[#898989] px-[64px] py-[48px] flex flex-col absolute z-10">
      <h1 class="text-[100px] font-bold leading-[120px]">About me</h1>
      <p class="text-[20px] leading-[28px] text-[#565656]">
        "In the dynamic canvas of business, strategic vision paints path forward, fueled by relentless determination.
        Collaboration beco brushstroke that colors innovation, while adaptability acts as the canvas that absorbs change.
        A decision is a stroke, shaping the masterpiece of success, and resilience serves as the frame,
        anchoring the journey in the face of uncertainties. The symphony of dedication, creativity, perseverance plays
        harmoniously, creating a resilient melody that resonates in the corridors of achievement."
      </p>
      <div>
        <h1 class="text-2xl font-bold pt-6">My Interest</h1>
        <ul class="flex gap-2 pt-2">
          <li>Travel</li>
          <li>Driving</li>
          <li>Fishing</li>
          <li>Photography</li>
        </ul>
      </div>
    </div>
    <div class="flex justify-end relative z-0 left-[350px] w-[646px] h-[800px] px-[59px] py-[15px] border-solid border-2 border-[#898989]">
      <img src="../assets/images/img_8.png" alt="Loading..." class=""/>
    </div>
  </div>
</template>

<style>
.about-page-container {
  height: auto;
}
</style>
