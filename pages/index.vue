<template>
  <div class="flex flex-col items-center p-4">
    <!-- Cartoon Robot (MP4 Video) -->
    <video
      autoplay
      loop
      muted
      playsinline
      class="w-48 h-auto"
    >
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
  </div>
</template>

<script setup>
import { ref } from 'vue'

const fullMessage = "Hello! I'm your cartoon robot. I can talk as I type!";
const displayedMessage = ref("");

async function typeAndSpeak() {
  displayedMessage.value = ""; // Reset previous message

  // Speak full message
  const utterance = new SpeechSynthesisUtterance(fullMessage);
  utterance.lang = 'en-US';
  utterance.rate = 1.2;
  speechSynthesis.cancel(); // Cancel any ongoing speech
  speechSynthesis.speak(utterance);

  // Type message word-by-word in sync
  const words = fullMessage.split(" ");
  for (const word of words) {
    displayedMessage.value += word + " ";
    await new Promise(resolve => setTimeout(resolve, 300)); // Adjust timing as needed
  }
}
</script>
