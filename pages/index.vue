<template>
<div class="bg-slate-50 text-gray-800 scroll-smooth">

<!-- NAVBAR -->
<header class="fixed w-full z-50 backdrop-blur bg-white/70 shadow">
<div class="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-4">

<h1
@click="scrollTop"
class="font-bold text-lg md:text-xl text-slate-900 cursor-pointer hover:text-orange-500 transition">
Abigail
</h1>

<!-- DESKTOP MENU -->
<nav class="hidden md:flex gap-8 font-medium text-sm">
<a href="#about" class="hover:text-orange-500">About</a>
<a href="#skills" class="hover:text-orange-500">Skills</a>
<a href="#services" class="hover:text-orange-500">Services</a>
<a href="#experience" class="hover:text-orange-500">Experience</a>
<a href="#projects" class="hover:text-orange-500">Projects</a>
<a href="#contact" class="hover:text-orange-500">Contact</a>
</nav>

<!-- MOBILE MENU BUTTON -->
<button
@click="mobileMenu = !mobileMenu"
class="md:hidden text-slate-900">

<svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none"
viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round"
stroke-width="2"
d="M4 6h16M4 12h16M4 18h16" />
</svg>

</button>

</div>

<!-- MOBILE MENU -->
<div v-if="mobileMenu" class="md:hidden bg-white border-t shadow">

<nav class="flex flex-col text-center font-medium">

<a @click="mobileMenu=false" href="#about" class="py-3 hover:bg-gray-100">About</a>
<a @click="mobileMenu=false" href="#skills" class="py-3 hover:bg-gray-100">Skills</a>
<a @click="mobileMenu=false" href="#services" class="py-3 hover:bg-gray-100">Services</a>
<a @click="mobileMenu=false" href="#experience" class="py-3 hover:bg-gray-100">Experience</a>
<a @click="mobileMenu=false" href="#projects" class="py-3 hover:bg-gray-100">Projects</a>
<a @click="mobileMenu=false" href="#contact" class="py-3 hover:bg-gray-100">Contact</a>

</nav>

</div>
</header>



<!-- HERO -->
<section class="min-h-screen flex items-center bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white">

<div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">

<div>

<p class="uppercase text-orange-400 tracking-widest mb-3 text-sm">
ICT Technician • Designer
</p>

<h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
Abigail Mueni
</h1>

<p class="text-gray-300 text-base md:text-lg mb-8">
Dedicated ICT Technician providing computer support,
network setup, online government services, and digital design
solutions for individuals and businesses.
</p>

<div class="flex flex-wrap gap-4">

<a href="#contact"
class="px-6 py-3 bg-orange-500 rounded-lg shadow-lg hover:bg-orange-600 transition">
Hire Me
</a>

<button
@click="openServices = true"
class="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-slate-900 transition">
Online Services
</button>

</div>

</div>


<!-- PHOTO -->
<div class="flex justify-center">

<img
src="/abigail.png"
class="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl object-cover"
/>

</div>

</div>
</section>



<!-- ABOUT -->
<section id="about" class="py-16 md:py-24">
<div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

<div>
<h2 class="text-3xl md:text-4xl font-bold mb-6">About Me</h2>

<p class="text-gray-600 mb-6">
Detail-oriented ICT Technician experienced in computer systems
support, troubleshooting, hardware installation, networking and
digital services assistance.
</p>

<p class="text-gray-600">
I help individuals and organizations maintain reliable
computer systems and access essential digital services.
</p>

</div>

<div class="grid grid-cols-2 gap-6">

<div class="bg-white p-6 rounded-xl shadow">
<h3 class="text-3xl font-bold text-orange-500">3+</h3>
<p class="text-gray-500 text-sm">Years Experience</p>
</div>

<div class="bg-white p-6 rounded-xl shadow">
<h3 class="text-3xl font-bold text-orange-500">50+</h3>
<p class="text-gray-500 text-sm">Clients Assisted</p>
</div>

<div class="bg-white p-6 rounded-xl shadow">
<h3 class="text-3xl font-bold text-orange-500">20+</h3>
<p class="text-gray-500 text-sm">Systems Maintained</p>
</div>

