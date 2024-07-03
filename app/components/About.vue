<script setup lang="ts">

</script>

<template>
  <div class="flex items-center justify-center about-page-container max-w-[1920px] px-[240px] py-[120px] relative">
    <div class="w-[700px] font-light font-serif bg-amber-50 left-[300px] border-solid border-2 border-indigo-600 px-[48px] py-[64px] flex flex-col absolute z-10">
      <h1 class="text-4xl font-bold pb-8">About me</h1>
      <p>
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
    <div class="w-[600px] h-[800px] flex justify-end relative z-0 left-[200px]">
      <img src="https://cdn-bgp.bluestacks.com/BGP/us/gametiles_com.dts.freefireth.jpg" alt="Loading..." class="w-[100%] h-[100%]"/>
    </div>
  </div>
</template>

<style>
.about-page-container {
  height: auto;
}
</style>
