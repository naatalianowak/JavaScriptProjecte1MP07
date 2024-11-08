import { ref, onMounted } from 'vue'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import axios from 'axios'
import axiosMockAdapter from 'axios-mock-adapter'

const users = ref([])
const loading = ref(true)
const error = ref(null)

const fetchUsers = async () => {
  loading.value = true
  error.value = null
  try {
    const response = await axios.get('https://dummyjson.com/users')
    users.value = response.data.users
  } catch (e) {
    error.value = 'Error carregant usuaris'
  } finally {
    loading.value = false
  }
}

describe('User List Component', () => {
  let mock

  beforeEach(() => {
    mock = new axiosMockAdapter(axios)
    users.value = []
    loading.value = true
    error.value = null
  })

  it('fetches and sets users correctly', async () => {
    mock.onGet('https://dummyjson.com/users').reply(200, {
      users: [
        { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
        { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com' }
      ]
    })

    await fetchUsers()

    expect(loading.value).toBe(false)
    expect(error.value).toBe(null)
    expect(users.value.length).toBe(2)
    expect(users.value[0].firstName).toBe('John')
    expect(users.value[1].email).toBe('jane@example.com')
  })

  it('handles errors correctly', async () => {
    mock.onGet('https://dummyjson.com/users').reply(500)

    await fetchUsers()

    expect(loading.value).toBe(false)
    expect(error.value).toBe('Error carregant usuaris')
    expect(users.value.length).toBe(0)
  })
})
