import { mount } from '@vue/test-utils'
import Comments from '../Comments.vue'

describe('Comments.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Comments)
  })

  it('should display loading message initially', () => {
    expect(wrapper.find('.text-xl').text()).toBe('Carregant comentaris...')
  })

  it('should display comments after loading', async () => {
    // Simular la càrrega de comentaris
    await wrapper.vm.$nextTick() // Esperar que el component es monti
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simular un retard en la càrrega

    // Verificar que els comentaris es mostren
    const comments = wrapper.findAll('.bg-pink-200')
    expect(comments.length).toBeGreaterThan(0) // Comprovar que hi ha comentaris
  })

  it('should display error message on fetch failure', async () => {
    // Simular un error en la càrrega de comentaris
    global.fetch = vi.fn(() =>
      Promise.reject(new Error('Error carregant comentaris'))
    )

    wrapper = mount(Comments) // Tornar a muntar el component per a la nova simulació
    await wrapper.vm.$nextTick() // Esperar que el component es monti
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simular un retard en la càrrega

    // Verificar que es mostra el missatge d'error
    expect(wrapper.find('.text-red-500').text()).toBe('Error carregant comentaris')
  })
})
