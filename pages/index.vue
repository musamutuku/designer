<template>
  <div class="flex flex-col items-center p-4 relative">
    <!-- Cartoon Robot Video -->
    <video autoplay loop muted playsinline class="w-48 h-auto">
      <source src="/robot.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Speech Bubble -->
    <div class="relative mt-4 p-3 max-w-md bg-blue-100 text-black rounded-xl shadow-lg min-h-[4rem]">
      <p>{{ displayedMessage }}</p>
      <div
        class="absolute -top-2 left-10 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-blue-100"
      ></div>
    </div>

    <!-- Talk Button -->
    <button
      @click="typeAndSpeak"
      class="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
    >
      Make Robot Talk
    </button>

    <!-- Centered, Rounded, Zooming Image -->
    <transition name="zoom" appear>
      <img
        v-if="showZoomImage"
        src="/robot-blast.png"
        alt="Zoom Effect"
        class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full animate-zoom z-50"
      />
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const fullMessage = "Hello! I'm your cartoon robot. I can talk as I type!";
const displayedMessage = ref("");
const showZoomImage = ref(false);

async function typeAndSpeak() {
  displayedMessage.value = "";

  const utterance = new SpeechSynthesisUtterance(fullMessage);
  utterance.lang = 'en-US';
  utterance.rate = 1.2;
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);

  const words = fullMessage.split(" ");
  for (const word of words) {
    displayedMessage.value += word + " ";
    await new Promise(resolve => setTimeout(resolve, 300));
  }

  showZoomImage.value = true;
  setTimeout(() => {
    showZoomImage.value = false;
  }, 2500); // match animation duration
}
</script>

<style scoped>
@keyframes zoomGrow {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  100% {
    transform: scale(10);
    opacity: 0;
  }
}

.animate-zoom {
  animation: zoomGrow 2.5s ease-out forwards;
}
</style>
