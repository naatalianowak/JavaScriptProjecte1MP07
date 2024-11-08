<script setup>
import { ref } from 'vue'

const display = ref('0')
const newNumber = ref(true)
const operator = ref(null)
const previousValue = ref(null)

const addDigit = (digit) => {
  if (newNumber.value) {
    display.value = digit
    newNumber.value = false
  } else {
    display.value = display.value === '0' ? digit : display.value + digit
  }
}

const addDecimal = () => {
  if (!display.value.includes('.')) {
    display.value += '.'
    newNumber.value = false
  }
}

const clear = () => {
  display.value = '0'
  newNumber.value = true
  operator.value = null
  previousValue.value = null
}

const setOperator = (op) => {
  if (operator.value && !newNumber.value) {
    calculate()
  }
  previousValue.value = parseFloat(display.value)
  operator.value = op
  newNumber.value = true
}

const calculate = () => {
  if (operator.value === null || newNumber.value) return

  const current = parseFloat(display.value)
  let result = 0

  switch (operator.value) {
    case '+':
      result = previousValue.value + current
      break
    case '-':
      result = previousValue.value - current
      break
    case '*':
      result = previousValue.value * current
      break
    case '/':
      result = previousValue.value / current
      break
  }

  display.value = result.toString()
  operator.value = null
  newNumber.value = true
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="bg-pink-800 p-6 rounded-lg shadow-xl w-80">
      <div class="bg-pink-200 p-4 rounded mb-4">
        <div class="text-right text-2xl font-mono text-pink-600">{{ display }}</div>
      </div>
      <div class="grid grid-cols-4 gap-2">
        <button @click="clear" class="col-span-2 bg-pink-500 text-white p-4 rounded hover:bg-pink-600">
          Clear
        </button>
        <button @click="() => setOperator('/')" class="bg-pink-600 text-white p-4 rounded hover:bg-pink-700">÷</button>
        <button @click="() => setOperator('*')" class="bg-pink-600 text-white p-4 rounded hover:bg-pink-700">×</button>
        
        <button @click="() => addDigit('7')" class="bg-pink-700 text-white p-4 rounded hover:bg-pink-800">7</button>
        <button @click="() => addDigit('8')" class="bg-pink-700 text-white p-4 rounded hover:bg-pink-800">8</button>
        <button @click="() => addDigit('9')" class="bg-pink-700 text-white p-4 rounded hover:bg-pink-800">9</button>
        <button @click="() => setOperator('-')" class="bg-pink-600 text-white p-4 rounded hover:bg-pink-700">-</button>
        
        <button @click="() => addDigit('4')" class="bg-pink-700 text-white p-4 rounded hover:bg-pink-800">4</button>
        <button @click="() => addDigit('5')" class="bg-pink-700 text-white p-4 rounded hover:bg-pink-800">5</button>
        <button @click="() => addDigit('6')" class="bg-pink-700 text-white p-4 rounded hover:bg-pink-800">6</button>
        <button @click="() => setOperator('+')" class="bg-pink-600 text-white p-4 rounded hover:bg-pink-700">+</button>
        
        <button @click="() => addDigit('1')" class="bg-pink-700 text-white p-4 rounded hover:bg-pink-800">1</button>
        <button @click="() => addDigit('2')" class="bg-pink-700 text-white p-4 rounded hover:bg-pink-800">2</button>
        <button @click="() => addDigit('3')" class="bg-pink-700 text-white p-4 rounded hover:bg-pink-800">3</button>
        <button @click="calculate" class="bg-pink-500 text-white p-4 rounded hover:bg-pink-600">=</button>
        
        <button @click="() => addDigit('0')" class="col-span-2 bg-pink-700 text-white p-4 rounded hover:bg-pink-800">0</button>
        <button @click="addDecimal" class="bg-pink-700 text-white p-4 rounded hover:bg-pink-800">.</button>
      </div>
    </div>
  </div>
</template>