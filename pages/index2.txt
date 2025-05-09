<script setup>
import { ref, onMounted } from "vue";

const text = "Tina, the beautiful soul who radiates warmth, grace, and love. Her presence shines effortlessly, embodying true beauty inside and out.";
const displayedText = ref(""); // Holds the progressively typed text
let index = 0;
const isLoading = ref(true); // Controls the loader visibility

onMounted(() => {
  // Simulate loading delay
  setTimeout(() => {
    isLoading.value = false; // Hide loader
    startTyping(); // Start typing effect after hiding loader
  }, 2000); // Loader duration (2s)
});

function startTyping() {
  setTimeout(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        displayedText.value += text[index];
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Adjust speed of typing (milliseconds per letter)
  }, 2000); // Delay until animation finishes
}
</script>

<template>
  <!-- Loader (Before App Loads) -->
  <div v-if="isLoading" class="loader-container">
    <div class="loader"></div>
  </div>

  <!-- Main Content -->
  <div
    v-else
    class="flex flex-col justify-center items-center h-screen text-white relative overflow-hidden"
  >
    <!-- Beautiful Background Animation -->
    <div class="animated-bg absolute inset-0"></div>

    <!-- Expanding, Walking Right & Left -->
    <img
      src="/images/design22.png"
      class="animated-person relative z-10 rounded-full shadow-lg"
    />

    <!-- Typing Effect -->
    <p class="text-xl mt-1 text-blue-700 font-mono typing-text text-center max-w-2xl relative z-10">
      {{ displayedText }}
    </p>
  </div>
</template>

<style scoped>
/* 🔄 Loader Styles */
.loader-container {
  @apply fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gradient-to-br from-purple-600 to-blue-500;
}

.loader {
  width: 50px;
  height: 50px;
  border: 4px solid transparent;
  border-top: 4px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* 🎨 Beautiful Animated Background */
.animated-bg {
  background: linear-gradient(-45deg, #ff9a9e, #fad0c4, #fad0c4, #ffdde1);
  background-size: 400% 400%;
  animation: gradientAnimation 10s ease infinite;
  z-index: -1;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* 🔄 Expanding → Walking Right & Left (Responsive) */
@keyframes expandAndWalk {
  0% {
    width: 40px; /* Very small */
    transform: scale(0) translateX(0);
    opacity: 0;
  }
  30% {
    width: 150px;
    transform: scale(0.5) translateX(0);
    opacity: 1;
  }
  50% {
    width: 75vw; /* Expands to 3/4 of screen */
    transform: scale(1) translateX(50px); /* Moves right */
  }
  70% {
    transform: scale(1) translateX(-30px); /* Moves back left */
  }
  100% {
    width: 70vw; /* Stays at 3/4 screen width */
    transform: scale(1) translateX(0); /* Stops and centers */
  }
}

.animated-person {
  animation: expandAndWalk 2.5s ease-in-out forwards;
  height: auto;
  max-width: 90vw; /* Prevents overflow on small screens */
}

/* ✍️ Typing Effect */
.typing-text::after {
  content: "|";
  animation: blink 0.7s infinite alternate;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
