<script setup lang="ts">
const formName = ref<string>();
const formEmail = ref<string>();
const formPhone = ref<number>();
</script>

<template>
  <div class="text-[#262626] flex justify-center px-[240px] py-[80px] gap-[32px] mob:px-[16px] mob:py-[64px] mob:gap-[16px] mob:flex-col">
    <div class="w-[456px] h-auto p-[32px] mob:p-[16px]">
      <span class="text-[64px] leading-[48px] font-bold mob:text-[30px] mob:leading-[36px]">Get In Touch</span>
    </div>
    <div class="w-[554px] flex flex-col gap-[32px] p-[32px] mob:w-auto mob:p-[16px]">
      <div class="flex flex-col gap-[24px]">
        <div class="p-[10px] mob:p-0">
          <span class="font-bold leading-[32px] text-[48px] mob:text-[24px] mob:leading-[32px]">
            Shoot Me Email
          </span>
        </div>
        <div class="flex flex-col gap-[16px]">
          <div class="py[16px]">
            <input
              id="name"
              v-model="formName"
              name="name"
              type="text"
              class="mob:text-[16px] mob:leading-[32px] block w-full text-[20px] leading-[42px] border-0 border-b border-gray-400 focus:outline-none bg-[#F6F9FA] focus:ring-0"
              placeholder="Enter Your Name"
            >
          </div>
          <div class="py[16px]">
            <input
              id="email"
              v-model="formEmail"
              name="email"
              type="email"
              class="mob:text-[16px] mob:leading-[32px] block w-full text-[20px] leading-[42px] border-0 border-b border-gray-400 bg-[#F6F9FA] focus:outline-none focus:ring-0"
              placeholder="Enter Your Email"
            >
          </div>
          <div class="py[16px]">
            <input
              id="phone"
              v-model="formPhone"
              name="phone"
              type="number"
              class="mob:text-[16px] mob:leading-[32px] block w-full text-[20px] leading-[42px] bg-[#F6F9FA] border-0 border-b border-gray-400 focus:outline-none focus:ring-0"
              placeholder="Enter Your Phone"
            >
          </div>
          <div class="flex flex-col py-[16px] border-b border-gray-400">
            <textarea
              placeholder="Leave a Message for Me"
              class="mob:text-[16px] mob:leading-[32px] block h-[44px] text-[20px] w-full bg-[#F6F9FA] border-0 focus:outline-none focus:ring-0"
            />
          </div>
        </div>
      </div>

      <div>
        <button class="flex border-solid border-[.5px] border-black px-[24px] py-[16px] items-center gap-[10px] mob:py-[12px] mob:gap-[8px]">
          <span class="text-[24px] mob:text-[16px] mob:leading-[24px]">Send Message</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M4.00016 4V5.33333H9.72683L3.3335 11.7267L4.2735 12.6667L10.6668 6.27333V12H12.0002V4H4.00016Z"
              fill="#262626"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="flex-col flex w-[366px] p-[32px] items-start gap-[24px] mob:w-auto mob:gap-[16px] mob:p-[16px]">
      <div class="flex items-center p-[10px] mob:p-0">
        <span class="leading-[32px] text-[48px] font-bold mob:text-[24px] mob:leading-[32px]">
          Contact Info
        </span>
      </div>
      <div class="flex flex-col gap-[16px]">
        <div class="flex-col flex p-[10px] gap-[16px] mob:p-0">
          <span class="text-[24px] leading-[20px] font-bold mob:text-[20px] mob:leading-[28px]">Email:</span>
          <span class="text-[16px] font-normal leading-[20px]">emamhossain703@gmail.com</span>
        </div>
        <div class="flex-col flex p-[10px] gap-[16px] mob:p-0">
          <span class="text-[24px] font-bold leading-[20px] mob:text-[20px] mob:leading-[28px]">Address:</span>
          <span class="text-[16px] font-normal leading-[20px]">BTI Premier Shopping Mall, Uttar Badda 1212 Dhaka</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
