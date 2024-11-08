<script setup>
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center text-center">
    <h1 class="text-4xl font-bold mb-4 text-pink-800">Benvingut a la meua SPA de Vue.js</h1>
    <p class="text-xl mb-8">Una aplicació web que mostra tres exemples de Vue.js</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="p-6 bg-pink-200 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-3 text-pink-600">Calculadora</h2>
        <p>Calculadora amb suport per a diverses operacions</p>
        <RouterLink to="/calculator" class="mt-4 inline-block bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-600">
          Calculadora
        </RouterLink>
      </div>
      <div class="p-6 bg-pink-200 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-3 text-pink-600">Comentaris</h2>
        <p>Comentaris obtinguts de l'API JSONPlaceholder</p>
        <RouterLink to="/comments" class="mt-4 inline-block bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-600">
          Comentaris
        </RouterLink>
      </div>
      <div class="p-6 bg-pink-200 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold mb-3 text-pink-600">Usuaris</h2>
        <p>Dades d'usuaris de l'API DummyJSON</p>
        <RouterLink to="/users" class="mt-4 inline-block bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-600">
          Usuaris
        </RouterLink>
      </div>
    </div>
  </div>
</template>