<div class="bg-white p-6 rounded-xl shadow">
<h3 class="text-3xl font-bold text-orange-500">10+</h3>
<p class="text-gray-500 text-sm">Projects Completed</p>
</div>

</div>
</div>
</section>



<!-- SKILLS -->
<section id="skills" class="py-12 md:py-20 bg-gray-100">
<div class="max-w-7xl mx-auto px-6">

<h2 class="text-3xl md:text-4xl font-bold text-center mb-16">
Professional Skills
</h2>

<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

<div class="bg-white p-6 rounded-xl shadow">
<h3 class="font-bold mb-4 text-orange-500">
Hardware & Systems
</h3>
<ul class="text-gray-600 space-y-2 text-sm">
<li>Computer Assembly</li>
<li>Hardware Troubleshooting</li>
<li>System Installation</li>
<li>Preventive Maintenance</li>
</ul>
</div>

<div class="bg-white p-6 rounded-xl shadow">
<h3 class="font-bold mb-4 text-orange-500">
Networking
</h3>
<ul class="text-gray-600 space-y-2 text-sm">
<li>LAN Setup</li>
<li>Router Configuration</li>
<li>Internet Troubleshooting</li>
<li>Network Security Basics</li>
</ul>
</div>

<div class="bg-white p-6 rounded-xl shadow">
<h3 class="font-bold mb-4 text-orange-500">
Software & Tools
</h3>
<ul class="text-gray-600 space-y-2 text-sm">
<li>Windows OS</li>
<li>Microsoft Office</li>
<li>Printer & Scanner Setup</li>
<li>Data Backup</li>
</ul>
</div>

</div>
</div>
</section>



<!-- SERVICES -->
<section id="services" class="py-12 md:py-20">
<div class="max-w-7xl mx-auto px-6">

<h2 class="text-3xl md:text-4xl font-bold text-center mb-16">
Services
</h2>

<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

<div class="bg-white p-8 rounded-xl shadow">
<h3 class="text-xl font-bold mb-4 text-orange-500">
Computer Support
</h3>
<p class="text-gray-600">
Hardware troubleshooting and computer system maintenance.
</p>
</div>

<div class="bg-white p-8 rounded-xl shadow">
<h3 class="text-xl font-bold mb-4 text-orange-500">
Government Online Services
</h3>
<p class="text-gray-600">
KRA, NTSA, eCitizen and other online applications assistance.
</p>
</div>

<div class="bg-white p-8 rounded-xl shadow">
<h3 class="text-xl font-bold mb-4 text-orange-500">
Graphic Design
</h3>
<p class="text-gray-600">
Posters, business cards, programmes and invitation designs.
</p>
</div>

</div>
</div>
</section>



<!-- EXPERIENCE -->
<section id="experience" class="py-12 md:py-20 bg-gray-100">
<div class="max-w-5xl mx-auto px-6">

<h2 class="text-3xl md:text-4xl font-bold text-center mb-16">
Work Experience
</h2>

<div class="space-y-8">

<div class="bg-white p-6 rounded-xl shadow">
<h3 class="font-bold text-lg">
Computer Systems Support Officer
</h3>
<p class="text-orange-500 text-sm mb-2">
Unilix Media Production • 2025 – Present
</p>
<p class="text-gray-600 text-sm">
Provide technical support for computers, install and maintain
software systems, troubleshoot hardware and support
network connectivity.
</p>
</div>

<div class="bg-white p-6 rounded-xl shadow">
<h3 class="font-bold text-lg">
ICT Support Officer
</h3>
<p class="text-orange-500 text-sm mb-2">
A.B.C Sacco • 2022 – 2024
</p>
<p class="text-gray-600 text-sm">
Provided technical support for office systems, printers,
networks and assisted staff with ICT solutions.
</p>
</div>

</div>
</div>
</section>



<!-- PROJECTS -->
<section id="projects" class="py-12 md:py-20">
<div class="max-w-7xl mx-auto px-6">

<h2 class="text-3xl md:text-4xl font-bold text-center mb-16">
Projects
</h2>

