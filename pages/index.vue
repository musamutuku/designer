<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue'
import { useTheme } from '~/composables/useTheme'
import AOS from 'aos'
import 'aos/dist/aos.css'

const { theme, toggleTheme } = useTheme()

const loading = ref(true)
onMounted(() => setTimeout(() => (loading.value = false), 700))

const roles = [
  'ICT Support Officer',
  'Computer Systems Technician',
  'ICT & Software Support',
  'Technical Support Specialist'
]

const displayedRole = ref('')
let roleIndex = 0
let charIndex = 0
let timer: any = null

function typeRole() {
  timer = setInterval(() => {
    const r = roles[roleIndex]
    if (charIndex <= r.length) {
      displayedRole.value = r.slice(0, charIndex++)
    } else {
      clearInterval(timer)
      setTimeout(deleteRole, 800)
    }
  }, 70)
}

function deleteRole() {
  timer = setInterval(() => {
    if (charIndex >= 0) {
      displayedRole.value = roles[roleIndex].slice(0, charIndex--)
    } else {
      clearInterval(timer)
      roleIndex = (roleIndex + 1) % roles.length
      charIndex = 0
      setTimeout(typeRole, 300)
    }
  }, 35)
}

onMounted(() => {
  AOS.init({ duration: 700, once: true })
  nextTick(typeRole)
  document.documentElement.classList.toggle('dark', theme.value === 'dark')
})

watch(theme, v => {
  document.documentElement.classList.toggle('dark', v === 'dark')
})
</script>

<template>
  <div v-if="loading" class="fixed inset-0 flex items-center justify-center bg-white dark:bg-slate-900 z-50">
    <div class="w-14 h-14 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
  </div>

  <div :class="theme === 'dark' ? 'dark bg-slate-900 text-slate-100' : 'bg-white text-slate-900'">

    <!-- HEADER -->
    <header class="fixed top-0 w-full z-50 backdrop-blur bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800">
      <div class="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        <h1 class="font-bold tracking-wide text-emerald-600">ABIGAIL MUENI</h1>
        <button @click="toggleTheme" class="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700">🌓</button>
      </div>
    </header>

    <main class="pt-24">

      <!-- HERO -->
      <section class="min-h-[70vh] flex items-center">
        <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right">
            <p class="uppercase text-sm tracking-widest text-slate-500">ICT Professional</p>
            <h2 class="text-3xl md:text-5xl font-extrabold mt-3">
              Abigail Mueni
              <span class="block text-emerald-500 mt-2">Reliable ICT & Technical Support</span>
            </h2>
            <p class="mt-5 text-slate-600 dark:text-slate-300 max-w-xl">
              Dedicated ICT Technician with experience in computer systems support, troubleshooting,
              networking, and user assistance across SACCO and media production environments.
            </p>
            <div class="mt-6 text-sm text-slate-500">Currently: <span class="font-semibold text-emerald-600">{{ displayedRole }}</span></div>
          </div>

          <div data-aos="fade-left" class="flex justify-center">
            <div class="w-64 h-64 rounded-2xl overflow-hidden shadow-xl ring-2 ring-emerald-200">
              <img src="/design1.png" class="w-full h-full object-cover" alt="Abigail Mueni" />
            </div>
          </div>
        </div>
      </section>

      <!-- ABOUT -->
      <section class="py-20 bg-slate-50 dark:bg-slate-800">
        <div class="max-w-4xl mx-auto px-6" data-aos="fade-up">
          <h3 class="text-2xl font-bold mb-4">About Me</h3>
          <p class="text-slate-600 dark:text-slate-300">
            I am an ICT Support Officer skilled in hardware and software installation, system maintenance,
            troubleshooting, and basic networking. I have supported organizational operations by ensuring
            system reliability, data security, and efficient ICT service delivery.
          </p>
        </div>
      </section>

      <!-- SKILLS -->
      <section class="py-20">
        <div class="max-w-6xl mx-auto px-6" data-aos="fade-up">
          <h3 class="text-2xl font-bold mb-6">Core Skills</h3>
          <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div class="skill-card">Hardware & Software Installation</div>
            <div class="skill-card">Preventive Maintenance & Troubleshooting</div>
            <div class="skill-card">Windows OS Configuration</div>
            <div class="skill-card">Basic Networking (LAN, Routers)</div>
            <div class="skill-card">Printers & Peripheral Support</div>
            <div class="skill-card">User Support & Helpdesk</div>
          </div>
        </div>
      </section>

      <!-- EXPERIENCE -->
      <section class="py-20 bg-slate-50 dark:bg-slate-800">
        <div class="max-w-6xl mx-auto px-6" data-aos="fade-up">
          <h3 class="text-2xl font-bold mb-8">Work Experience</h3>

          <div class="space-y-6">
            <div class="exp-card">
              <h4>Computer Systems Support Officer – Unilix Media Production</h4>
              <p class="period">2025 – Present</p>
              <p>Providing technical support, system maintenance, and troubleshooting for production teams.</p>
            </div>

            <div class="exp-card">
              <h4>ICT Support Officer – A.B.C Sacco</h4>
              <p class="period">2022 – 2024</p>
              <p>Supported desktops, printers, networks, backups, and staff ICT training.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACT -->
      <section class="py-20">
        <div class="max-w-4xl mx-auto px-6" data-aos="fade-up">
          <h3 class="text-2xl font-bold mb-4">Contact</h3>
          <div class="flex flex-wrap gap-4">
            <a href="mailto:muenideborah470@gmail.com" class="contact-btn">Email</a>
            <a href="tel:0741034095" class="contact-btn">Call</a>
            <a href="/Abigail Mueni - CV.pdf" download class="contact-btn">Download CV</a>
          </div>
        </div>
      </section>

    </main>

    <footer class="py-6 text-center text-sm text-slate-500 border-t dark:border-slate-700">
      © {{ new Date().getFullYear() }} Abigail Mueni · ICT Support Professional
    </footer>
  </div>
</template>

<style scoped>
.skill-card {
  @apply p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm;
}

.exp-card {
  @apply p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm;
}

.exp-card h4 {
  @apply font-semibold text-emerald-600;
}

.period {
  @apply text-sm text-slate-500 mb-2;
}

.contact-btn {
  @apply px-4 py-2 rounded-lg border border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white transition;
}
</style>
