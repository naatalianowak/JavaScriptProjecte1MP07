import { mount } from '@vue/test-utils'
import Calculator from '../Calculator.vue'

describe('Calculator.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Calculator)
  })

  it('should display the initial value', () => {
    expect(wrapper.find('.text-right').text()).toBe('0')
  })

  it('should add digits correctly', async () => {
    const buttons = wrapper.findAll('button')
    
    // Click en el botón "7"
    const button7 = buttons.find(button => button.text() === '7')
    await button7.trigger('click')
    expect(wrapper.find('.text-right').text()).toBe('7')
    
    // Click en el botón "8"
    const button8 = buttons.find(button => button.text() === '8')
    await button8.trigger('click')
    expect(wrapper.find('.text-right').text()).toBe('78')
  })

  it('should perform addition', async () => {
    const buttons = wrapper.findAll('button')
    
    // Click en el botón "7"
    const button7 = buttons.find(button => button.text() === '7')
    await button7.trigger('click')
    
    // Click en el botón "+"
    const buttonPlus = buttons.find(button => button.text() === '+')
    await buttonPlus.trigger('click')
    
    // Click en el botón "3"
    const button3 = buttons.find(button => button.text() === '3')
    await button3.trigger('click')
    
    // Click en el botón "="
    const buttonEquals = buttons.find(button => button.text() === '=')
    await buttonEquals.trigger('click')
    
    // Verificar el resultado
    expect(wrapper.find('.text-right').text()).toBe('10')
  })

  it('should perform subtraction', async () => {
    const buttons = wrapper.findAll('button')
    
    // Click en el botón "9"
    const button9 = buttons.find(button => button.text() === '9')
    await button9.trigger('click')
    
    // Click en el botón "-"
    const buttonMinus = buttons.find(button => button.text() === '-')
    await buttonMinus.trigger('click')
    
    // Click en el botón "4"
    const button4 = buttons.find(button => button.text() === '4')
    await button4.trigger('click')
    
    // Click en el botón "="
    const buttonEquals = buttons.find(button => button.text() === '=')
    await buttonEquals.trigger('click')
    
    // Verificar el resultado
    expect(wrapper.find('.text-right').text()).toBe('5')
  })

  it('should clear the display', async () => {
    const buttons = wrapper.findAll('button')
    
    // Click en el botón "7"
    const button7 = buttons.find(button => button.text() === '7')
    await button7.trigger('click')
    
    // Click en el botón "Clear"
    const buttonClear = buttons.find(button => button.text() === 'Clear')
    await buttonClear.trigger('click')
    
    // Verificar que el display se haya limpiado
    expect(wrapper.find('.text-right').text()).toBe('0')
  })
})
