<template>
  <div v-if="loading" class="fixed inset-0 flex items-center justify-center bg-white z-50">
    <div class="loader"></div>
  </div>

  <div v-else class="px-4 py-1 max-w-sm mx-auto bg-white shadow-md rounded-lg">
    <div class="flex">
      <div class="flex flex-col">
        <h1 class="text-xl mt-3 font-bold text-blue-600">
          Hello! <span class="text-gray-700 text-[15px] font-medium">from Tinah...</span>
        </h1>
        <p class="text-lg mt-3 font-semibold">Fashion Designer</p>
      </div>
      <img ref="imageRefs" src="assets/images/designer.png" class="w-full h-[200px] object-cover mt-2 rounded" />
    </div>

    <div class="flex flex-col items-center">
      <p class="bg-blue-500 text-white text-sm py-1 px-4 mt-3 rounded leading-relaxed min-h-[80px]">
        <span>{{ typedText }}</span><span v-if="showCursor" class="animate-blink">|</span>
      </p>
      <img ref="imageRefs" src="assets/images/pointer.gif" class="w-12 -mt-10 self-end" />
    </div>
    <p class="italic bg-yellow-200 px-1">Designs >></p>

    <!-- Swiper -->
    <div v-if="Swiper" class="relative mt-2">
      <Swiper
        ref="swiperRef"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        class="rounded"
      >
        <SwiperSlide v-for="(image, index) in designs" :key="index">
          <div class="relative w-full h-auto">
            <img ref="imageRefs" :src="image" class="w-full h-auto object-cover rounded" @load="imageLoaded(index)" />
            <div v-if="!imageLoadedStatus[index]" class="absolute inset-0 flex items-center justify-center bg-gray-200">
              <div class="small-loader"></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <button
        @click="prevSlide"
        class="absolute hidden left-2 top-1/2 -translate-y-1/2 bg-gray-900/60 text-white p-2 rounded-full shadow-md hover:bg-gray-900 transition z-10"
      >
        <ChevronLeft class="w-6 h-6" />
      </button>

      <button
        @click="nextSlide"
        class="absolute right-2 hidden top-1/2 -translate-y-1/2 bg-gray-900/60 text-white p-2 rounded-full shadow-md hover:bg-gray-900 transition z-10"
      >
        <ChevronRight class="w-6 h-6" />
      </button>
    </div>
    <p class="text-center text-blue-600">@tinah contact: 0759 536 372</p>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";

const loading = ref(true);
const designs = [
  "/images/design1.png",
  "/images/design2.png",
  "/images/design3.png",
  "/images/design4.png",
  "/images/design5.png",
  "/images/design6.png",
];

const typedText = ref("");
const showCursor = ref(true);
const imageRefs = ref([]);
const imageLoadedStatus = ref(Array(designs.length).fill(false));

const fullText =
  "Get stylish, custom-made outfits designed just for you. Look great and feel confident in fashion made to fit your personality.";
const typeText = async () => {
  for (let i = 0; i < fullText.length; i++) {
    await new Promise((resolve) => setTimeout(resolve, 100));
    typedText.value += fullText[i];
  }
  showCursor.value = false;
};

const waitForImagesToLoad = async () => {
  await nextTick();
  const images = [...imageRefs.value];

  await Promise.all(
    images.map(
      (img) =>
        new Promise((resolve) => {
          if (img.complete) resolve();
          else img.onload = img.onerror = resolve;
        })
    )
  );

  loading.value = false;
};

const imageLoaded = (index) => {
  imageLoadedStatus.value[index] = true;
};

onMounted(async () => {
  typeText();
  await waitForImagesToLoad();
});

const Swiper = ref(null);
const SwiperSlide = ref(null);
const swiperRef = ref(null);

const prevSlide = () => {
  if (swiperRef.value) swiperRef.value.swiper.slidePrev();
};

const nextSlide = () => {
  if (swiperRef.value) swiperRef.value.swiper.slideNext();
};

onMounted(async () => {
  const SwiperModule = await import("swiper/vue");
  const SwiperCore = await import("swiper");
  const { Autoplay, Pagination } = await import("swiper/modules");

  Swiper.value = SwiperModule.Swiper;
  SwiperSlide.value = SwiperModule.SwiperSlide;

  SwiperCore.default.use([Autoplay, Pagination]);
});
</script>

<style>
@keyframes blink {
  50% {
    opacity: 0;
  }
}

.animate-blink {
  animation: blink 1s infinite;
}

.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.small-loader {
  border: 3px solid #ccc;
  border-top: 3px solid #666;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
}
</style>
