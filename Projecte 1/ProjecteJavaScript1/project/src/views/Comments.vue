<script setup>
import { ref, onMounted } from 'vue'

const comments = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    comments.value = await response.json()
  } catch (e) {
    error.value = 'Error carregant comentaris'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6 text-pink-800">Comentaris</h1>
    
    <div v-if="loading" class="text-center">
      <p class="text-xl">Carregant comentaris...</p>
    </div>
    
    <div v-else-if="error" class="text-red-500 text-center">
      {{ error }}
    </div>
    
    <div v-else class="grid gap-4">
      <div v-for="comment in comments" :key="comment.id" class="bg-pink-200 p-4 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-2 text-pink-600">{{ comment.name }}</h2>
        <p class="text-gray-600 mb-2">{{ comment.email }}</p>
        <p class="text-gray-800">{{ comment.body }}</p>
      </div>
    </div>
  </div>
</template>