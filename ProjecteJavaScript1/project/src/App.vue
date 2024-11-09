<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-pink-800 text-white p-4">
      <nav class="container mx-auto flex gap-4">
        <RouterLink to="/" class="hover:text-pink-300">Inici</RouterLink>
        <RouterLink to="/calculator" class="hover:text-pink-300">Calculadora</RouterLink>
        <RouterLink to="/comments" class="hover:text-pink-300">Comentaris</RouterLink>
        <RouterLink to="/users" class="hover:text-pink-300">Usuaris</RouterLink>
      </nav>
    </header>

    <main class="container mx-auto p-4 flex-grow">
      <RouterView />
    </main>

    <footer class="bg-pink-800 text-white p-4 text-center">
      <p>© 2024 Natalia Nowak</p>
      <p>Projecte 1 - Desenvolupament d'interficies</p>
    </footer>
  </div>
</template>