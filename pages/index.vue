<template>
  <div class="flex flex-col items-center p-4 relative min-h-screen overflow-hidden">
    <!-- Cartoon Robot Video -->
    <video autoplay loop muted playsinline class="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-md">
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
      Start
    </button>

    <!-- Zooming Image: Centered, Rounded, Medium Zoom -->
    <transition name="zoom" appear>
      <img
        v-if="showZoomImage"
        src="/robot-blast.png"
        alt="TD"
        class="fixed inset-0 m-auto w-24 h-24 rounded-full animate-zoom z-70 pointer-events-none"
      />
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const fullMessage = "Fashion is the armor to survive the reality of everyday life. Get the best designer with quality fashions — Tinah Designer";
const displayedMessage = ref("");
const showZoomImage = ref(false);

async function typeAndSpeak() {
  displayedMessage.value = "";

  // Voice
  const utterance = new SpeechSynthesisUtterance(fullMessage);
  utterance.lang = 'en-US';
  utterance.rate = 1.2;
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);

  // Typing
  const words = fullMessage.split(" ");
  for (const word of words) {
    displayedMessage.value += word + " ";
    await new Promise(resolve => setTimeout(resolve, 300));
  }

  // Show zooming image
  showZoomImage.value = true;
  setTimeout(() => {
    showZoomImage.value = false;
  }, 1800);
}
</script>

<style scoped>
@keyframes zoomGrow {
  0% {
    transform: scale(1);
    opacity: 0.9;
  }
  100% {
    transform: scale(3);
    opacity: 0.5;
  }
}

.animate-zoom {
  animation: zoomGrow 1.8s ease-out forwards;
}
</style>
