<script setup>
import { ref, onMounted } from "vue";

const isLoading = ref(true);
const countdown = ref(5);
const showCountdown = ref(false);
const showIcons = ref(true);
const showAnimation = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
    showCountdown.value = true;
    const countdownInterval = setInterval(() => {
      if (countdown.value > 1) {
        countdown.value--;
      } else {
        clearInterval(countdownInterval);
        showCountdown.value = false;
        setTimeout(() => {
          showIcons.value = false; // Stop rotating icons
          showAnimation.value = false; // Stop image animation
        }, 5000);
      }
    }, 1000);
  }, 3000); // Loader duration
});
</script>

<template>
  <!-- Loader Before Countdown -->
  <div v-if="isLoading" class="loader-container">
    <div class="loader"></div>
  </div>

  <!-- Countdown Effect -->
  <div v-else-if="showCountdown" class="countdown-container">
    <span class="countdown-text">{{ countdown }}</span>
  </div>

  <div v-else class="relative flex justify-center items-center h-screen overflow-hidden bg-gradient-to-br from-indigo-700 to-purple-500">
    <!-- Colorful Animated Background -->
    <div class="animated-bg absolute inset-0"></div>
    
    <!-- Image Animation -->
    <img
      src="/images/design33.png"
      alt="Fashion Designer"
      :class="{'animated-person': showAnimation, 'static-person': !showAnimation}"
      class="relative z-20 rounded-lg shadow-2xl"
    />

    <!-- Rotating Icons -->
    <div v-if="showIcons" class="icons-container">
      <div class="icon icon-1">🎀</div> <!-- Ribbon -->
      <div class="icon icon-2">👕</div> <!-- T-Shirt -->
      <div class="icon icon-3">👗</div> <!-- Dress -->
      <div class="icon icon-4">✂️</div> <!-- Scissors -->
    </div>
  </div>
</template>

<style scoped>
/* Loader Animation */
.loader-container {
  @apply fixed top-0 left-0 w-full h-full flex justify-center items-center;
  background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
}

.loader {
  width: 60px;
  height: 60px;
  border: 6px solid transparent;
  border-top: 6px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Countdown Animation */
.countdown-container {
  @apply fixed top-0 left-0 w-full h-full flex justify-center items-center;
  background: radial-gradient(circle, rgba(255,165,0,1) 0%, rgba(255,0,150,1) 100%);
}

.countdown-text {
  font-size: 6rem;
  font-weight: bold;
  color: white;
  animation: countdownFade 1s ease-in-out infinite;
}

@keyframes countdownFade {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(1.5); opacity: 0; }
}

/* Rotating Icons */
.icons-container {
  position: absolute;
  width: 100px;
  height: 100px;
}

.icon {
  position: absolute;
  font-size: 2rem;
  animation: rotateIcons 15s linear infinite;
}

.icon-1 { top: -80px; left: 50%; transform: translateX(-50%); }
.icon-2 { bottom: -80px; left: 50%; transform: translateX(-50%); }
.icon-3 { left: -80px; top: 50%; transform: translateY(-50%); }
.icon-4 { right: -80px; top: 50%; transform: translateY(-50%); }

@keyframes rotateIcons {
  0% { transform: rotate(0deg) translateY(80px) rotate(0deg); }
  100% { transform: rotate(360deg) translateY(80px) rotate(-360deg); }
}

/* Background Animation */
.animated-bg {
  background: linear-gradient(270deg, #ff758c, #ff7eb3, #ff758c, #ffa5c5);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  z-index: -1;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Image Animation */
.animated-person {
  animation: swingRotateExpand 20s ease-in-out;
  max-width: 70vw;
  height: auto;
}

.static-person {
  transform: translateY(0px) rotate(0deg) scale(1);
}

@keyframes swingRotateExpand {
  0% { transform: translateY(0px) rotate(0deg) scale(1); }
  25% { transform: translateY(-20px) rotate(5deg) scale(1.1); }
  50% { transform: translateY(0px) rotate(-5deg) scale(1.2); }
  75% { transform: translateY(-15px) rotate(3deg) scale(1.1); }
  100% { transform: translateY(0px) rotate(0deg) scale(1); }
}
</style>