<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

<div class="bg-white p-6 rounded-xl shadow">
<h3 class="font-bold mb-2">
Office Network Setup
</h3>
<p class="text-gray-600 text-sm">
Configured LAN network and internet connectivity
for office operations.
</p>
</div>

<div class="bg-white p-6 rounded-xl shadow">
<h3 class="font-bold mb-2">
Computer Maintenance
</h3>
<p class="text-gray-600 text-sm">
Performed system upgrades and preventive
maintenance for multiple computers.
</p>
</div>

<div class="bg-white p-6 rounded-xl shadow">
<h3 class="font-bold mb-2">
Design Projects
</h3>
<p class="text-gray-600 text-sm">
Created posters, programmes and invitation cards
for various clients.
</p>
</div>

</div>
</div>
</section>



<!-- CONTACT -->
<section id="contact" class="py-12 md:py-20 bg-slate-900 text-white">
<div class="max-w-4xl mx-auto px-6 text-center">

<h2 class="text-3xl md:text-4xl font-bold mb-6">
Contact
</h2>

<p class="text-gray-300 mb-10">
Available for ICT support and online services assistance.
</p>

<div class="space-y-3 text-lg">
<p>📞 0741034095</p>
<p class="flex items-center justify-center gap-2"><img src="/gmail.png" class="h-5 w-5"> <span>muenideborah470@gmail.com</span></p>
<p class="flex items-center justify-center gap-2"><img src="/map.png" class="h-5 w-5"> <span>Machakos, Kenya</span></p>
</div>

</div>
</section>



<footer class="bg-black text-gray-400 text-center py-6">
© {{ new Date().getFullYear() }} Abigail Mueni
</footer>



<!-- SERVICES MODAL -->
<div
v-if="openServices"
@click.self="openServices=false"
class="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

<div class="bg-white rounded-xl w-full max-w-2xl max-h-[80vh] overflow-y-auto p-6">

<h2 class="text-xl font-bold mb-6 text-center">
Request Service
</h2>

<div
v-for="service in services"
:key="service"
class="flex justify-between items-center border p-3 rounded mb-3">

<span>{{ service }}</span>

<div class="flex gap-4">

<a :href="whatsappLink(service)" target="_blank">
<img src="/whatsapp.png" class="h-5 w-5">
</a>

<a :href="emailLink(service)">
<img src="/gmail.png" class="h-5 w-5">
</a>

</div>

</div>

<div class="mt-6">

<h3 class="font-semibold mb-2">
Other Service
</h3>

<textarea
v-model="otherService"
placeholder="Describe your request..."
class="w-full border p-3 rounded mb-3"></textarea>

<div class="flex gap-4">

<a :href="whatsappOther" target="_blank">
<img src="/whatsapp.png" class="h-5 w-5">
</a>

<a :href="emailOther">
<img src="/gmail.png" class="h-5 w-5">
</a>

</div>

</div>

</div>
</div>

</div>
</template>



<script setup>
import { ref, computed } from "vue"

const openServices = ref(false)
const mobileMenu = ref(false)
const otherService = ref("")

const phone = "254741034095"
const email = "muenideborah470@gmail.com"

const services = [
"KRA Services",
"NTSA Services",
"eCitizen Services",
"Business Registration",
"Poster Design",
"Programme Design",
"Business Card Design",
"Invitation Cards",
"CV Writing",
"Computer Repair",
"Software Installation"
]

const whatsappLink = (service)=>{
const text = `Hello, I would like to request: ${service}`
return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
}

const emailLink = (service)=>{
const subject = `Service Request: ${service}`
const body = `Hello, I would like to request: ${service}`
return `mailto:${email}?subject=${subject}&body=${body}`
}

const whatsappOther = computed(()=>{
return `https://wa.me/${phone}?text=${encodeURIComponent(otherService.value)}`
})

const emailOther = computed(()=>{
return `mailto:${email}?subject=Service Request&body=${otherService.value}`
})

const scrollTop = ()=>{
window.scrollTo({top:0,behavior:"smooth"})
}
</script>